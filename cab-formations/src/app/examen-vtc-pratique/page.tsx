import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réussir l'Épreuve d'admission VTC | Examen Pratique VTC",
  description:
    "Préparez l'examen VTC pratique avec CAB Formations. Épreuve de conduite notée sur 20, minimum 12/20. Formation 70h en présentiel (159€) ou E-learning (399€). Certifié QUALIOPI, 4.7/5 sur 1216 avis.",
  alternates: { canonical: "https://cab-formations.fr/examen-vtc-pratique" },
  openGraph: {
    title: "Réussir l'Épreuve d'admission VTC | Examen Pratique VTC | CAB Formations",
    description:
      "Préparez l'examen VTC pratique : épreuve de conduite professionnelle notée sur 20 points. Formation dès 159€. Certifié QUALIOPI.",
    url: "https://cab-formations.fr/examen-vtc-pratique",
    type: "website",
    locale: "fr_FR",
    siteName: "CAB Formations",
  },
};

const evaluationCriteria = [
  {
    letter: "A",
    title: "Conduite et sécurité du véhicule",
    points: 10,
    desc: "Maîtrise du véhicule, respect du code de la route, conduite souple et sécuritaire, anticipation des dangers et utilisation correcte des équipements du véhicule.",
  },
  {
    letter: "B",
    title: "Relation client et qualité de service",
    points: 5,
    desc: "Accueil du client, présentation personnelle, attitude professionnelle, courtoisie, prise en charge des bagages et communication adaptée.",
  },
  {
    letter: "C",
    title: "Construction du parcours",
    points: 3,
    desc: "Choix de l'itinéraire optimal, utilisation du GPS et des outils de navigation, adaptation du parcours en cas d'imprévus (travaux, embouteillages).",
  },
  {
    letter: "D",
    title: "Facturation et paiement",
    points: 2,
    desc: "Application correcte du tarif, établissement de la note de course, encaissement du paiement et remise du reçu au client.",
  },
];

const formations = [
  {
    title: "Formation VTC Pratique en Présentiel",
    duration: "70 heures",
    price: "159",
    priceNum: 159,
    desc: "Formation en présentiel avec véhicule double commande et formateurs expérimentés. Vous vous entraînez dans les conditions réelles de l'examen VTC pratique avec des mises en situation professionnelles.",
    features: [
      "Véhicule double commande mis à disposition",
      "Formateurs chauffeurs VTC expérimentés",
      "Mises en situation client réelles",
      "Entraînement aux parcours d'examen",
      "Conseils personnalisés sur la conduite",
      "Simulation d'épreuve complète",
    ],
  },
  {
    title: "Formation VTC Pratique E-learning",
    duration: "À votre rythme",
    price: "399",
    priceNum: 399,
    desc: "Préparez la partie théorique de l'épreuve pratique en ligne : relation client, construction de parcours, facturation. Complément idéal pour les candidats souhaitant réviser la méthodologie avant les heures de conduite.",
    features: [
      "Cours vidéo sur la relation client",
      "Modules sur la construction de parcours",
      "Entraînement à la facturation",
      "QCM et mises en situation virtuelles",
      "Accès plateforme 24h/24, 7j/7",
      "Conseils d'examinateurs en vidéo",
    ],
  },
];

