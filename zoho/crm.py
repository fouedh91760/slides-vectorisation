"""
Client API Zoho CRM.
Recherche d'opportunités et récupération des données liées au CPF.
"""

import requests
from config.settings import ZOHO_CRM_BASE_URL
from zoho.auth import zoho_auth


class ZohoCRM:
    """Interactions avec l'API Zoho CRM v2."""

    def __init__(self):
        self.base_url = f"{ZOHO_CRM_BASE_URL}/crm/v2"

    def _get(self, endpoint: str, params: dict | None = None) -> dict:
        url = f"{self.base_url}/{endpoint}"
        response = requests.get(
            url, headers=zoho_auth.get_headers(), params=params, timeout=30
        )
        response.raise_for_status()
        return response.json()

    def search_opportunity(self, deal_name: str) -> dict | None:
        """
        Recherche une opportunité (Deal) par nom exact dans le CRM.
        Retourne le premier résultat ou None.
        """
        params = {"criteria": f"(Deal_Name:equals:{deal_name})"}
        data = self._get("Deals/search", params=params)
        deals = data.get("data", [])
        return deals[0] if deals else None

    def get_opportunity(self, deal_id: str) -> dict | None:
        """Récupère une opportunité par son ID."""
        data = self._get(f"Deals/{deal_id}")
        records = data.get("data", [])
        return records[0] if records else None

    def get_edof_reference(self, deal: dict) -> str | None:
        """
        Extrait la référence EDOF (référence financeur) depuis une opportunité.
        Le nom du champ personnalisé peut varier selon votre configuration CRM.
        """
        # Champs possibles — à adapter à votre configuration CRM
        for field_name in [
            "R_f_rence_EDOF",
            "Reference_EDOF",
            "Ref_EDOF",
            "R_f_rence_financeur",
            "Reference_Financeur",
        ]:
            value = deal.get(field_name)
            if value:
                return str(value)
        return None

    def get_candidate_name(self, deal: dict) -> str:
        """Extrait le nom du candidat depuis l'opportunité."""
        # Essai via le contact lié, sinon depuis le nom de l'opportunité
        contact = deal.get("Contact_Name") or {}
        if isinstance(contact, dict):
            name = contact.get("name", "")
            if name:
                return name
        return deal.get("Deal_Name", "")

    def get_manager_name(self, deal: dict) -> str | None:
        """Récupère le nom du gestionnaire (vendeur/owner) de l'opportunité."""
        owner = deal.get("Owner") or {}
        if isinstance(owner, dict):
            return owner.get("name")
        return None

    def get_training_end_date(self, deal: dict) -> str | None:
        """
        Récupère la date de fin de formation depuis l'opportunité.
        Retourne la date au format YYYY-MM-DD ou None.
        """
        for field_name in [
            "Date_de_fin_de_formation",
            "Date_fin_formation",
            "Closing_Date",
        ]:
            value = deal.get(field_name)
            if value:
                return str(value)
        return None

    def get_training_start_date(self, deal: dict) -> str | None:
        """Récupère la date de début de formation."""
        for field_name in [
            "Date_de_d_but_de_formation",
            "Date_debut_formation",
        ]:
            value = deal.get(field_name)
            if value:
                return str(value)
        return None

    def get_site(self, deal: dict) -> str | None:
        """Récupère le site de formation (Bagnolet, Tremblay, etc.)."""
        for field_name in ["Site", "Site_de_formation", "Lieu"]:
            value = deal.get(field_name)
            if value:
                return str(value)
        return None

    def get_training_hours(self, deal: dict) -> str | None:
        """Récupère le nombre d'heures de formation."""
        for field_name in [
            "Nombre_d_heures",
            "Nb_heures",
            "Dur_e_en_heures",
        ]:
            value = deal.get(field_name)
            if value:
                return str(value)
        return None

    def is_exam_included(self, deal: dict) -> bool:
        """Vérifie si l'examen est inclus (pour les formations VTC)."""
        for field_name in ["Examen_inclus", "Examen_Inclus"]:
            value = deal.get(field_name)
            if value:
                return str(value).lower() in ("oui", "yes", "true", "1")
        return False

    def is_reinscription(self, deal: dict) -> bool:
        """Vérifie si c'est une réinscription (pour frais d'examen pratique)."""
        for field_name in ["R_inscription", "Reinscription"]:
            value = deal.get(field_name)
            if value:
                return str(value).lower() in ("oui", "yes", "true", "1")
        return False

    def get_product_type(self, deal: dict) -> str | None:
        """Récupère le type de produit (VTC TH, PR, R489, Permis C, etc.)."""
        for field_name in [
            "Type_de_produit",
            "Type_produit",
            "Type_formation",
        ]:
            value = deal.get(field_name)
            if value:
                return str(value)
        return None

    def get_amount(self, deal: dict) -> float | None:
        """Récupère le montant de l'opportunité."""
        amount = deal.get("Amount")
        if amount is not None:
            return float(amount)
        return None
