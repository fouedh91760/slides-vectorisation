import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation Taxi Mobilité | CAB Formations",
  description:
    "Formation Taxi Mobilité (passerelle VTC vers Taxi). Obtenez votre autorisation de stationnement taxi en complément de votre carte VTC. Formation courte certifiée QUALIOPI.",
  alternates: { canonical: "https://cab-formations.fr/formation-taxi-mobilite" },
  openGraph: {
    title: "Formation Taxi Mobilité | CAB Formations",
    description:
      "Formation passerelle VTC vers Taxi. Obtenez votre autorisation taxi en complément de votre carte VTC. Certifié QUALIOPI.",
    url: "https://cab-formations.fr/formation-taxi-mobilite",
  },
};

const etapes = [
  {
    num: "1",
    title: "Vérifiez votre éligibilité",
    desc: "Vous devez être titulaire d'une carte professionnelle VTC en cours de validité pour accéder à la formation passerelle taxi mobilité.",
  },
  {
    num: "2",
    title: "Inscrivez-vous à la formation",
    desc: "Choisissez votre centre CAB Formations et votre date de session. Nos conseillers vous accompagnent dans les démarches administratives.",
  },
  {
    num: "3",
    title: "Suivez la formation passerelle",
    desc: "Formation courte et ciblée sur les spécificités du métier de taxi : réglementation locale, taximètre, zones de prise en charge.",
  },
  {
    num: "4",
    title: "Passez l'examen taxi",
    desc: "Présentez-vous à l'examen taxi avec une préparation optimale. Les matières du tronc commun VTC/Taxi sont acquises.",
  },
];

const matieres = [
  {
    title: "Réglementation locale taxi",
    desc: "Apprenez la réglementation spécifique aux taxis de votre département : tarification, zones de prise en charge, bornes, obligations de service.",
  },
  {
    title: "Utilisation du taximètre",
    desc: "Maîtrisez le fonctionnement du taximètre et du lumineux : mise en marche, tarifs, suppléments, changements de tarification.",
  },
  {
    title: "Gestion spécifique taxi",
    desc: "Comprenez les particularités de gestion propres au statut de taxi : licence, autorisation de stationnement, cotisations spécifiques.",
  },
  {
    title: "Connaissance du territoire",
    desc: "Développez votre connaissance géographique locale : itinéraires, points d'intérêt, gares, aéroports, hôpitaux de votre zone d'activité.",
  },
];

export default function FormationTaxiMobilitePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Formation Taxi Mobilité - Passerelle VTC vers Taxi",
            description:
              "Formation passerelle permettant aux chauffeurs VTC d'obtenir également l'autorisation de stationnement taxi. Formation courte ciblée sur les spécificités du métier de taxi.",
            provider: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
            educationalLevel: "Intermédiaire",
            inLanguage: "fr",
            coursePrerequisites: "Carte professionnelle VTC en cours de validité",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "onsite",
              instructor: {
                "@type": "Organization",
                name: "CAB Formations",
              },
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">FORMATION TAXI MOBILIT&Eacute;</h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            La passerelle VTC vers Taxi pour doubler vos opportunit&eacute;s
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Vous &ecirc;tes d&eacute;j&agrave; chauffeur VTC et souhaitez obtenir &eacute;galement l&apos;autorisation
            de stationnement taxi ? La formation Taxi Mobilit&eacute; est faite pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis" className="btn-gold text-lg">
              Demander un devis gratuit
            </Link>
            <a href="tel:+33176380017" className="btn-blue text-lg border border-white/20">
              Appeler le 01 76 38 00 17
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Qu&apos;est-ce que la formation Taxi Mobilit&eacute; ?</h2>
          <p className="section-subtitle">
            La formation Taxi Mobilit&eacute; est une formation passerelle qui permet aux chauffeurs VTC
            de se pr&eacute;senter &agrave; l&apos;examen taxi sans avoir &agrave; repasser les mati&egrave;res du tronc commun.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--cab-gray)] rounded-xl p-8">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">Pour qui ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Cette formation s&apos;adresse exclusivement aux titulaires d&apos;une carte professionnelle
                VTC en cours de validit&eacute;. Si vous &ecirc;tes d&eacute;j&agrave; chauffeur VTC et que vous souhaitez
                &eacute;largir votre activit&eacute; au transport par taxi, cette passerelle est la voie la plus
                rapide et la plus efficace.
              </p>
            </div>
            <div className="bg-[var(--cab-gray)] rounded-xl p-8">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">Pourquoi ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Cumuler les cartes professionnelles VTC et taxi vous permet de diversifier vos sources
                de revenus. Vous pouvez alterner entre les courses VTC via les plateformes et les
                courses taxi en station ou &agrave; la vol&eacute;e, maximisant ainsi votre chiffre d&apos;affaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Etapes */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Comment se d&eacute;roule la formation ?</h2>
          <p className="section-subtitle">
            Un parcours simplifi&eacute; en 4 &eacute;tapes pour passer de VTC &agrave; Taxi.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape) => (
              <div key={etape.num} className="card text-center">
                <div className="w-12 h-12 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {etape.num}
                </div>
                <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-sm">{etape.title}</h3>
                <p className="text-sm text-gray-600">{etape.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matières spécifiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Les mati&egrave;res sp&eacute;cifiques taxi</h2>
          <p className="section-subtitle">
            La formation passerelle se concentre sur les mati&egrave;res sp&eacute;cifiques au m&eacute;tier de taxi
            que vous n&apos;avez pas abord&eacute;es lors de votre formation VTC.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {matieres.map((m) => (
              <div key={m.title} className="card">
                <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages passerelle */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Les avantages de la passerelle VTC vers Taxi</h2>
          <p className="section-subtitle">
            Profitez d&apos;une formation acc&eacute;l&eacute;r&eacute;e et cibl&eacute;e gr&acirc;ce &agrave; vos acquis VTC.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Formation courte et ciblée",
              "Pas de tronc commun à repasser",
              "Doublez vos sources de revenus",
              "Accédez aux stations taxi",
              "Prise en charge à la volée autorisée",
              "Financements CPF et Pôle Emploi possibles",
            ].map((a) => (
              <div key={a} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIOPI */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-green-700 font-semibold">Certifi&eacute; QUALIOPI</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Notre certification QUALIOPI vous garantit une formation de qualit&eacute; et vous ouvre
            l&apos;acc&egrave;s aux financements publics.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pr&ecirc;t &agrave; obtenir votre carte taxi ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contactez-nous d&egrave;s maintenant pour conna&icirc;tre les prochaines dates de session et obtenir
            un devis personnalis&eacute; pour votre formation Taxi Mobilit&eacute;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis" className="btn-gold text-lg">
              Demander un devis gratuit
            </Link>
            <a href="tel:+33176380017" className="btn-blue text-lg border border-white/20">
              Appeler le 01 76 38 00 17
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Vous pouvez aussi nous &eacute;crire &agrave;{" "}
            <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] underline">
              contact@cab-formations.fr
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
