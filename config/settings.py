"""
Configuration du projet d'automatisation Zoho Invoice CPF.
Charge les variables d'environnement et définit les constantes métier.
"""

import os
from dotenv import load_dotenv

load_dotenv()

# --- Zoho OAuth2 ---
ZOHO_CLIENT_ID = os.getenv("ZOHO_CLIENT_ID")
ZOHO_CLIENT_SECRET = os.getenv("ZOHO_CLIENT_SECRET")
ZOHO_REFRESH_TOKEN = os.getenv("ZOHO_REFRESH_TOKEN")
ZOHO_ORG_ID = os.getenv("ZOHO_ORG_ID")

# --- Zoho API URLs ---
ZOHO_ACCOUNTS_URL = os.getenv("ZOHO_ACCOUNTS_URL", "https://accounts.zoho.eu")
ZOHO_CRM_BASE_URL = os.getenv("ZOHO_CRM_BASE_URL", "https://www.zohoapis.eu")
ZOHO_INVOICE_BASE_URL = os.getenv("ZOHO_INVOICE_BASE_URL", "https://invoice.zoho.eu")

# --- Constantes métier ---
DELAI_FACTURATION_JOURS = 37  # Date de fin de formation + 37 jours

TYPE_FINANCEMENT_CPF = "CPF"

ADRESSE_FACTURATION_CDC = {
    "attention": "Caisse des Dépôts et Consignations",
    "address": "15 quai Anatole France",
    "city": "Paris",
    "state": "",
    "zip": "75007",
    "country": "France",
}

# Frais d'examen
FRAIS_EXAMEN_THEORIQUE_CMA = 247.00       # VTC examen théorique
FRAIS_EXAMEN_PRATIQUE_CMA = 110.50         # VTC pratique (réinscription)

# Mapping des sites connus
SITES = {
    "bagnolet": "Bagnolet",
    "tremblay": "Tremblay",
}
