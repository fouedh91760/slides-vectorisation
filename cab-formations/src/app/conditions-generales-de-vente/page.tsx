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
      <section className="hero-gradient text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            CONDITIONS GÉNÉRALES DE VENTE
          </h1>
          <p className="text-lg text-gray-300">
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
              <p className="text-gray-600 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à
                toutes les prestations de formation conclues par <strong>CAB Formations</strong>,
                SAS au capital de [À compléter], dont le siège social est situé au
                151 avenue Gallieni, Bât C, 93170 Bagnolet, immatriculée au RCS de
                Bobigny sous le numéro [À compléter], numéro de déclaration
                d&apos;activité : [À compléter].
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Toute inscription à une formation implique l&apos;acceptation sans
                réserve des présentes CGV par le stagiaire ou le commanditaire de
                la formation.
              </p>
            </div>
          </div>

          {/* Article 1 - Objet */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 1 - Objet
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                Les présentes CGV ont pour objet de définir les conditions dans
                lesquelles CAB Formations propose et fournit des prestations de
                formation professionnelle continue aux stagiaires, qu&apos;ils soient
                des particuliers ou des entreprises.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les formations proposées par CAB Formations comprennent notamment :
                les formations VTC théoriques (35h, 70h, 105h), les formations VTC
                e-learning, les formations VTC pratiques, les formations continues
                obligatoires (14h), les formations Taxi et les formations TPMR.
              </p>
            </div>
          </div>

          {/* Article 2 - Inscription */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 2 - Inscription
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;inscription à une formation s&apos;effectue par la signature
                d&apos;un contrat ou d&apos;une convention de formation accompagnée
                du règlement total ou partiel de la formation, ou de la validation
                d&apos;un dossier de prise en charge par un organisme financeur (CPF,
                Pôle Emploi, OPCO, etc.).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;inscription est considérée comme définitive à réception :
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Du contrat ou de la convention de formation signée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Du règlement ou de l&apos;accord de prise en charge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Des pièces justificatives requises (CNI, permis de conduire, etc.)</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                CAB Formations se réserve le droit de refuser une inscription en cas
                de dossier incomplet ou de places insuffisantes dans la session choisie.
                Dans ce cas, le stagiaire sera orienté vers une autre session disponible.
              </p>
            </div>
          </div>

          {/* Article 3 - Tarifs et paiement */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 3 - Tarifs et paiement
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                Les tarifs des formations sont indiqués en euros TTC sur le site
                cab-formations.fr et dans les programmes de formation. Ils sont
                susceptibles de modification à tout moment, sans préavis. Le tarif
                applicable est celui en vigueur au moment de l&apos;inscription.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Modes de paiement acceptés :</strong>
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Carte bancaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Virement bancaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Paiement en 3 fois sans frais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>CPF (Compte Personnel de Formation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Pôle Emploi (France Travail)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>OPCO et autres organismes de financement</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                En cas de paiement par un organisme tiers, le stagiaire reste
                solidairement responsable du règlement en cas de défaillance de
                l&apos;organisme financeur.
              </p>
            </div>
          </div>

          {/* Article 4 - Rétractation */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 4 - Droit de rétractation
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément aux articles L.221-18 et suivants du Code de la
                consommation, le stagiaire (personne physique) dispose d&apos;un
                délai de <strong>14 jours calendaires</strong> à compter de la
                signature du contrat de formation pour exercer son droit de
                rétractation, sans avoir à justifier de motifs ni à payer de
                pénalités.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ce droit de rétractation s&apos;exerce par lettre recommandée avec
                accusé de réception adressée à :
              </p>
              <div className="bg-[var(--cab-gray)] rounded-lg p-4 mb-4">
                <p className="text-gray-600 text-sm">
                  CAB Formations<br />
                  151 avenue Gallieni, Bât C<br />
                  93170 Bagnolet<br />
                  Ou par email : contact@cab-formations.fr
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                En cas de rétractation, CAB Formations procédera au remboursement
                intégral des sommes versées dans un délai de 30 jours à compter
                de la réception de la demande.
              </p>
            </div>
          </div>

          {/* Article 5 - Annulation */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 5 - Annulation et report
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Annulation par le stagiaire :</strong>
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>
                    Annulation plus de 15 jours avant le début de la formation :
                    remboursement intégral des sommes versées.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>
                    Annulation entre 7 et 15 jours avant le début : remboursement de
                    50% des sommes versées ou report gratuit sur une autre session.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>
                    Annulation moins de 7 jours avant le début : aucun remboursement.
                    Report possible moyennant des frais de gestion de 50€.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Annulation par CAB Formations :</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                CAB Formations se réserve le droit d&apos;annuler ou de reporter une
                session de formation en cas de force majeure, d&apos;effectif
                insuffisant ou de circonstances exceptionnelles. Dans ce cas, le
                stagiaire sera proposé un report sur la prochaine session
                disponible ou le remboursement intégral des sommes versées.
              </p>
            </div>
          </div>

          {/* Article 6 - Responsabilité */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 6 - Responsabilité
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                CAB Formations s&apos;engage à dispenser les formations avec le soin
                et la diligence nécessaires, en mettant en oeuvre les moyens
                pédagogiques et techniques adaptés. L&apos;obligation de CAB
                Formations est une <strong>obligation de moyens</strong> et non de
                résultat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                CAB Formations ne saurait être tenue responsable :
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>De l&apos;échec du stagiaire à l&apos;examen VTC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>
                    De toute modification des conditions d&apos;examen par les
                    autorités compétentes (CMA)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>
                    Des dommages indirects résultant de la formation ou de son
                    absence
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Le stagiaire s&apos;engage à respecter le règlement intérieur du
                centre de formation, à suivre la formation avec assiduité et à
                adopter un comportement respectueux envers les formateurs et les
                autres stagiaires.
              </p>
            </div>
          </div>

          {/* Article 7 - Litiges */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Article 7 - Litiges et médiation
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                Les présentes CGV sont soumises au droit français. En cas de
                différend relatif à l&apos;interprétation ou à l&apos;exécution des
                présentes CGV, les parties s&apos;engagent à rechercher une solution
                amiable avant toute action judiciaire.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément à l&apos;article L.612-1 du Code de la consommation,
                le stagiaire peut recourir gratuitement à un médiateur de la
                consommation en cas de litige non résolu. Les coordonnées du
                médiateur compétent sont disponibles sur demande auprès de CAB
                Formations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le stagiaire peut également déposer sa réclamation sur la
                plateforme européenne de résolution des litiges en ligne :{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cab-gold)] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-gray-600 leading-relaxed">
                À défaut de résolution amiable, tout litige sera soumis à la
                compétence exclusive des tribunaux du ressort de la Cour
                d&apos;appel de Paris.
              </p>
            </div>
          </div>

          {/* Date de mise à jour */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : Février 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/mentions-legales" className="text-[var(--cab-gold)] hover:underline text-sm font-medium">
                Mentions Légales
              </Link>
              <Link href="/politique-de-confidentialite" className="text-[var(--cab-gold)] hover:underline text-sm font-medium">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
