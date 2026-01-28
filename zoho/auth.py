"""
Module d'authentification OAuth2 pour les APIs Zoho.
Gère le rafraîchissement automatique du token d'accès.
"""

import time
import requests
from config.settings import (
    ZOHO_ACCOUNTS_URL,
    ZOHO_CLIENT_ID,
    ZOHO_CLIENT_SECRET,
    ZOHO_REFRESH_TOKEN,
)


class ZohoAuth:
    """Gère l'authentification OAuth2 Zoho avec renouvellement automatique."""

    def __init__(self):
        self._access_token = None
        self._token_expiry = 0

    def get_access_token(self) -> str:
        """Retourne un token d'accès valide, le renouvelle si nécessaire."""
        if self._access_token and time.time() < self._token_expiry:
            return self._access_token

        url = f"{ZOHO_ACCOUNTS_URL}/oauth/v2/token"
        params = {
            "grant_type": "refresh_token",
            "client_id": ZOHO_CLIENT_ID,
            "client_secret": ZOHO_CLIENT_SECRET,
            "refresh_token": ZOHO_REFRESH_TOKEN,
        }

        response = requests.post(url, params=params, timeout=30)
        response.raise_for_status()
        data = response.json()

        if "access_token" not in data:
            raise RuntimeError(f"Échec d'obtention du token Zoho : {data}")

        self._access_token = data["access_token"]
        # Le token expire en général après 3600s, on prend une marge de 5 min
        self._token_expiry = time.time() + data.get("expires_in", 3600) - 300
        return self._access_token

    def get_headers(self) -> dict:
        """Retourne les headers HTTP avec le token d'autorisation."""
        return {
            "Authorization": f"Zoho-oauthtoken {self.get_access_token()}",
            "Content-Type": "application/json",
        }


# Instance partagée
zoho_auth = ZohoAuth()
