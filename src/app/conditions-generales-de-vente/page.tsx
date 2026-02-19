import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions Générales de Vente de CAB Formations. Inscription, tarifs, paiement, rétractation, annulation et responsabilité.",
  alternates: { canonical: "https://cab-formations.fr/conditions-generales-de-vente" },
};

export default function ConditionsGeneralesDeVentePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            CONDITIONS GÉNÉRALES DE VENTE
          </h1>
          <p className="text-xl text-gray-300">
            Applicables à l&apos;ensemble des formations proposées par CAB Formations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Préambule */}
          <div>
            <div className="card bg-[var(--cab-gray)]">
              <p className="text-gray-700 leading-relaxed">
                Les présentes Conditions Générales de Vente (ci-après « CGV ») s&apos;appliquent à
                toutes les formations dispensées par CAB Formations, SAS au capital de [à compléter],
                dont le siège social est situé au 151 avenue Gallieni, Bât C, 93170 Bagnolet,
                immatriculée au RCS de Bobigny sous le numéro [à compléter], numéro de déclaration
                d&apos;activité : [à compléter].
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toute inscription à une formation dispensée par CAB Formations implique
                l&apos;acceptation sans réserve des présentes CGV par le client (ci-après « le
                Stagiaire »).
              </p>
            </div>
          </div>

          {/* Article 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 1 - Objet
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Les présentes CGV ont pour objet de définir les conditions dans lesquelles CAB
                Formations propose et dispense ses formations professionnelles, notamment les
                formations VTC (Voiture de Transport avec Chauffeur), Taxi, TPMR (Transport de
                Personnes à Mobilité Réduite) et formations continues.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Les formations sont dispensées en présentiel dans nos centres de formation agréés
                et/ou à distance via notre plateforme e-learning, selon la formule choisie par le
                Stagiaire.
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 2 - Inscription
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                L&apos;inscription à une formation est effective après :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  La réception du dossier d&apos;inscription complet (formulaire d&apos;inscription
                  signé, pièces justificatives demandées)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  L&apos;acceptation du devis et la signature de la convention de formation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Le versement d&apos;un acompte ou le paiement intégral de la formation, sauf en
                  cas de prise en charge par un organisme financeur
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                CAB Formations se réserve le droit de refuser une inscription en cas de dossier
                incomplet ou de non-respect des conditions d&apos;admission.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Un email de confirmation d&apos;inscription sera envoyé au Stagiaire avec le
                programme de formation, les dates, le lieu et les modalités pratiques.
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 3 - Tarifs et paiement
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Les tarifs des formations sont indiqués en euros TTC sur le site
                cab-formations.fr et dans les devis adressés aux stagiaires. Ils sont susceptibles
                d&apos;être modifiés à tout moment. Les tarifs applicables sont ceux en vigueur au
                moment de l&apos;inscription.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                <strong>Modes de paiement acceptés :</strong>
              </p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Carte bancaire
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Virement bancaire
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Chèque
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Espèces (dans la limite légale)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Paiement en 3 fois sans frais
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                <strong>Financement par un organisme tiers :</strong> En cas de prise en charge
                totale ou partielle par un organisme financeur (CPF, Pôle Emploi, OPCO, Conseil
                Régional, Mission Locale, etc.), le Stagiaire s&apos;engage à fournir
                l&apos;accord de prise en charge avant le début de la formation. En cas de prise en
                charge partielle, le Stagiaire s&apos;engage à régler le solde restant à sa charge.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                En cas de non-paiement ou de paiement partiel, CAB Formations se réserve le droit
                de suspendre ou d&apos;annuler la formation et d&apos;engager des procédures de
                recouvrement. Des pénalités de retard pourront être appliquées conformément à la
                législation en vigueur.
              </p>
            </div>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 4 - Droit de rétractation
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Conformément aux articles L.221-18 et suivants du Code de la consommation, le
                Stagiaire dispose d&apos;un délai de 14 jours calendaires à compter de la date de
                signature du contrat de formation pour exercer son droit de rétractation, sans avoir
                à justifier de motifs ni à payer de pénalités.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                La demande de rétractation doit être adressée par lettre recommandée avec accusé de
                réception à l&apos;adresse suivante : CAB Formations, 151 avenue Gallieni, Bât C,
                93170 Bagnolet, ou par email à{" "}
                <a
                  href="mailto:contact@cab-formations.fr"
                  className="text-[var(--cab-gold)] hover:underline"
                >
                  contact@cab-formations.fr
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                En cas de rétractation exercée dans le délai légal, CAB Formations procédera au
                remboursement intégral des sommes versées dans un délai de 30 jours à compter de la
                réception de la demande de rétractation.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                <strong>Nota :</strong> Si la formation commence avant l&apos;expiration du délai de
                rétractation avec l&apos;accord exprès du Stagiaire, ce dernier ne pourra exercer
                son droit de rétractation que pour la partie de la formation non encore suivie.
              </p>
            </div>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 5 - Annulation et report
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                <strong>Annulation par le Stagiaire :</strong>
              </p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Plus de 15 jours avant le début de la formation : remboursement intégral ou report
                  gratuit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Entre 7 et 15 jours avant le début de la formation : report possible ou
                  remboursement avec retenue de 30% des frais de formation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Moins de 7 jours avant le début de la formation : aucun remboursement. Un report
                  pourra être envisagé sous conditions
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Annulation par CAB Formations :</strong> CAB Formations se réserve le droit
                d&apos;annuler ou de reporter une session de formation en cas de force majeure, de
                nombre insuffisant de participants ou pour toute autre raison légitime. Dans ce cas,
                le Stagiaire sera informé dans les meilleurs délais et se verra proposer un report
                sur une autre session ou un remboursement intégral.
              </p>
            </div>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 6 - Obligations du Stagiaire
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">Le Stagiaire s&apos;engage à :</p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Suivre la formation avec assiduité et ponctualité
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Respecter le règlement intérieur du centre de formation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Fournir des informations exactes et à jour lors de l&apos;inscription
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Ne pas perturber le bon déroulement de la formation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Ne pas reproduire ni diffuser les supports pédagogiques fournis
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                En cas de manquement grave aux obligations ci-dessus, CAB Formations se réserve le
                droit d&apos;exclure le Stagiaire de la formation sans remboursement.
              </p>
            </div>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 7 - Responsabilité
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                CAB Formations s&apos;engage à mettre en oeuvre tous les moyens nécessaires pour
                assurer la qualité et la conformité de ses formations. Toutefois, CAB Formations ne
                saurait être tenue responsable :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  De l&apos;échec du Stagiaire à l&apos;examen VTC/Taxi, la réussite dépendant de
                  facteurs personnels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Des conséquences liées à un cas de force majeure (grève, catastrophe naturelle,
                  pandémie, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Des dommages indirects résultant de l&apos;utilisation ou de l&apos;impossibilité
                  d&apos;utiliser les services de formation
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                La responsabilité de CAB Formations est en tout état de cause limitée au montant
                de la formation concernée.
              </p>
            </div>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 8 - Litiges et droit applicable
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Les présentes CGV sont régies par le droit français. En cas de litige relatif à
                l&apos;interprétation ou à l&apos;exécution des présentes CGV, les parties
                s&apos;engagent à rechercher une solution amiable avant toute action judiciaire.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Conformément aux dispositions du Code de la consommation, le Stagiaire peut recourir
                gratuitement au service de médiation de la consommation. Le médiateur peut être saisi
                si aucune solution amiable n&apos;a pu être trouvée dans un délai de 2 mois à
                compter de la réclamation écrite adressée à CAB Formations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                À défaut de résolution amiable, tout litige sera soumis aux tribunaux compétents
                du ressort de Bobigny (Seine-Saint-Denis).
              </p>
            </div>
          </div>

          {/* Date de mise à jour */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>Dernière mise à jour : février 2026</p>
            <p className="mt-2">
              Pour toute question relative aux présentes CGV, contactez-nous à{" "}
              <a
                href="mailto:contact@cab-formations.fr"
                className="text-[var(--cab-gold)] hover:underline"
              >
                contact@cab-formations.fr
              </a>{" "}
              ou au{" "}
              <a href="tel:+33176380017" className="text-[var(--cab-gold)] hover:underline">
                01 76 38 00 17
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
