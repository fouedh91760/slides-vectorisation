import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles de CAB Formations. Conforme au RGPD.",
  alternates: { canonical: "https://cab-formations.fr/politique-de-confidentialite" },
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            POLITIQUE DE CONFIDENTIALITÉ
          </h1>
          <p className="text-xl text-gray-300">
            Protection de vos données personnelles conformément au Règlement Général sur la
            Protection des Données (RGPD).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Introduction */}
          <div>
            <div className="card bg-[var(--cab-gray)]">
              <p className="text-gray-700 leading-relaxed">
                CAB Formations, dont le siège social est situé au 151 avenue Gallieni, Bât C,
                93170 Bagnolet, s&apos;engage à protéger la vie privée des utilisateurs de son site
                internet cab-formations.fr et de ses stagiaires. La présente politique de
                confidentialité a pour objet de vous informer sur la manière dont nous collectons,
                utilisons et protégeons vos données personnelles, conformément au Règlement (UE)
                2016/679 du 27 avril 2016 (RGPD) et à la loi Informatique et Libertés du 6 janvier
                1978 modifiée.
              </p>
            </div>
          </div>

          {/* Responsable de traitement */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              1. Responsable de traitement
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Le responsable du traitement des données personnelles est :
              </p>
              <div className="mt-3 bg-[var(--cab-gray)] rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>CAB Formations</strong>
                  <br />
                  151 avenue Gallieni, Bât C, 93170 Bagnolet
                  <br />
                  Téléphone :{" "}
                  <a href="tel:+33176380017" className="text-[var(--cab-gold)] hover:underline">
                    01 76 38 00 17
                  </a>
                  <br />
                  Email :{" "}
                  <a
                    href="mailto:contact@cab-formations.fr"
                    className="text-[var(--cab-gold)] hover:underline"
                  >
                    contact@cab-formations.fr
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Données collectées */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              2. Données collectées
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Nous collectons les données personnelles suivantes, de manière directe ou indirecte :
              </p>

              <h3 className="font-semibold text-[var(--cab-blue)] mt-4 mb-2">
                Données fournies directement par l&apos;utilisateur :
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Identité :</strong> nom, prénom, date de naissance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Coordonnées :</strong> adresse postale, adresse email, numéro de téléphone
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Informations professionnelles :</strong> numéro de permis de conduire,
                  situation professionnelle
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Données de formation :</strong> formation choisie, centre souhaité, niveau
                  d&apos;études
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Données financières :</strong> mode de financement, informations de
                  paiement (traitées de manière sécurisée par notre prestataire de paiement)
                </li>
              </ul>

              <h3 className="font-semibold text-[var(--cab-blue)] mt-4 mb-2">
                Données collectées automatiquement :
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages
                  visitées, durée de visite, données de cookies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Données techniques :</strong> système d&apos;exploitation, résolution
                  d&apos;écran, type d&apos;appareil
                </li>
              </ul>
            </div>
          </div>

          {/* Finalités */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              3. Finalités du traitement
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[var(--cab-blue)] text-white">
                      <th className="text-left px-4 py-3 font-semibold">Finalité</th>
                      <th className="text-left px-4 py-3 font-semibold">Base légale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-gray-700">
                        Gestion des demandes de contact et de devis
                      </td>
                      <td className="px-4 py-3 text-gray-600">Intérêt légitime</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">
                        Gestion des inscriptions et suivi des formations
                      </td>
                      <td className="px-4 py-3 text-gray-600">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-gray-700">
                        Gestion de la facturation et des paiements
                      </td>
                      <td className="px-4 py-3 text-gray-600">Obligation légale</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">
                        Envoi d&apos;informations commerciales et newsletters
                      </td>
                      <td className="px-4 py-3 text-gray-600">Consentement</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-gray-700">
                        Amélioration de nos services et de notre site internet
                      </td>
                      <td className="px-4 py-3 text-gray-600">Intérêt légitime</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">
                        Respect de nos obligations légales et réglementaires
                      </td>
                      <td className="px-4 py-3 text-gray-600">Obligation légale</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Durée de conservation */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              4. Durée de conservation
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont conservées pendant la durée strictement nécessaire
                aux finalités pour lesquelles elles sont traitées :
              </p>
              <ul className="mt-3 space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Données de prospection (demandes de devis, formulaires de contact) :</strong>{" "}
                  3 ans à compter du dernier contact
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Données de gestion des stagiaires :</strong> durée de la formation puis 5
                  ans à compter de la fin de la formation (obligation légale liée à la formation
                  professionnelle)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Données de facturation :</strong> 10 ans à compter de la date de la
                  facture (obligation comptable et fiscale)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <strong>Cookies et données de navigation :</strong> 13 mois maximum
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Au-delà de ces durées, vos données sont supprimées ou anonymisées de manière
                irréversible.
              </p>
            </div>
          </div>

          {/* Droits des utilisateurs */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              5. Droits des utilisateurs
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants sur vos données
                personnelles :
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-[var(--cab-gray)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--cab-blue)] mb-1">Droit d&apos;accès</h4>
                  <p className="text-sm text-gray-600">
                    Obtenir la confirmation que vos données sont traitées et en recevoir une copie.
                  </p>
                </div>
                <div className="bg-[var(--cab-gray)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--cab-blue)] mb-1">
                    Droit de rectification
                  </h4>
                  <p className="text-sm text-gray-600">
                    Demander la correction de données inexactes ou incomplètes.
                  </p>
                </div>
                <div className="bg-[var(--cab-gray)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--cab-blue)] mb-1">
                    Droit à l&apos;effacement
                  </h4>
                  <p className="text-sm text-gray-600">
                    Demander la suppression de vos données dans les conditions prévues par le RGPD.
                  </p>
                </div>
                <div className="bg-[var(--cab-gray)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--cab-blue)] mb-1">
                    Droit à la limitation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Demander la limitation du traitement de vos données dans certains cas.
                  </p>
                </div>
                <div className="bg-[var(--cab-gray)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--cab-blue)] mb-1">
                    Droit à la portabilité
                  </h4>
                  <p className="text-sm text-gray-600">
                    Recevoir vos données dans un format structuré et les transmettre à un autre
                    organisme.
                  </p>
                </div>
                <div className="bg-[var(--cab-gray)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--cab-blue)] mb-1">
                    Droit d&apos;opposition
                  </h4>
                  <p className="text-sm text-gray-600">
                    Vous opposer au traitement de vos données, notamment à des fins de prospection
                    commerciale.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer vos droits, vous pouvez nous contacter :
              </p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>
                  - Par email :{" "}
                  <a
                    href="mailto:contact@cab-formations.fr"
                    className="text-[var(--cab-gold)] hover:underline"
                  >
                    contact@cab-formations.fr
                  </a>
                </li>
                <li>
                  - Par courrier : CAB Formations, 151 avenue Gallieni, Bât C, 93170 Bagnolet
                </li>
                <li>
                  - Par téléphone :{" "}
                  <a href="tel:+33176380017" className="text-[var(--cab-gold)] hover:underline">
                    01 76 38 00 17
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois à
                compter de sa réception. Ce délai peut être prolongé de deux mois en cas de demande
                complexe.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une
                réclamation à la Commission Nationale de l&apos;Informatique et des Libertés
                (CNIL) :{" "}
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
              6. Cookies
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Le site cab-formations.fr utilise des cookies pour améliorer votre expérience de
                navigation. Un cookie est un petit fichier texte déposé sur votre appareil
                (ordinateur, tablette, smartphone) lors de votre visite.
              </p>

              <h3 className="font-semibold text-[var(--cab-blue)] mt-4 mb-2">
                Types de cookies utilisés :
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <div>
                    <strong>Cookies strictement nécessaires :</strong> indispensables au
                    fonctionnement du site (session, authentification, sécurité). Ces cookies ne
                    nécessitent pas votre consentement.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <div>
                    <strong>Cookies analytiques / de mesure d&apos;audience :</strong> permettent de
                    mesurer la fréquentation du site et d&apos;analyser le comportement des
                    visiteurs afin d&apos;améliorer nos services (ex. : Google Analytics).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <div>
                    <strong>Cookies de fonctionnalité :</strong> permettent de mémoriser vos
                    préférences (langue, centre de formation préféré, etc.).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  <div>
                    <strong>Cookies publicitaires / de ciblage :</strong> permettent de vous
                    proposer des publicités adaptées à vos centres d&apos;intérêt (ex. : Facebook
                    Pixel, Google Ads).
                  </div>
                </li>
              </ul>

              <h3 className="font-semibold text-[var(--cab-blue)] mt-4 mb-2">
                Gestion des cookies :
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lors de votre première visite, un bandeau cookies vous permet d&apos;accepter ou de
                refuser les cookies non essentiels. Vous pouvez à tout moment modifier vos
                préférences en matière de cookies via les paramètres de votre navigateur :
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                <li>
                  - <strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt;
                  Cookies
                </li>
                <li>
                  - <strong>Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies
                </li>
                <li>
                  - <strong>Safari :</strong> Préférences &gt; Confidentialité
                </li>
                <li>
                  - <strong>Edge :</strong> Paramètres &gt; Cookies et autorisations de site
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Le refus des cookies peut limiter l&apos;accès à certaines fonctionnalités du site.
              </p>
            </div>
          </div>

          {/* Sécurité */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              7. Sécurité des données
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                CAB Formations met en oeuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données personnelles contre la destruction, la perte, l&apos;altération,
                la divulgation non autorisée ou l&apos;accès non autorisé, notamment :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Chiffrement des données sensibles (HTTPS/SSL)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Accès restreint aux données personnelles (authentification, habilitations)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Sauvegardes régulières des données
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Sensibilisation du personnel au respect de la vie privée
                </li>
              </ul>
            </div>
          </div>

          {/* Transfert de données */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              8. Transfert de données
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles ne sont pas vendues à des tiers. Elles peuvent être
                transmises aux catégories de destinataires suivantes, dans la stricte limite des
                finalités décrites ci-dessus :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Les organismes financeurs (CPF, Pôle Emploi, OPCO, etc.) dans le cadre de la
                  prise en charge de votre formation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Nos sous-traitants techniques (hébergement, paiement en ligne, emailing)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Les autorités administratives et judiciaires lorsque la loi l&apos;exige
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                En cas de transfert de données hors de l&apos;Union Européenne, des garanties
                appropriées sont mises en place conformément au RGPD (clauses contractuelles types,
                décision d&apos;adéquation, etc.).
              </p>
            </div>
          </div>

          {/* Modification */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              9. Modification de la politique de confidentialité
            </h2>
            <div className="card">
              <p className="text-gray-700 leading-relaxed">
                CAB Formations se réserve le droit de modifier la présente politique de
                confidentialité à tout moment. Toute modification sera publiée sur cette page avec
                indication de la date de mise à jour. Nous vous invitons à consulter régulièrement
                cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>
          </div>

          {/* Date de mise à jour */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>Dernière mise à jour : février 2026</p>
            <p className="mt-2">
              Pour toute question relative à cette politique de confidentialité, contactez-nous à{" "}
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
