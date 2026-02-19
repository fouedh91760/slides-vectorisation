import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation VTC Continue",
  description:
    "Formation VTC continue obligatoire de 14 heures pour renouveler votre carte professionnelle VTC tous les 5 ans. 399€, finançable CPF/Pôle Emploi. Certifié QUALIOPI, 4.7/5 sur 1216 avis. CAB Formations.",
  alternates: {
    canonical: "https://cab-formations.fr/formation-vtc-continue-obligatoire",
  },
  openGraph: {
    title: "Formation VTC Continue Obligatoire | CAB Formations",
    description:
      "Formation VTC continue obligatoire de 14h pour renouveler votre carte pro VTC. 399€, 4 sessions de 3h30. Certifié QUALIOPI.",
    url: "https://cab-formations.fr/formation-vtc-continue-obligatoire",
    type: "website",
    locale: "fr_FR",
    siteName: "CAB Formations",
  },
};

const modules = [
  {
    letter: "A",
    title: "Réglementation du transport public particulier de personnes (T3P)",
    desc: "Mise à jour des connaissances sur la réglementation encadrant le transport public particulier de personnes : évolutions législatives, obligations des exploitants et conducteurs, droits des passagers.",
    mandatory: true,
  },
  {
    letter: "B",
    title: "Réglementation nationale spécifique VTC",
    desc: "Actualisation des connaissances sur la réglementation propre à l'activité VTC : conditions d'exercice, obligations professionnelles, évolutions réglementaires récentes.",
    mandatory: true,
  },
  {
    letter: "C",
    title: "Sécurité routière",
    desc: "Rappels et mise à jour sur la sécurité routière : nouvelles règles du code de la route, prévention des risques, éco-conduite et premiers secours.",
    mandatory: true,
  },
  {
    letter: "E",
    title: "Gestion et développement commercial",
    desc: "Module optionnel couvrant les techniques de gestion d'entreprise, le développement commercial, la fidélisation client et les outils numériques au service de l'activité VTC.",
    mandatory: false,
  },
];

const faqs = [
  {
    question: "La formation VTC continue est-elle obligatoire ?",
    answer:
      "Oui, la formation VTC continue est obligatoire pour tous les chauffeurs VTC titulaires d'une carte professionnelle. Elle doit être suivie tous les 5 ans pour pouvoir renouveler votre carte professionnelle VTC. Sans cette formation, la préfecture refusera le renouvellement de votre carte.",
  },
  {
    question: "Quelle est la durée de la formation VTC continue ?",
    answer:
      "La formation VTC continue dure 14 heures au total. Elle peut être suivie en continu sur 2 jours ou fractionnée en 4 sessions de 3h30 réparties sur une période maximale de 2 mois. Ce format flexible permet aux chauffeurs VTC en activité de se former sans interrompre leur activité.",
  },
  {
    question: "Combien coûte la formation VTC continue ?",
    answer:
      "La formation VTC continue chez CAB Formations est proposée à 399€. Ce tarif comprend les 14 heures de formation, les supports pédagogiques et l'attestation de suivi. Des aides au financement sont possibles via Pôle Emploi, CPF ou le règlement en 3X sans frais.",
  },
  {
    question: "Quand dois-je suivre la formation VTC continue ?",
    answer:
      "Vous devez suivre la formation VTC continue tous les 5 ans, avant l'expiration de votre carte professionnelle VTC. Il est recommandé de l'anticiper plusieurs mois à l'avance pour éviter toute interruption d'activité. La formation doit être effectuée auprès d'un organisme agréé comme CAB Formations.",
  },
  {
    question: "Quels sont les prérequis pour la formation VTC continue ?",
    answer:
      "Le seul prérequis est d'être titulaire d'une carte professionnelle VTC en cours de validité ou arrivant à expiration. Aucun examen n'est requis à l'issue de la formation : il suffit de suivre l'intégralité des 14 heures pour obtenir l'attestation de suivi permettant le renouvellement de votre carte.",
  },
  {
    question: "Quels sont les modules de la formation VTC continue ?",
    answer:
      "La formation VTC continue comprend 3 modules obligatoires : Réglementation T3P (A), Réglementation VTC (B) et Sécurité routière (C). Un module optionnel (E) est proposé sur la gestion et le développement commercial. Les modules couvrent les évolutions réglementaires et les bonnes pratiques professionnelles.",
  },
  {
    question: "Puis-je suivre la formation VTC continue en plusieurs fois ?",
    answer:
      "Oui, la formation VTC continue de 14 heures peut être fractionnée en 4 sessions de 3h30 chacune. Ces sessions doivent être réparties sur une période maximale de 2 mois. Ce format est idéal pour les chauffeurs VTC en activité qui ne souhaitent pas interrompre leur activité pendant 2 jours consécutifs.",
  },
];

