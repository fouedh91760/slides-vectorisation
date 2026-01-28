"""
Gestion des cas particuliers pour les factures CPF.

Cas gérés :
- Formation VTC avec examen inclus → frais d'examen théorique CMA (247 €)
- Formation pratique (réinscription) → frais d'examen pratique CMA (110,50 €)
"""

import logging

from config.settings import FRAIS_EXAMEN_PRATIQUE_CMA, FRAIS_EXAMEN_THEORIQUE_CMA

logger = logging.getLogger(__name__)


def build_exam_fee_lines(match, invoice_api) -> list[dict]:
    """
    Construit les lignes de frais d'examen selon les cas particuliers.

    Règles :
    1. Formation VTC + Examen inclus = Oui
       → Ajouter "Frais d'examen théorique CMA" (247 €)

    2. Formation pratique + Réinscription = Oui
       → Ajouter "Frais d'examen pratique CMA" (110,50 €)
    """
    lines = []
    product_type = (match.product_type or "").upper()

    # Cas 1 : VTC avec examen inclus
    if "VTC" in product_type and match.exam_included:
        logger.info("Cas particulier : VTC avec examen inclus → ajout frais théorique")
        line = _build_fee_line(
            invoice_api=invoice_api,
            search_name="Frais d'examen théorique CMA",
            description="Frais d'examen théorique CMA",
            amount=FRAIS_EXAMEN_THEORIQUE_CMA,
        )
        lines.append(line)

    # Cas 2 : Formation pratique avec réinscription
    is_practical = any(
        keyword in product_type for keyword in ["PR", "PRATIQUE", "2H", "4H"]
    )
    if is_practical and match.is_reinscription:
        logger.info(
            "Cas particulier : formation pratique réinscription → ajout frais pratique"
        )
        line = _build_fee_line(
            invoice_api=invoice_api,
            search_name="Frais d'examen pratique CMA",
            description="Frais d'examen pratique CMA",
            amount=FRAIS_EXAMEN_PRATIQUE_CMA,
        )
        lines.append(line)

    return lines


def _build_fee_line(
    invoice_api, search_name: str, description: str, amount: float
) -> dict:
    """Construit une ligne de frais en recherchant l'article dans le catalogue."""
    line = {
        "description": description,
        "rate": amount,
        "quantity": 1,
    }

    # Essayer de trouver l'article dans le catalogue Zoho Invoice
    catalog_item = invoice_api.get_item_by_name(search_name)
    if catalog_item:
        line["item_id"] = catalog_item.get("item_id")
        logger.info("Article catalogue trouvé pour '%s'", search_name)
    else:
        logger.warning(
            "Article '%s' non trouvé dans le catalogue, utilisation manuelle",
            search_name,
        )

    return line
