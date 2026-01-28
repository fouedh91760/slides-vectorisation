"""
Module de mise à jour des factures Zoho Invoice.
Étape 2 du processus : paramétrage complet de la facture.
"""

import logging
from datetime import datetime, timedelta

from config.settings import (
    ADRESSE_FACTURATION_CDC,
    DELAI_FACTURATION_JOURS,
    TYPE_FINANCEMENT_CPF,
)
from core.matcher import MatchResult
from core.special_cases import build_exam_fee_lines
from zoho.invoice import ZohoInvoice

logger = logging.getLogger(__name__)


class InvoiceUpdater:
    """
    Met à jour une facture brouillon avec toutes les informations du CRM.

    Champs mis à jour :
    - Adresse de facturation (Caisse des Dépôts et Consignations)
    - Numéro de commande : Nom du candidat + référence EDOF
    - Date de facture : date fin formation + 37 jours
    - Vendeur : gestionnaire de l'opportunité
    - Type de produit, type de financement, site
    - Détail des articles (formation + frais éventuels)
    - Statut : prête à envoyer
    """

    def __init__(self):
        self.invoice_api = ZohoInvoice()

    def update(self, match: MatchResult) -> dict:
        """Applique toutes les mises à jour à la facture."""
        invoice_id = match.invoice.get("invoice_id")
        logger.info("Mise à jour de la facture %s", invoice_id)

        payload = self._build_payload(match)

        # Mettre à jour la facture
        updated = self.invoice_api.update_invoice(invoice_id, payload)
        logger.info("Facture %s mise à jour avec succès", invoice_id)

        return updated

    def _build_payload(self, match: MatchResult) -> dict:
        """Construit le payload complet de mise à jour."""
        payload = {}

        # 1. Adresse de facturation
        payload["billing_address"] = ADRESSE_FACTURATION_CDC

        # 2. Numéro de commande : Nom du candidat + référence EDOF
        payload["reference_number"] = (
            f"{match.candidate_name} - {match.edof_reference}"
        )

        # 3. Date de facture : date fin formation + 37 jours
        invoice_date = self._calculate_invoice_date(match.training_end_date)
        if invoice_date:
            payload["date"] = invoice_date

        # 4. Vendeur (salesperson)
        if match.manager_name:
            payload["salesperson_name"] = match.manager_name

        # 5. Champs personnalisés : type de produit, financement, site
        custom_fields = []
        if match.product_type:
            custom_fields.append(
                {"label": "Type de produit", "value": match.product_type}
            )
        custom_fields.append(
            {"label": "Type de financement", "value": TYPE_FINANCEMENT_CPF}
        )
        if match.site:
            custom_fields.append({"label": "Site", "value": match.site})

        if custom_fields:
            payload["custom_fields"] = custom_fields

        # 6. Articles (line items)
        line_items = self._build_line_items(match)
        if line_items:
            payload["line_items"] = line_items

        return payload

    def _calculate_invoice_date(self, training_end_date: str | None) -> str | None:
        """Calcule la date de facture = date fin formation + 37 jours."""
        if not training_end_date:
            logger.warning("Date de fin de formation manquante, date non calculée")
            return None

        try:
            end_date = datetime.strptime(training_end_date, "%Y-%m-%d")
            invoice_date = end_date + timedelta(days=DELAI_FACTURATION_JOURS)
            return invoice_date.strftime("%Y-%m-%d")
        except ValueError:
            logger.error(
                "Format de date invalide pour la fin de formation : %s",
                training_end_date,
            )
            return None

    def _build_line_items(self, match: MatchResult) -> list[dict]:
        """
        Construit les lignes d'articles de la facture.

        Ligne 1 : Formation correspondante
        Ligne 2+ : Frais d'examen si applicable
        """
        items = []

        # Ligne principale : formation
        description = self._build_item_description(match)
        main_item = {
            "description": description,
        }
        # Si on a un montant EDOF, on le met
        if match.amount is not None:
            main_item["rate"] = match.amount
            main_item["quantity"] = 1

        # Rechercher l'article correspondant dans le catalogue
        if match.product_type:
            catalog_item = self.invoice_api.get_item_by_name(match.product_type)
            if catalog_item:
                main_item["item_id"] = catalog_item.get("item_id")

        items.append(main_item)

        # Lignes supplémentaires : frais d'examen (cas particuliers)
        exam_lines = build_exam_fee_lines(
            match=match,
            invoice_api=self.invoice_api,
        )
        items.extend(exam_lines)

        return items

    def _build_item_description(self, match: MatchResult) -> str:
        """
        Construit la description de l'article :
        - Nom du candidat
        - Référence EDOF
        - Date de la session
        - Nombre d'heures
        - Site
        """
        parts = [match.candidate_name, f"Réf. EDOF : {match.edof_reference}"]

        if match.training_start_date and match.training_end_date:
            parts.append(
                f"Session : du {match.training_start_date} au {match.training_end_date}"
            )
        elif match.training_start_date:
            parts.append(f"Début : {match.training_start_date}")

        if match.training_hours:
            parts.append(f"Durée : {match.training_hours}h")

        if match.site:
            parts.append(f"Site : {match.site}")

        return "\n".join(parts)
