import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site cab-formations.fr. Informations sur l'éditeur, l'hébergeur et la politique de protection des données personnelles.",
  alternates: { canonical: "https://cab-formations.fr/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">MENTIONS LÉGALES</h1>
          <p className="text-xl text-gray-300">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin
            2004 pour la Confiance dans l&apos;économie numérique (LCEN).
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
              <p className="text-gray-700 leading-relaxed space-y-2">
                <strong>Raison sociale :</strong> CAB Formations
                <br />
                <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)
                <br />
                <strong>Siège social :</strong> 151 avenue Gallieni, Bât C, 93170 Bagnolet
                <br />
                <strong>SIRET :</strong> [À compléter]
                <br />
                <strong>Numéro de TVA intracommunautaire :</strong> [À compléter]
                <br />
                <strong>Numéro de déclaration d&apos;activité :</strong> [À compléter]
                <br />
                <strong>Téléphone :</strong>{" "}
                <a href="tel:+33176380017" className="text-[var(--cab-gold)] hover:underline">
                  01 76 38 00 17
                </a>
                <br />
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@cab-formations.fr"
                  className="text-[var(--cab-gold)] hover:underline"
                >
                  contact@cab-formations.fr
                </a>
              </p>
            </div>
          </div>

          {/* Directeur de publication */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              2. Directeur de la publication
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                <strong>Directeur de la publication :</strong> [À compléter]
                <br />
                Le directeur de la publication est une personne physique ou morale responsable du
                contenu éditorial publié sur le site cab-formations.fr.
              </p>
            </div>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              3. Hébergeur
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                <strong>Hébergeur :</strong> [À compléter]
                <br />
                <strong>Adresse :</strong> [À compléter]
                <br />
                <strong>Téléphone :</strong> [À compléter]
                <br />
                <strong>Site web :</strong> [À compléter]
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              4. Propriété intellectuelle
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                L&apos;ensemble du contenu du site cab-formations.fr (textes, images, vidéos, logos,
                icônes, sons, logiciels, etc.) est protégé par les lois françaises et internationales
                relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou
                partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
                interdite sauf autorisation écrite préalable de CAB Formations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toute exploitation non autorisée du site ou de son contenu sera considérée comme
                constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des
                articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
              </p>
            </div>
          </div>

          {/* Limitation de responsabilité */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              5. Limitation de responsabilité
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                CAB Formations s&apos;efforce de fournir sur le site cab-formations.fr des
                informations aussi précises que possible. Toutefois, CAB Formations ne pourra être
                tenue responsable des omissions, des inexactitudes et des carences dans la mise à
                jour, qu&apos;elles soient de son fait ou du fait de tiers partenaires qui lui
                fournissent ces informations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toutes les informations indiquées sur le site cab-formations.fr sont données à titre
                indicatif et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements
                figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de
                modifications ayant été apportées depuis leur mise en ligne.
              </p>
            </div>
          </div>

          {/* Liens hypertextes */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              6. Liens hypertextes
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Le site cab-formations.fr peut contenir des liens hypertextes vers d&apos;autres
                sites internet. CAB Formations ne dispose d&apos;aucun moyen pour contrôler le
                contenu de ces sites tiers et n&apos;assume aucune responsabilité quant au contenu
                de ces sites.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                La création de liens hypertextes vers le site cab-formations.fr est soumise à
                l&apos;accord préalable et écrit de CAB Formations.
              </p>
            </div>
          </div>

          {/* CNIL / RGPD */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              7. Protection des données personnelles (RGPD)
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) du 25 mai
                2018 et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez
                d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition
                au traitement de vos données personnelles.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Les données personnelles collectées sur le site cab-formations.fr sont traitées par
                CAB Formations en qualité de responsable de traitement. Elles sont collectées pour
                les finalités suivantes : gestion des demandes de contact, gestion des inscriptions
                aux formations, envoi d&apos;informations commerciales (avec votre consentement).
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Pour exercer vos droits ou pour toute question relative à la protection de vos
                données personnelles, vous pouvez nous contacter :
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>
                  - Par email :{" "}
                  <a
                    href="mailto:contact@cab-formations.fr"
                    className="text-[var(--cab-gold)] hover:underline"
                  >
                    contact@cab-formations.fr
                  </a>
                </li>
                <li>- Par courrier : CAB Formations, 151 avenue Gallieni, Bât C, 93170 Bagnolet</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Pour en savoir plus, consultez notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-[var(--cab-gold)] hover:underline font-semibold"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Vous pouvez également adresser une réclamation auprès de la Commission Nationale de
                l&apos;Informatique et des Libertés (CNIL) :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cab-gold)] hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              8. Cookies
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Le site cab-formations.fr peut utiliser des cookies pour améliorer l&apos;expérience
                utilisateur, réaliser des statistiques de visites et proposer des contenus adaptés.
                Vous pouvez paramétrer votre navigateur pour refuser les cookies. Pour en savoir
                plus, consultez notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-[var(--cab-gold)] hover:underline font-semibold"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              9. Droit applicable et juridiction compétente
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                les tribunaux compétents du ressort de Bobigny seront seuls compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
