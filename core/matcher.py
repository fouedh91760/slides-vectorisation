"""
Module de rapprochement entre Zoho Invoice, Zoho CRM et EDOF.
Étape 1 du processus : vérification et rapprochement des informations.
"""

import logging
from dataclasses import dataclass

from zoho.crm import ZohoCRM
from zoho.invoice import ZohoInvoice

logger = logging.getLogger(__name__)


@dataclass
class MatchResult:
    """Résultat du rapprochement Invoice ↔ CRM."""

    invoice: dict
    deal: dict
    candidate_name: str
    edof_reference: str
    manager_name: str | None
    training_start_date: str | None
    training_end_date: str | None
    training_hours: str | None
    product_type: str | None
    site: str | None
    amount: float | None
    exam_included: bool
    is_reinscription: bool


class InvoiceCRMMatcher:
    """
    Rapproche un brouillon de facture Invoice avec l'opportunité CRM correspondante.

    Processus :
    1. Récupère le brouillon depuis Zoho Invoice
    2. Extrait le nom de l'opportunité depuis la description de l'article
    3. Recherche l'opportunité dans Zoho CRM
    4. Extrait la référence EDOF et toutes les données nécessaires
    """

    def __init__(self):
        self.crm = ZohoCRM()
        self.invoice_api = ZohoInvoice()

    def match_invoice(self, invoice: dict) -> MatchResult | None:
        """
        Effectue le rapprochement complet pour une facture brouillon.
        Retourne un MatchResult ou None si le rapprochement échoue.
        """
        invoice_number = invoice.get("invoice_number", "")
        logger.info("Traitement de la facture brouillon : %s", invoice_number)

        # Récupérer le détail complet de la facture
        invoice_detail = self.invoice_api.get_invoice(invoice.get("invoice_id", ""))

        # Extraire le nom de l'opportunité depuis les articles de la facture
        deal_name = self._extract_deal_name(invoice_detail)
        if not deal_name:
            logger.warning(
                "Facture %s : impossible d'extraire le nom de l'opportunité",
                invoice_number,
            )
            return None

        logger.info("Recherche de l'opportunité : %s", deal_name)

        # Rechercher l'opportunité dans le CRM
        deal = self.crm.search_opportunity(deal_name)
        if not deal:
            logger.warning(
                "Facture %s : opportunité '%s' non trouvée dans le CRM",
                invoice_number,
                deal_name,
            )
            return None

        # Extraire la référence EDOF
        edof_ref = self.crm.get_edof_reference(deal)
        if not edof_ref:
            logger.warning(
                "Facture %s : référence EDOF introuvable pour l'opportunité '%s'",
                invoice_number,
                deal_name,
            )
            return None

        logger.info("Référence EDOF trouvée : %s", edof_ref)

        return MatchResult(
            invoice=invoice_detail,
            deal=deal,
            candidate_name=self.crm.get_candidate_name(deal),
            edof_reference=edof_ref,
            manager_name=self.crm.get_manager_name(deal),
            training_start_date=self.crm.get_training_start_date(deal),
            training_end_date=self.crm.get_training_end_date(deal),
            training_hours=self.crm.get_training_hours(deal),
            product_type=self.crm.get_product_type(deal),
            site=self.crm.get_site(deal),
            amount=self.crm.get_amount(deal),
            exam_included=self.crm.is_exam_included(deal),
            is_reinscription=self.crm.is_reinscription(deal),
        )

    def _extract_deal_name(self, invoice_detail: dict) -> str | None:
        """
        Extrait le nom de l'opportunité depuis la facture.
        Cherche dans les descriptions des lignes d'articles ou le champ référence.
        """
        # Essai 1 : champ reference / reference_number de la facture
        for field in ["reference_number", "reference"]:
            val = invoice_detail.get(field)
            if val:
                return val.strip()

        # Essai 2 : nom du premier article ou sa description
        line_items = invoice_detail.get("line_items", [])
        if line_items:
            first_item = line_items[0]
            # Le nom ou la description peut contenir le nom de l'opportunité
            for field in ["name", "description"]:
                val = first_item.get(field)
                if val:
                    return val.strip()

        return None