const faqs = [
  {
    question: "Quelles sont les conditions pour passer l'examen VTC pratique ?",
    answer:
      "Pour passer l'examen VTC pratique (épreuve d'admission), vous devez avoir préalablement réussi l'examen VTC théorique (épreuve d'admissibilité). La réussite au théorique est un prérequis obligatoire. Vous disposez ensuite de 12 mois et de 3 tentatives maximum pour passer et réussir l'épreuve pratique.",
  },
  {
    question: "Quelle est la note minimale pour réussir l'examen VTC pratique ?",
    answer:
      "Pour réussir l'examen VTC pratique, vous devez obtenir une note minimale de 12/20. L'épreuve est notée sur 20 points répartis en 4 critères : Conduite et sécurité (10 points), Relation client (5 points), Construction du parcours (3 points) et Facturation et paiement (2 points).",
  },
  {
    question: "Combien de fois peut-on passer l'examen VTC pratique ?",
    answer:
      "Vous disposez de 3 tentatives maximum pour réussir l'examen VTC pratique. Ces 3 tentatives doivent s'effectuer dans un délai de 12 mois à compter de la réussite de l'examen VTC théorique. Passé ce délai ou après 3 échecs, vous devrez repasser l'examen théorique.",
  },
  {
    question: "Comment se déroule l'examen VTC pratique ?",
    answer:
      "L'examen VTC pratique est une épreuve de conduite professionnelle en conditions réelles. Vous êtes évalué par deux examinateurs sur 4 critères : la conduite et sécurité (10 points), la relation client (5 points), la construction du parcours (3 points) et la facturation/paiement (2 points). Vous devez obtenir 12/20 minimum.",
  },
  {
    question: "Combien coûte la formation VTC pratique ?",
    answer:
      "CAB Formations propose une formation VTC pratique en présentiel de 70 heures à 159€, ainsi qu'une formation E-learning à 399€. La formation en présentiel inclut un véhicule double commande et des formateurs expérimentés. Des aides au financement sont possibles via Pôle Emploi ou CPF.",
  },
  {
    question: "Que se passe-t-il si je rate l'examen VTC pratique ?",
    answer:
      "En cas d'échec à l'examen VTC pratique, vous pouvez le repasser jusqu'à 3 fois dans un délai de 12 mois après la réussite du théorique. CAB Formations vous accompagne avec des séances de perfectionnement ciblées sur vos points faibles identifiés lors de la première tentative.",
  },
];

