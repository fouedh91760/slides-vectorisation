# Automatisation Factures CPF - Zoho Invoice / CRM

Automatisation du traitement des brouillons de factures CPF dans Zoho Invoice, en rapprochant les données de Zoho CRM et EDOF.

## Processus automatisé

1. **Récupération** des brouillons de factures depuis Zoho Invoice
2. **Rapprochement** avec l'opportunité correspondante dans Zoho CRM
3. **Extraction** de la référence EDOF (référence financeur)
4. **Mise à jour** de la facture :
   - Adresse de facturation → Caisse des Dépôts et Consignations
   - Numéro de commande → Nom candidat + Réf EDOF
   - Date de facture → Date fin formation + 37 jours
   - Vendeur → Gestionnaire de l'opportunité
   - Type de produit, type de financement (CPF), site
   - Description de l'article (candidat, réf EDOF, session, heures, site)
5. **Cas particuliers** :
   - Formation VTC avec examen inclus → Frais d'examen théorique CMA (247 €)
   - Formation pratique réinscription → Frais d'examen pratique CMA (110,50 €)
6. **Finalisation** → Statut "prête à envoyer"

## Installation

```bash
pip install -r requirements.txt
cp .env.example .env
# Remplir les variables dans .env
```

## Configuration

Renseigner dans `.env` :

| Variable | Description |
|----------|-------------|
| `ZOHO_CLIENT_ID` | ID client OAuth2 Zoho |
| `ZOHO_CLIENT_SECRET` | Secret client OAuth2 |
| `ZOHO_REFRESH_TOKEN` | Refresh token OAuth2 |
| `ZOHO_ORG_ID` | ID de l'organisation Zoho Invoice |
| `ZOHO_CRM_BASE_URL` | URL API CRM (ex: `https://www.zohoapis.eu`) |
| `ZOHO_INVOICE_BASE_URL` | URL API Invoice (ex: `https://invoice.zoho.eu`) |
| `ZOHO_ACCOUNTS_URL` | URL OAuth (ex: `https://accounts.zoho.eu`) |

### Obtenir les credentials Zoho

1. Aller sur [Zoho API Console](https://api-console.zoho.eu/)
2. Créer une application **Self Client**
3. Générer un code d'autorisation avec les scopes :
   - `ZohoCRM.modules.READ`
   - `ZohoInvoice.invoices.READ`
   - `ZohoInvoice.invoices.UPDATE`
   - `ZohoInvoice.items.READ`
4. Échanger le code contre un refresh token

## Utilisation

### Traiter tous les brouillons

```bash
python main.py
```

### Mode simulation (dry run)

```bash
python main.py --dry-run
```

### Traiter une facture spécifique

```bash
python main.py --invoice-id 123456789
```

## Architecture

```
├── config/
│   └── settings.py           # Configuration et constantes métier
├── zoho/
│   ├── auth.py               # Authentification OAuth2 Zoho
│   ├── crm.py                # Client API Zoho CRM
│   └── invoice.py            # Client API Zoho Invoice
├── core/
│   ├── matcher.py            # Rapprochement Invoice ↔ CRM
│   ├── invoice_updater.py    # Mise à jour complète de la facture
│   └── special_cases.py      # Frais examen VTC / pratique
└── main.py                   # Orchestrateur principal
```

## Adaptation

Les noms des champs personnalisés dans Zoho CRM peuvent varier selon votre configuration. Les champs à adapter se trouvent dans `zoho/crm.py` (listes de noms de champs possibles pour chaque donnée).
