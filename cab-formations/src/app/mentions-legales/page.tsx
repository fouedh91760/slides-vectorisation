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
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">MENTIONS LÉGALES</h1>
          <p className="text-xl text-gray-300">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          {/* Éditeur */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              1. Éditeur du site
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed space-y-2">
                <strong>Raison sociale :</strong> CAB Formations
                <br />
                <strong>Forme juridique :</strong> [A compléter]
                <br />
                <strong>Siège social :</strong> 151 avenue Gallieni, Bât C, 93170 Bagnolet
                <br />
                <strong>SIRET :</strong> [A compléter]
                <br />
                <strong>Numéro de déclaration d&apos;activité :</strong> [A compléter]
                <br />
                <strong>Téléphone :</strong>{" "}
                <a href="tel:+33176380017" className="text-[var(--cab-gold)] hover:underline">
                  01 76 38 00 17
                </a>
                <br />
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] hover:underline">
                  contact@cab-formations.fr
                </a>
                <br />
                <strong>Numéro de TVA intracommunautaire :</strong> [A compléter]
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
                <strong>Directeur de la publication :</strong> [A compléter]
                <br />
                <strong>Qualité :</strong> Représentant légal de CAB Formations
                <br />
                <strong>Contact :</strong>{" "}
                <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] hover:underline">
                  contact@cab-formations.fr
                </a>
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
                <strong>Hébergeur :</strong> [A compléter]
                <br />
                <strong>Adresse :</strong> [A compléter]
                <br />
                <strong>Téléphone :</strong> [A compléter]
                <br />
                <strong>Site web :</strong> [A compléter]
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
                relatives à la propriété intellectuelle. Toute reproduction, représentation,
                modification, publication, adaptation de tout ou partie des éléments du site, quel
                que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite
                préalable de CAB Formations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toute exploitation non autorisée du site ou de l&apos;un des éléments qu&apos;il contient
                sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément
                aux dispositions des articles L.335-2 et suivants du Code de la Propriété
                Intellectuelle.
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
                CAB Formations s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour
                des informations diffusées sur son site. Toutefois, CAB Formations ne peut
                garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises
                à disposition sur ce site.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                CAB Formations décline toute responsabilité pour toute imprécision, inexactitude
                ou omission portant sur des informations disponibles sur le site. CAB Formations
                ne saurait être tenu responsable des dommages directs ou indirects résultant de
                l&apos;accès ou de l&apos;utilisation du site.
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
                sites internet. CAB Formations n&apos;exerce aucun contrôle sur ces sites et décline
                toute responsabilité quant à leur contenu. La décision d&apos;activer ces liens
                relève de la pleine et entière responsabilité de l&apos;utilisateur.
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
                Conformément au Règlement Général sur la Protection des Données (RGPD) du
                25 mai 2018 et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée,
                vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et
                d&apos;opposition au traitement de vos données personnelles.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Les données personnelles collectées sur ce site (formulaires de contact, demande
                de devis) sont destinées exclusivement à CAB Formations et ne sont en aucun cas
                cédées à des tiers. Elles sont conservées pour une durée maximale de 3 ans à
                compter de votre dernier contact.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Pour exercer vos droits ou pour toute question relative à la protection de vos
                données personnelles, vous pouvez nous contacter :
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>
                  - Par email :{" "}
                  <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] hover:underline">
                    contact@cab-formations.fr
                  </a>
                </li>
                <li>- Par courrier : CAB Formations, 151 avenue Gallieni, Bât C, 93170 Bagnolet</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Pour plus d&apos;informations, consultez notre{" "}
                <Link href="/politique-de-confidentialite" className="text-[var(--cab-gold)] hover:underline font-semibold">
                  Politique de Confidentialité
                </Link>
                .
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
                Le site cab-formations.fr utilise des cookies pour améliorer l&apos;expérience
                utilisateur et réaliser des statistiques de visites. En naviguant sur ce site,
                vous acceptez l&apos;utilisation de cookies conformément à notre politique de
                confidentialité. Vous pouvez à tout moment modifier les paramètres de votre
                navigateur pour refuser les cookies.
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
                Les présentes mentions légales sont régies par le droit français. En cas de
                litige, et après tentative de recherche d&apos;une solution amiable, compétence
                est attribuée aux tribunaux français compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