export default function FormationVTCContinuePage() {
  const jsonLdCourse = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Formation VTC Continue Obligatoire",
    description:
      "Formation VTC continue obligatoire de 14 heures pour le renouvellement de la carte professionnelle VTC. Modules : Réglementation T3P, Réglementation VTC, Sécurité routière et Gestion commerciale (optionnel).",
    provider: {
      "@type": "Organization",
      name: "CAB Formations",
      url: "https://cab-formations.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "151, avenue Gallieni, Bât C",
        addressLocality: "Bagnolet",
        postalCode: "93170",
        addressCountry: "FR",
      },
    },
    offers: {
      "@type": "Offer",
      price: 399,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://cab-formations.fr/formation-vtc-continue-obligatoire",
    },
    timeRequired: "PT14H",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "1216",
      bestRating: "5",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCourse),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[var(--cab-gold)] font-semibold mb-4 tracking-wide uppercase text-sm">
            Obligatoire tous les 5 ans | 14 heures | 399€
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            LA FORMATION VTC CONTINUE
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            La formation VTC continue est obligatoire pour renouveler votre carte professionnelle VTC
            tous les 5 ans. D&apos;une durée de 14 heures, elle peut être fractionnée en 4 sessions
            de 3h30 sur 2 mois maximum.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Prérequis : être titulaire d&apos;une carte professionnelle VTC | Certifié QUALIOPI |
            4.7/5 sur 1216 avis
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

      {/* What is formation continue? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Qu&apos;est-ce que la formation VTC continue ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            La formation VTC continue est une obligation légale imposée à tous les chauffeurs VTC
            titulaires d&apos;une carte professionnelle. Elle doit être suivie tous les 5 ans pour
            permettre le renouvellement de la carte VTC auprès de la préfecture. Sans attestation de
            suivi, le renouvellement sera refusé.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            D&apos;une durée de <strong>14 heures</strong>, la formation peut être suivie en continu
            sur 2 jours ou fractionnée en <strong>4 sessions de 3h30</strong> réparties sur une
            période maximale de <strong>2 mois</strong>. Ce format flexible est conçu pour les
            chauffeurs VTC en activité qui ne peuvent pas se libérer 2 jours consécutifs.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[var(--cab-gray)] rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-blue)]">14h</div>
              <div className="text-sm text-gray-600 mt-1">Durée totale de formation</div>
            </div>
            <div className="bg-[var(--cab-gray)] rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-blue)]">5 ans</div>
              <div className="text-sm text-gray-600 mt-1">Renouvellement obligatoire</div>
            </div>
            <div className="bg-[var(--cab-gray)] rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-blue)]">399€</div>
              <div className="text-sm text-gray-600 mt-1">Tarif tout compris</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Quels sont les prérequis pour la formation VTC continue ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Le seul prérequis pour suivre la formation VTC continue est d&apos;être titulaire
            d&apos;une carte professionnelle VTC en cours de validité ou arrivant à expiration. Aucun
            examen final n&apos;est requis : il suffit d&apos;assister à l&apos;intégralité des 14
            heures de formation pour obtenir votre attestation de suivi.
          </p>
          <div className="card border border-gray-100">
            <h3 className="font-bold text-[var(--cab-blue)] mb-4">
              Documents à fournir pour l&apos;inscription
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Carte professionnelle VTC en cours de validité (recto-verso)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pièce d&apos;identité en cours de validité
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Permis de conduire en cours de validité
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">
            Quels sont les modules de la formation VTC continue ?
          </h2>
          <p className="section-subtitle">
            La formation VTC continue comprend 3 modules obligatoires portant sur la réglementation et
            la sécurité routière, ainsi qu&apos;un module optionnel sur la gestion et le
            développement commercial. Tous les modules sont mis à jour pour intégrer les dernières
            évolutions réglementaires.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.letter}
                className={`card border ${mod.mandatory ? "border-gray-100" : "border-dashed border-gray-300"} hover:border-[var(--cab-gold)] transition-colors`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--cab-blue)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {mod.letter}
                    </div>
                    <h3 className="font-bold text-[var(--cab-blue)] text-sm leading-tight">
                      {mod.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ml-2 ${
                      mod.mandatory
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {mod.mandatory ? "Obligatoire" : "Optionnel"}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format and scheduling */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Comment se déroule la formation VTC continue ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            La formation VTC continue de 14 heures est conçue pour s&apos;adapter à votre emploi du
            temps de chauffeur VTC en activité. Vous pouvez choisir entre deux formats pour suivre la
            formation dans l&apos;un de nos centres agréés.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card border border-gray-100 text-center">
              <div className="w-14 h-14 bg-[var(--cab-blue)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Format continu</h3>
              <p className="text-sm text-gray-600">
                14 heures de formation sur <strong>2 jours consécutifs</strong> (7h par jour). Idéal
                si vous pouvez vous libérer un week-end ou 2 jours en semaine.
              </p>
            </div>
            <div className="card border border-gray-100 text-center">
              <div className="w-14 h-14 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Format fractionné</h3>
              <p className="text-sm text-gray-600">
                <strong>4 sessions de 3h30</strong> réparties sur une période maximale de{" "}
                <strong>2 mois</strong>. Idéal pour continuer votre activité VTC entre les sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title">
            Combien coûte la formation VTC continue ?
          </h2>
          <p className="section-subtitle">
            La formation VTC continue chez CAB Formations est proposée à un tarif tout compris de
            399€, incluant les 14 heures de formation, les supports pédagogiques et l&apos;attestation
            de suivi nécessaire au renouvellement de votre carte VTC.
          </p>
          <div className="card border-2 border-[var(--cab-gold)] text-center max-w-md mx-auto">
            <h3 className="font-bold text-[var(--cab-blue)] text-xl mb-1">
              Formation VTC Continue
            </h3>
            <div className="text-sm text-gray-500 mb-3">14 heures | En centre</div>
            <div className="price-tag mb-4">399€</div>
            <p className="text-sm text-gray-600 mb-4">
              Tarif tout compris : formation, supports pédagogiques et attestation de suivi pour le
              renouvellement de votre carte professionnelle VTC.
            </p>
            <ul className="space-y-2 mb-6 text-left">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                14h de formation en centre agréé
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Supports de cours inclus
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Format continu ou fractionné (4 x 3h30)
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Attestation de suivi officielle
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Financement possible : CPF, Pôle Emploi, 3X sans frais
              </li>
            </ul>
            <Link href="/demande-de-devis" className="btn-gold w-full text-center">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Why renew */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Pourquoi la formation VTC continue est-elle obligatoire ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            La formation VTC continue est une obligation légale instaurée pour garantir que les
            chauffeurs VTC maintiennent leurs compétences à jour. La réglementation du transport
            évolue régulièrement, et cette formation permet de rester informé des changements
            législatifs, des nouvelles règles de sécurité routière et des bonnes pratiques
            professionnelles.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Obligation légale
              </h3>
              <p className="text-sm text-gray-600">
                Sans attestation de formation continue, la préfecture refusera le renouvellement de
                votre carte professionnelle VTC. Vous ne pourrez plus exercer légalement.
              </p>
            </div>
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Mise à jour des connaissances
              </h3>
              <p className="text-sm text-gray-600">
                La réglementation T3P et VTC évolue régulièrement. La formation continue vous permet
                de rester informé des changements et d&apos;exercer en toute conformité.
              </p>
            </div>
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Sécurité routière
              </h3>
              <p className="text-sm text-gray-600">
                Actualisation des connaissances en sécurité routière, nouvelles règles du code de la
                route, prévention des risques et éco-conduite.
              </p>
            </div>
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Qualité de service
              </h3>
              <p className="text-sm text-gray-600">
                Amélioration continue de la qualité de service, relation client, développement
                commercial et fidélisation de votre clientèle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Questions fréquentes sur la formation VTC continue
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="card border border-gray-100 group"
              >
                <summary className="font-bold text-[var(--cab-blue)] cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Renouvelez votre carte VTC en toute sérénité
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Suivez votre formation VTC continue de 14 heures avec CAB Formations, organisme certifié
            QUALIOPI. Obtenez votre attestation de suivi pour renouveler votre carte professionnelle.
          </p>
          <p className="text-gray-400 mb-8">
            Contactez un CAB&apos;Expert pour planifier votre formation continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis" className="btn-gold text-lg">
              Demander un devis gratuit
            </Link>
            <a href="tel:+33176380017" className="btn-blue text-lg border border-white/20">
              Appeler le 01 76 38 00 17
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            CAB Formations - 151, avenue Gallieni, Bât C, 93170 Bagnolet |{" "}
            <a href="mailto:contact@cab-formations.fr" className="underline hover:text-gray-300">
              contact@cab-formations.fr
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
