import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site cab-formations.fr. Informations sur l'éditeur, l'hébergeur et la protection des données personnelles.",
  alternates: { canonical: "https://cab-formations.fr/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">MENTIONS LÉGALES</h1>
          <p className="text-lg text-gray-300">
            Conformément aux dispositions de la loi n&deg; 2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Éditeur */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              1. Éditeur du site
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed">
                Le site <strong>cab-formations.fr</strong> est édité par :
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Raison sociale :</strong> CAB Formations
                </li>
                <li>
                  <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)
                </li>
                <li>
                  <strong>Siège social :</strong> 151 avenue Gallieni, Bât C, 93170 Bagnolet
                </li>
                <li>
                  <strong>SIRET :</strong> [À compléter]
                </li>
                <li>
                  <strong>Numéro de déclaration d&apos;activité :</strong> [À compléter]
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:+33176380017" className="text-[var(--cab-gold)] hover:underline">
                    01 76 38 00 17
                  </a>
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] hover:underline">
                    contact@cab-formations.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Directeur de publication */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              2. Directeur de la publication
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed">
                Le directeur de la publication du site cab-formations.fr est :
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Nom :</strong> [À compléter]
                </li>
                <li>
                  <strong>Qualité :</strong> Président de CAB Formations
                </li>
                <li>
                  <strong>Contact :</strong>{" "}
                  <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] hover:underline">
                    contact@cab-formations.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              3. Hébergeur
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed">
                Le site cab-formations.fr est hébergé par :
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Raison sociale :</strong> [À compléter]
                </li>
                <li>
                  <strong>Adresse :</strong> [À compléter]
                </li>
                <li>
                  <strong>Téléphone :</strong> [À compléter]
                </li>
                <li>
                  <strong>Site web :</strong> [À compléter]
                </li>
              </ul>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              4. Propriété intellectuelle
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;ensemble du contenu du site cab-formations.fr (textes, images,
                vidéos, logos, icônes, sons, logiciels, mise en page, bases de données,
                etc.) est protégé par le droit d&apos;auteur, le droit des marques et le
                droit de la propriété intellectuelle, tant en France qu&apos;à
                l&apos;international.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toute reproduction, représentation, modification, publication,
                adaptation, totale ou partielle, des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation
                écrite préalable de CAB Formations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Toute exploitation non autorisée du site ou de l&apos;un quelconque
                des éléments qu&apos;il contient sera considérée comme constitutive
                d&apos;une contrefaçon et poursuivie conformément aux dispositions
                des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
              </p>
            </div>
          </div>

          {/* Limitation de responsabilité */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              5. Limitation de responsabilité
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                CAB Formations s&apos;efforce de fournir sur le site
                cab-formations.fr des informations aussi précises que possible.
                Toutefois, CAB Formations ne pourra être tenue responsable des
                omissions, des inexactitudes et des carences dans la mise à jour,
                qu&apos;elles soient de son fait ou du fait des tiers partenaires
                qui lui fournissent ces informations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Toutes les informations indiquées sur le site cab-formations.fr
                sont données à titre indicatif et sont susceptibles d&apos;évoluer.
                Par ailleurs, les renseignements figurant sur le site ne sont pas
                exhaustifs. Ils sont donnés sous réserve de modifications ayant été
                apportées depuis leur mise en ligne.
              </p>
            </div>
          </div>

          {/* CNIL / RGPD */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              6. Protection des données personnelles (RGPD)
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) du 25 mai 2018 et à la loi Informatique et Libertés du 6
                janvier 1978 modifiée, vous disposez des droits suivants concernant
                vos données personnelles :
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Droit d&apos;accès à vos données personnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Droit de rectification de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Droit à l&apos;effacement (droit à l&apos;oubli)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Droit à la limitation du traitement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Droit à la portabilité de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold">-</span>
                  <span>Droit d&apos;opposition au traitement</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>
                  <strong>Par email :</strong>{" "}
                  <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] hover:underline">
                    contact@cab-formations.fr
                  </a>
                </li>
                <li>
                  <strong>Par courrier :</strong> CAB Formations - 151 avenue Gallieni,
                  Bât C, 93170 Bagnolet
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Vous pouvez également introduire une réclamation auprès de la
                Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
                {" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cab-gold)] hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Pour en savoir plus sur le traitement de vos données personnelles,
                consultez notre{" "}
                <Link href="/politique-de-confidentialite" className="text-[var(--cab-gold)] hover:underline">
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              7. Cookies
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed mb-4">
                Le site cab-formations.fr peut être amené à utiliser des cookies
                pour améliorer votre expérience de navigation. Un cookie est un
                petit fichier texte déposé sur votre terminal (ordinateur, tablette,
                smartphone) lors de la visite d&apos;un site internet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vous pouvez à tout moment configurer votre navigateur pour
                accepter ou refuser les cookies. Le refus des cookies peut
                limiter votre accès à certaines fonctionnalités du site.
              </p>
            </div>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              8. Droit applicable et juridiction compétente
            </h2>
            <div className="card">
              <p className="text-gray-600 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige et à défaut de résolution amiable, les tribunaux
                français seront seuls compétents pour connaître de ce litige.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
