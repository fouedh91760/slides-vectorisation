"""
Automatisation du traitement des factures CPF Zoho Invoice.

Ce script orchestre le processus complet :
1. Récupère les brouillons de factures depuis Zoho Invoice
2. Pour chaque brouillon, recherche l'opportunité correspondante dans Zoho CRM
3. Extrait la référence EDOF et les informations de la formation
4. Met à jour la facture avec toutes les informations requises
5. Gère les cas particuliers (frais d'examen VTC, réinscription)
6. Passe la facture en statut "prête à envoyer"
"""

import argparse
import logging
import sys

from core.invoice_updater import InvoiceUpdater
from core.matcher import InvoiceCRMMatcher
from zoho.invoice import ZohoInvoice

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s - %(message)s",
)
logger = logging.getLogger(__name__)


def process_all_drafts(dry_run: bool = False) -> None:
    """Traite tous les brouillons de factures CPF."""
    invoice_api = ZohoInvoice()
    matcher = InvoiceCRMMatcher()
    updater = InvoiceUpdater()

    logger.info("Récupération des brouillons de factures...")
    drafts = invoice_api.get_draft_invoices()
    logger.info("%d brouillon(s) trouvé(s)", len(drafts))

    success_count = 0
    error_count = 0
    skipped_count = 0

    for draft in drafts:
        invoice_number = draft.get("invoice_number", "?")
        try:
            # Étape 1 : Rapprochement Invoice ↔ CRM
            match = matcher.match_invoice(draft)
            if not match:
                logger.warning(
                    "Facture %s : rapprochement échoué, ignorée", invoice_number
                )
                skipped_count += 1
                continue

            if dry_run:
                logger.info(
                    "[DRY RUN] Facture %s serait mise à jour avec :\n"
                    "  Candidat : %s\n"
                    "  Réf EDOF : %s\n"
                    "  Gestionnaire : %s\n"
                    "  Type produit : %s\n"
                    "  Site : %s\n"
                    "  Date fin formation : %s\n"
                    "  Examen inclus : %s\n"
                    "  Réinscription : %s",
                    invoice_number,
                    match.candidate_name,
                    match.edof_reference,
                    match.manager_name,
                    match.product_type,
                    match.site,
                    match.training_end_date,
                    match.exam_included,
                    match.is_reinscription,
                )
                success_count += 1
                continue

            # Étape 2 : Mise à jour de la facture
            updater.update(match)

            # Étape 3 : Passer en statut "prête à envoyer"
            invoice_id = match.invoice.get("invoice_id")
            invoice_api.mark_invoice_as_sent(invoice_id)
            logger.info(
                "Facture %s : traitée et marquée prête à envoyer", invoice_number
            )

            success_count += 1

        except Exception:
            logger.exception("Erreur lors du traitement de la facture %s", invoice_number)
            error_count += 1

    logger.info(
        "Traitement terminé : %d succès, %d ignorées, %d erreurs",
        success_count,
        skipped_count,
        error_count,
    )


def process_single_invoice(invoice_id: str, dry_run: bool = False) -> None:
    """Traite une seule facture par son ID."""
    invoice_api = ZohoInvoice()
    matcher = InvoiceCRMMatcher()
    updater = InvoiceUpdater()

    logger.info("Récupération de la facture %s...", invoice_id)
    invoice = invoice_api.get_invoice(invoice_id)

    if not invoice:
        logger.error("Facture %s introuvable", invoice_id)
        return

    match = matcher.match_invoice(invoice)
    if not match:
        logger.error("Rapprochement échoué pour la facture %s", invoice_id)
        return

    if dry_run:
        logger.info(
            "[DRY RUN] Facture %s serait mise à jour avec :\n"
            "  Candidat : %s\n"
            "  Réf EDOF : %s\n"
            "  Gestionnaire : %s\n"
            "  Type produit : %s\n"
            "  Site : %s",
            invoice_id,
            match.candidate_name,
            match.edof_reference,
            match.manager_name,
            match.product_type,
            match.site,
        )
        return

    updater.update(match)
    invoice_api.mark_invoice_as_sent(invoice.get("invoice_id", invoice_id))
    logger.info("Facture %s traitée avec succès", invoice_id)


def main():
    parser = argparse.ArgumentParser(
        description="Automatisation des factures CPF Zoho Invoice"
    )
    parser.add_argument(
        "--invoice-id",
        help="ID d'une facture spécifique à traiter (sinon traite tous les brouillons)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Mode simulation : affiche les modifications sans les appliquer",
    )
    args = parser.parse_args()

    if args.invoice_id:
        process_single_invoice(args.invoice_id, dry_run=args.dry_run)
    else:
        process_all_drafts(dry_run=args.dry_run)


if __name__ == "__main__":
    main()