export default function ExamenVTCPratiquePage() {
  const jsonLdProducts = formations.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: f.title,
    description: f.desc,
    brand: {
      "@type": "Organization",
      name: "CAB Formations",
    },
    offers: {
      "@type": "Offer",
      price: f.priceNum,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://cab-formations.fr/examen-vtc-pratique",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "1216",
      bestRating: "5",
    },
  }));

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
          __html: JSON.stringify(jsonLdProducts),
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
            Épreuve d&apos;admission | Note minimale : 12/20
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            LA FORMATION VTC - L&apos;EXAMEN VTC PRATIQUE
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            L&apos;examen VTC pratique est l&apos;épreuve d&apos;admission : une mise en situation
            professionnelle de conduite notée sur 20 points. Vous devez obtenir au moins 12/20 pour
            décrocher votre carte professionnelle VTC.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Prérequis : avoir réussi l&apos;examen VTC théorique | 3 tentatives en 12 mois | Certifié
            QUALIOPI | 4.7/5 sur 1216 avis
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

      {/* What is the VTC practical exam? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Qu&apos;est-ce que l&apos;examen VTC pratique ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            L&apos;examen VTC pratique, aussi appelé épreuve d&apos;admission, est la seconde et
            dernière étape pour obtenir votre carte professionnelle de chauffeur VTC. Il s&apos;agit
            d&apos;une mise en situation professionnelle de conduite évaluée par deux examinateurs. La
            note minimale requise est de <strong>12/20</strong>.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[var(--cab-gray)] rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-blue)]">12/20</div>
              <div className="text-sm text-gray-600 mt-1">Note minimale requise</div>
            </div>
            <div className="bg-[var(--cab-gray)] rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-blue)]">3</div>
              <div className="text-sm text-gray-600 mt-1">Tentatives maximum</div>
            </div>
            <div className="bg-[var(--cab-gray)] rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-blue)]">12 mois</div>
              <div className="text-sm text-gray-600 mt-1">Délai après le théorique</div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-800 font-semibold flex items-start gap-2">
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Prérequis : vous devez avoir réussi l&apos;examen VTC théorique (épreuve d&apos;admissibilité) avant de pouvoir vous inscrire à l&apos;épreuve pratique.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation criteria */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">
            Comment est noté l&apos;examen VTC pratique ?
          </h2>
          <p className="section-subtitle">
            L&apos;épreuve pratique VTC est notée sur 20 points au total, répartis en 4 critères
            d&apos;évaluation. Deux examinateurs vous accompagnent pendant l&apos;épreuve de conduite
            en conditions réelles. Vous devez obtenir au minimum 12/20.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {evaluationCriteria.map((criteria) => (
              <div
                key={criteria.letter}
                className="card border border-gray-100 hover:border-[var(--cab-gold)] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--cab-blue)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {criteria.letter}
                    </div>
                    <h3 className="font-bold text-[var(--cab-blue)] text-sm leading-tight">
                      {criteria.title}
                    </h3>
                  </div>
                  <div className="bg-[var(--cab-gold)] text-white font-bold rounded-full px-3 py-1 text-sm shrink-0 ml-2">
                    {criteria.points} pts
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{criteria.desc}</p>
                {/* Visual point bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[var(--cab-gold)] h-2 rounded-full"
                      style={{ width: `${(criteria.points / 20) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {criteria.points}/20 points
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-xl p-6 max-w-3xl mx-auto text-center">
            <p className="text-gray-700">
              <span className="font-bold text-[var(--cab-blue)]">Total : 20 points</span> |{" "}
              Conduite et sécurité (10) + Relation client (5) + Construction du parcours (3) +
              Facturation et paiement (2)
            </p>
            <p className="text-[var(--cab-gold)] font-bold text-lg mt-2">
              Seuil de réussite : 12/20 minimum
            </p>
          </div>
        </div>
      </section>

      {/* Training offerings */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title">
            Combien coûte la formation VTC pratique ?
          </h2>
          <p className="section-subtitle">
            CAB Formations vous prépare à l&apos;épreuve pratique VTC avec deux formules : une
            formation en présentiel de 70h à 159€ et une formation E-learning à 399€. Financement
            possible via Pôle Emploi, CPF ou paiement en 3X sans frais.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((f, i) => (
              <div key={i} className="card border border-gray-100">
                <h3 className="font-bold text-[var(--cab-blue)] text-lg mb-1">{f.title}</h3>
                <div className="text-sm text-gray-500 mb-3">{f.duration}</div>
                <div className="price-tag mb-4">{f.price}€</div>
                <p className="text-sm text-gray-600 mb-4">{f.desc}</p>
                <ul className="space-y-2 mb-6">
                  {f.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/demande-de-devis" className="btn-gold text-sm w-full text-center">
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam day preparation */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Comment se préparer le jour de l&apos;examen VTC pratique ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Le jour de l&apos;épreuve pratique, vous serez évalué en conditions réelles de course VTC.
            Voici les points clés pour maximiser vos chances de réussir avec une note supérieure à
            12/20. Deux examinateurs seront présents dans le véhicule.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Présentation personnelle
              </h3>
              <p className="text-sm text-gray-600">
                Tenue vestimentaire soignée et professionnelle, costume ou tenue de ville élégante.
                Véhicule propre et bien entretenu, intérieur et extérieur.
              </p>
            </div>
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Accueil du client
              </h3>
              <p className="text-sm text-gray-600">
                Ouvrir la portière, proposer de prendre les bagages, s&apos;assurer du confort du
                passager, confirmer la destination et proposer un itinéraire.
              </p>
            </div>
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Conduite professionnelle
              </h3>
              <p className="text-sm text-gray-600">
                Conduite souple et sécuritaire, respect scrupuleux du code de la route, anticipation
                des dangers, maîtrise du véhicule en toute circonstance.
              </p>
            </div>
            <div className="card border border-gray-100">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fin de course
              </h3>
              <p className="text-sm text-gray-600">
                Établir correctement la note de course, encaisser le paiement, remettre le reçu,
                remercier le client et l&apos;accompagner à la sortie du véhicule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Questions fréquentes sur l&apos;examen VTC pratique
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
            Prêt à réussir l&apos;examen VTC pratique ?
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Rejoignez les +50 000 stagiaires formés par CAB Formations. Nos formateurs expérimentés
            vous préparent dans les conditions réelles de l&apos;examen.
          </p>
          <p className="text-gray-400 mb-8">
            Contactez un CAB&apos;Expert pour un conseil personnalisé et gratuit.
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
