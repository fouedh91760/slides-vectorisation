import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation TPMR | Transport de Personnes à Mobilité Réduite",
  description:
    "Formation TPMR : Transport de Personnes à Mobilité Réduite. Apprenez la manipulation des fauteuils roulants, les réglementations d'accessibilité et l'assistance aux passagers. Certifié QUALIOPI.",
  alternates: { canonical: "https://cab-formations.fr/la-formation-tpmr" },
  openGraph: {
    title: "Formation TPMR | Transport de Personnes à Mobilité Réduite",
    description:
      "Formation TPMR : manipulation des fauteuils roulants, réglementations d'accessibilité, assistance aux passagers. Certifié QUALIOPI.",
    url: "https://cab-formations.fr/la-formation-tpmr",
  },
};

const modules = [
  {
    title: "Manipulation des fauteuils roulants",
    desc: "Apprenez les techniques de manipulation sécurisée des fauteuils roulants manuels et électriques : transferts, arrimage, pliage et dépliage, montée et descente du véhicule.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Réglementation accessibilité",
    desc: "Maîtrisez la réglementation en vigueur sur l'accessibilité des transports : obligations légales, normes techniques des véhicules adaptés et droits des personnes handicapées.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Assistance aux passagers",
    desc: "Développez les compétences nécessaires pour assister efficacement les passagers à mobilité réduite : accueil, communication adaptée, aide à l'embarquement et au débarquement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Sécurité du transport adapté",
    desc: "Intégrez les règles de sécurité spécifiques au transport de personnes à mobilité réduite : vérification du véhicule, systèmes d'arrimage, conduite adaptée.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Connaissance des handicaps",
    desc: "Comprenez les différents types de handicaps (moteur, sensoriel, cognitif) pour adapter votre accompagnement aux besoins spécifiques de chaque passager.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Gestes de premiers secours",
    desc: "Apprenez les gestes de premiers secours adaptés aux personnes à mobilité réduite : positions de sécurité, appel des secours, prise en charge d'urgence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const publicsConcernes = [
  "Chauffeurs VTC souhaitant se spécialiser",
  "Chauffeurs de taxi",
  "Conducteurs de transport sanitaire",
  "Ambulanciers",
  "Personnel de transport collectif",
  "Tout professionnel du transport de personnes",
];

export default function FormationTpmrPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Formation TPMR - Transport de Personnes à Mobilité Réduite",
            description:
              "Formation spécialisée dans le transport de personnes à mobilité réduite (TPMR). Manipulation des fauteuils roulants, réglementation accessibilité, assistance aux passagers.",
            provider: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
            educationalLevel: "Tous niveaux",
            inLanguage: "fr",
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
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">LA FORMATION TPMR</h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Transport de Personnes &agrave; Mobilit&eacute; R&eacute;duite
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Sp&eacute;cialisez-vous dans le transport de personnes handicap&eacute;es et &agrave; mobilit&eacute; r&eacute;duite.
            Une formation essentielle pour offrir un service adapt&eacute;, s&eacute;curis&eacute; et respectueux.
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
          <h2 className="section-title">Pourquoi suivre la formation TPMR ?</h2>
          <p className="section-subtitle">
            Le transport de personnes &agrave; mobilit&eacute; r&eacute;duite (TPMR) est un secteur en pleine croissance.
            La formation TPMR vous apporte les comp&eacute;tences indispensables pour transporter en toute
            s&eacute;curit&eacute; les personnes en situation de handicap.
          </p>
          <div className="bg-[var(--cab-gray)] rounded-xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              La formation TPMR de CAB Formations est con&ccedil;ue pour les professionnels du transport
              souhaitant acqu&eacute;rir ou approfondir leurs comp&eacute;tences en mati&egrave;re d&apos;accessibilit&eacute;
              et d&apos;accompagnement des personnes &agrave; mobilit&eacute; r&eacute;duite. Elle r&eacute;pond aux exigences
              r&eacute;glementaires et aux attentes des donneurs d&apos;ordre.
            </p>
          </div>
        </div>
      </section>

      {/* Public concerné */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">&Agrave; qui s&apos;adresse la formation TPMR ?</h2>
          <p className="section-subtitle">
            La formation TPMR est ouverte &agrave; tous les professionnels du transport de personnes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {publicsConcernes.map((p) => (
              <div key={p} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <svg className="w-5 h-5 text-[var(--cab-gold)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Programme de la formation TPMR</h2>
          <p className="section-subtitle">
            Un programme complet alliant th&eacute;orie et pratique pour ma&icirc;triser tous les aspects
            du transport de personnes &agrave; mobilit&eacute; r&eacute;duite.
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

      {/* Objectifs */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Les objectifs de la formation</h2>
          <p className="section-subtitle">
            &Agrave; l&apos;issue de la formation TPMR, vous serez capable de :
          </p>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Accueillir et installer un passager en fauteuil roulant en toute sécurité",
              "Utiliser les équipements d'arrimage et de sécurisation du fauteuil",
              "Adapter votre conduite aux besoins des personnes à mobilité réduite",
              "Communiquer de manière adaptée avec les personnes en situation de handicap",
              "Appliquer les réglementations en vigueur sur l'accessibilité des transports",
              "Réagir efficacement en cas d'urgence ou d'incident",
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <div className="w-8 h-8 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="text-gray-700 leading-relaxed">{obj}</span>
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
            CAB Formations est certifi&eacute; QUALIOPI, attestant de la qualit&eacute; de nos processus
            de formation. Cette certification vous permet de b&eacute;n&eacute;ficier de financements publics.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Formez-vous au transport TPMR
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contactez-nous pour conna&icirc;tre les prochaines sessions de formation TPMR et obtenir
            un devis personnalis&eacute;. Nos conseillers sont &agrave; votre &eacute;coute.
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
