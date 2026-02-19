import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation Taxi Initial | CAB Formations",
  description:
    "Formation initiale Taxi pour devenir chauffeur de taxi en France. Préparez l'examen taxi : réglementation, gestion, sécurité routière, langues. Certifié QUALIOPI. 12 centres en France.",
  alternates: { canonical: "https://cab-formations.fr/formation-taxi-initial" },
  openGraph: {
    title: "Formation Taxi Initial | CAB Formations",
    description:
      "Formation initiale Taxi pour devenir chauffeur de taxi. Réglementation, gestion, sécurité routière, langues. Certifié QUALIOPI.",
    url: "https://cab-formations.fr/formation-taxi-initial",
  },
};

const modules = [
  {
    title: "Réglementation Taxi",
    desc: "Maîtrisez la réglementation spécifique au transport public particulier de personnes par taxi : statut juridique, obligations, droits et devoirs du chauffeur de taxi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Gestion",
    desc: "Apprenez les bases de la gestion d'une entreprise de taxi : comptabilité, fiscalité, charges sociales, statuts juridiques et obligations déclaratives.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sécurité Routière",
    desc: "Formation approfondie en sécurité routière : conduite préventive, gestion des risques, premiers secours et comportement en situation d'urgence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Français",
    desc: "Perfectionnez votre expression française écrite et orale pour répondre aux exigences de l'examen et assurer un service de qualité auprès de vos clients.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Anglais",
    desc: "Acquérez le vocabulaire professionnel en anglais indispensable pour accueillir et transporter une clientèle internationale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Réglementation Locale",
    desc: "Étudiez la réglementation locale spécifique à votre zone d'exploitation : tarification, zones de prise en charge, bornes taxi et spécificités départementales.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const avantages = [
  "Formateurs expérimentés et diplômés",
  "Supports de cours complets et actualisés",
  "Examens blancs réguliers",
  "Accompagnement personnalisé",
  "12 centres de formation en France",
  "Certifié QUALIOPI",
];

export default function FormationTaxiInitialPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Formation Taxi Initial",
            description:
              "Formation initiale pour devenir chauffeur de taxi en France. Préparez toutes les épreuves de l'examen taxi : réglementation, gestion, sécurité routière, français, anglais, réglementation locale.",
            provider: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
            educationalLevel: "Débutant",
            inLanguage: "fr",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "onsite",
              courseWorkload: "PT70H",
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
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">FORMATION TAXI INITIAL</h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Devenez chauffeur de taxi avec la formation initiale de CAB Formations
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Préparez toutes les épreuves de l&apos;examen taxi avec nos formateurs experts.
            Formation complète couvrant la réglementation, la gestion, la sécurité routière et les langues.
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
          <h2 className="section-title">Pourquoi suivre la formation Taxi initiale ?</h2>
          <p className="section-subtitle">
            La formation taxi initiale est indispensable pour obtenir votre carte professionnelle de
            chauffeur de taxi. Elle vous prépare à l&apos;ensemble des épreuves de l&apos;examen taxi
            organisé par les Chambres des Métiers et de l&apos;Artisanat (CMA).
          </p>
          <div className="bg-[var(--cab-gray)] rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Depuis 2017, l&apos;exercice de la profession de chauffeur de taxi nécessite la réussite
              d&apos;un examen comprenant des épreuves théoriques et une épreuve pratique. La formation
              initiale taxi de CAB Formations vous donne toutes les clés pour réussir du premier coup.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Programme de la formation Taxi initiale</h2>
          <p className="section-subtitle">
            Notre formation couvre l&apos;ensemble des matières nécessaires à la réussite de l&apos;examen taxi.
            Chaque module est enseigné par des formateurs spécialisés.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div key={mod.title} className="card">
                <div className="w-12 h-12 bg-[var(--cab-blue)] rounded-lg flex items-center justify-center text-white mb-4">
                  {mod.icon}
                </div>
                <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">{mod.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Tarifs de la formation Taxi initiale</h2>
          <p className="section-subtitle">
            Plusieurs formules sont disponibles selon vos besoins et votre niveau de préparation.
            Contactez-nous pour obtenir un devis personnalisé.
          </p>
          <div className="card border-2 border-[var(--cab-gold)] max-w-lg mx-auto">
            <div className="text-sm text-[var(--cab-gold)] font-semibold mb-2">FORMATION TAXI INITIALE</div>
            <h3 className="text-2xl font-bold text-[var(--cab-blue)] mb-4">
              Contactez-nous pour connaître nos tarifs
            </h3>
            <p className="text-gray-600 mb-6">
              Nos tarifs varient selon la durée de formation choisie (35h, 70h ou 105h) et le centre
              de formation sélectionné. Financement possible via CPF, Pôle Emploi, DIF et Mission Locale.
            </p>
            <Link href="/demande-de-devis" className="btn-gold">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Pourquoi choisir CAB Formations ?</h2>
          <p className="section-subtitle">
            Leader de la formation taxi et VTC en France depuis 2015, CAB Formations vous garantit
            une préparation optimale.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {avantages.map((a) => (
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
            <span className="text-green-700 font-semibold">Certifié QUALIOPI</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            La certification QUALIOPI atteste de la qualité de nos formations et vous permet de bénéficier
            de financements publics et mutualisés.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prêt à devenir chauffeur de taxi ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Demandez votre devis gratuit et commencez votre formation taxi initiale dès maintenant.
            Nos conseillers sont disponibles pour répondre à toutes vos questions.
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
            Vous pouvez aussi nous écrire à{" "}
            <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] underline">
              contact@cab-formations.fr
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
