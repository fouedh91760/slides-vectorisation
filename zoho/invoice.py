"""
Client API Zoho Invoice.
Récupération des brouillons et mise à jour des factures CPF.
"""

import requests
from config.settings import ZOHO_INVOICE_BASE_URL, ZOHO_ORG_ID
from zoho.auth import zoho_auth


class ZohoInvoice:
    """Interactions avec l'API Zoho Invoice v3."""

    def __init__(self):
        self.base_url = f"{ZOHO_INVOICE_BASE_URL}/api/v3"

    def _headers(self) -> dict:
        headers = zoho_auth.get_headers()
        if ZOHO_ORG_ID:
            headers["X-com-zoho-invoice-organizationid"] = ZOHO_ORG_ID
        return headers

    def _get(self, endpoint: str, params: dict | None = None) -> dict:
        url = f"{self.base_url}/{endpoint}"
        response = requests.get(
            url, headers=self._headers(), params=params, timeout=30
        )
        response.raise_for_status()
        return response.json()

    def _put(self, endpoint: str, data: dict) -> dict:
        url = f"{self.base_url}/{endpoint}"
        response = requests.put(
            url, headers=self._headers(), json=data, timeout=30
        )
        response.raise_for_status()
        return response.json()

    # --- Lecture ---

    def get_draft_invoices(self) -> list[dict]:
        """Récupère toutes les factures en statut brouillon (draft)."""
        params = {"status": "draft"}
        data = self._get("invoices", params=params)
        return data.get("invoices", [])

    def get_invoice(self, invoice_id: str) -> dict:
        """Récupère le détail complet d'une facture."""
        data = self._get(f"invoices/{invoice_id}")
        return data.get("invoice", {})

    def search_items(self, name: str) -> list[dict]:
        """Recherche un article par nom dans le catalogue."""
        params = {"name": name}
        data = self._get("items", params=params)
        return data.get("items", [])

    def get_item_by_name(self, name: str) -> dict | None:
        """Retourne le premier article correspondant au nom donné."""
        items = self.search_items(name)
        for item in items:
            if item.get("name", "").lower() == name.lower():
                return item
        return items[0] if items else None

    # --- Écriture ---

    def update_invoice(self, invoice_id: str, payload: dict) -> dict:
        """
        Met à jour une facture existante.
        Le payload doit contenir les champs à modifier.
        """
        data = self._put(f"invoices/{invoice_id}", payload)
        return data.get("invoice", data)

    def mark_invoice_as_sent(self, invoice_id: str) -> dict:
        """
        Change le statut de la facture à 'sent' (prête à envoyer).
        Utilise l'endpoint d'action Zoho Invoice.
        """
        url = f"{self.base_url}/invoices/{invoice_id}/status/sent"
        response = requests.post(url, headers=self._headers(), timeout=30)
        response.raise_for_status()
        return response.json()
