import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente de CAB Formations. Inscription, tarifs, paiement, rétractation, annulation et responsabilité.",
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
            Applicables à l&apos;ensemble des prestations de formation proposées par CAB Formations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          {/* Préambule */}
          <div>
            <div className="card bg-[var(--cab-gray)]">
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>Dernière mise à jour :</strong> Février 2026
                <br />
                Les présentes Conditions Générales de Vente (ci-après « CGV ») s&apos;appliquent
                à toutes les prestations de formation conclues par CAB Formations, dont le
                siège social est situé au 151 avenue Gallieni, Bât C, 93170 Bagnolet, auprès
                de ses clients, qu&apos;ils soient particuliers ou professionnels.
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
                Les présentes CGV ont pour objet de définir les conditions dans lesquelles
                CAB Formations fournit des prestations de formation professionnelle à ses
                clients. Elles s&apos;appliquent à l&apos;ensemble des formations proposées par
                CAB Formations, qu&apos;elles soient dispensées en présentiel, en e-learning ou
                en format mixte.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toute inscription à une formation implique l&apos;acceptation sans réserve des
                présentes CGV par le client. CAB Formations se réserve le droit de modifier
                les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur
                à la date de l&apos;inscription.
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
                L&apos;inscription à une formation est effective après réception par CAB Formations
                du dossier complet comprenant :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Le bulletin d&apos;inscription dûment complété et signé
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Une copie de la pièce d&apos;identité en cours de validité
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Une copie du permis de conduire (catégorie B, obtenu depuis plus de 3 ans)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Le règlement de l&apos;acompte ou la totalité du montant de la formation
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                CAB Formations confirmera l&apos;inscription par email dans un délai de 48 heures
                ouvrées suivant la réception du dossier complet. L&apos;inscription est nominative
                et ne peut être cédée à un tiers sans l&apos;accord écrit de CAB Formations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                En cas de dossier incomplet, CAB Formations se réserve le droit de reporter
                l&apos;inscription jusqu&apos;à réception des pièces manquantes.
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
                Les tarifs des formations sont indiqués en euros TTC sur le site internet
                de CAB Formations et dans les documents commerciaux. Les tarifs sont ceux
                en vigueur au jour de l&apos;inscription.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                <strong>Modalités de paiement acceptées :</strong>
              </p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Paiement comptant par carte bancaire, virement ou chèque
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Paiement en 3 fois sans frais (sous réserve d&apos;acceptation du dossier)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Financement via le CPF (Compte Personnel de Formation)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Prise en charge par Pôle Emploi, la Mission Locale ou le Conseil Régional
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                En cas de financement par un organisme tiers (Pôle Emploi, CPF, OPCO, etc.),
                le client reste redevable du montant de la formation en cas de non-prise en
                charge totale ou partielle.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Tout retard de paiement entraînera l&apos;application de pénalités de retard
                calculées au taux d&apos;intérêt légal majoré de 3 points, ainsi qu&apos;une indemnité
                forfaitaire de 40€ pour frais de recouvrement, conformément aux articles
                L.441-10 et D.441-5 du Code de commerce.
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
                Conformément aux articles L.221-18 et suivants du Code de la consommation,
                le client particulier dispose d&apos;un délai de 14 jours calendaires à compter
                de la signature du contrat de formation pour exercer son droit de rétractation,
                sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Pour exercer ce droit, le client doit adresser à CAB Formations une déclaration
                écrite (courrier recommandé avec accusé de réception ou email) exprimant
                clairement sa volonté de se rétracter, à l&apos;adresse suivante :
              </p>
              <div className="mt-3 bg-[var(--cab-gray)] rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  CAB Formations
                  <br />
                  151 avenue Gallieni, Bât C
                  <br />
                  93170 Bagnolet
                  <br />
                  Email : contact@cab-formations.fr
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                En cas de rétractation, CAB Formations remboursera l&apos;intégralité des sommes
                versées dans un délai maximum de 14 jours à compter de la réception de la
                demande de rétractation.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                <strong>Attention :</strong> si la formation a débuté avant l&apos;expiration du délai
                de rétractation, avec l&apos;accord exprès du client, le montant correspondant aux
                prestations déjà exécutées sera déduit du remboursement, au prorata du prix
                total de la formation.
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
                <strong>Annulation par le client :</strong>
              </p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Plus de 15 jours avant le début de la formation : remboursement intégral
                  ou report sans frais
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Entre 7 et 15 jours avant : 50% du montant sera retenu à titre d&apos;indemnité
                  forfaitaire, ou possibilité de report avec frais de 100€
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Moins de 7 jours avant ou absence non justifiée : aucun remboursement
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Annulation par CAB Formations :</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                CAB Formations se réserve le droit d&apos;annuler ou de reporter une session de
                formation en cas de nombre insuffisant de participants, de force majeure ou
                de tout événement empêchant le bon déroulement de la formation. Dans ce cas,
                le client sera informé dans les meilleurs délais et pourra opter pour un
                remboursement intégral ou un report sur une prochaine session.
              </p>
            </div>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 6 - Responsabilité
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                CAB Formations s&apos;engage à mettre en oeuvre tous les moyens nécessaires pour
                assurer la qualité de ses formations conformément aux référentiels en vigueur
                et aux exigences de la certification QUALIOPI.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toutefois, CAB Formations ne saurait être tenu responsable :
              </p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  De l&apos;échec du stagiaire à l&apos;examen VTC, la réussite dépendant également
                  de l&apos;investissement personnel du candidat
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Des modifications des conditions d&apos;examen décidées par les autorités
                  compétentes (CMA)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Des dysfonctionnements techniques indépendants de sa volonté (pannes
                  informatiques, coupures internet) pour les formations en e-learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Des dommages indirects pouvant résulter de la participation à une formation
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                La responsabilité de CAB Formations est limitée au montant de la formation
                concernée.
              </p>
            </div>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 7 - Règlement intérieur
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Tout stagiaire s&apos;engage à respecter le règlement intérieur de CAB Formations
                qui lui est remis lors de son inscription. Le non-respect de ce règlement
                pourra entraîner l&apos;exclusion du stagiaire sans remboursement.
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
                Les présentes CGV sont soumises au droit français. En cas de litige relatif
                à l&apos;interprétation ou à l&apos;exécution des présentes, les parties s&apos;engagent
                à rechercher une solution amiable avant toute action judiciaire.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Conformément aux dispositions du Code de la consommation, le client peut
                recourir gratuitement au service de médiation de la consommation. Le médiateur
                compétent est : [A compléter]. Vous pouvez également accéder à la plateforme
                de règlement en ligne des litiges de la Commission européenne à l&apos;adresse
                suivante :{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cab-gold)] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                À défaut de résolution amiable, tout litige sera soumis à la compétence
                exclusive des tribunaux du ressort du siège social de CAB Formations.
              </p>
            </div>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 9 - Protection des données personnelles
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Les données personnelles collectées lors de l&apos;inscription sont traitées
                conformément au Règlement Général sur la Protection des Données (RGPD).
                Pour plus d&apos;informations, consultez notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-[var(--cab-gold)] hover:underline font-semibold"
                >
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="card bg-[var(--cab-gray)] text-center">
            <p className="text-gray-700">
              Pour toute question relative aux présentes CGV, contactez-nous :
            </p>
            <p className="mt-2">
              <a href="tel:+33176380017" className="text-[var(--cab-gold)] font-semibold hover:underline">
                01 76 38 00 17
              </a>
              {" | "}
              <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] font-semibold hover:underline">
                contact@cab-formations.fr
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
