import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation VTC : Examen VTC Théorique",
  description:
    "Préparez l'examen VTC théorique avec CAB Formations. 7 épreuves, certification RS5637, taux de réussite élevé. Formations de 35h (499€), 70h (1690€), 105h (1990€) et E-learning. Certifié QUALIOPI.",
  alternates: { canonical: "https://cab-formations.fr/examen-vtc-theorique" },
  openGraph: {
    title: "Formation VTC : Examen VTC Théorique | CAB Formations",
    description:
      "Préparez l'examen VTC théorique avec CAB Formations. 7 épreuves, certification RS5637. Formations dès 499€. Certifié QUALIOPI, 4.7/5 sur 1216 avis.",
    url: "https://cab-formations.fr/examen-vtc-theorique",
    type: "website",
    locale: "fr_FR",
    siteName: "CAB Formations",
  },
};

const examSections = [
  {
    letter: "A",
    title: "Réglementation du transport public particulier de personnes (T3P)",
    coeff: 3,
    duration: "45 min",
    threshold: "6/20",
    questions: "5 questions à réponses courtes + 10 QCM",
  },
  {
    letter: "B",
    title: "Gestion d'entreprise",
    coeff: 2,
    duration: "45 min",
    threshold: "6/20",
    questions: "2 questions à réponses courtes + 16 QCM",
  },
  {
    letter: "C",
    title: "Sécurité routière",
    coeff: 3,
    duration: "30 min",
    threshold: "6/20",
    questions: "20 QCM",
  },
  {
    letter: "D",
    title: "Langue française",
    coeff: 2,
    duration: "30 min",
    threshold: "6/20",
    questions: "3 questions à réponses courtes + 7 QCM",
  },
  {
    letter: "E",
    title: "Langue anglaise (niveau A2)",
    coeff: 1,
    duration: "30 min",
    threshold: "4/20",
    questions: "20 QCM",
  },
  {
    letter: "F",
    title: "Développement commercial et gestion propre de l'activité VTC",
    coeff: 3,
    duration: "30 min",
    threshold: "6/20",
    questions: "4 questions à réponses courtes + 12 QCM",
  },
  {
    letter: "G",
    title: "Réglementation nationale spécifique VTC",
    coeff: 3,
    duration: "20 min",
    threshold: "6/20",
    questions: "2 questions à réponses courtes + 6 QCM",
  },
];

const formations = [
  {
    title: "Formation VTC Théorique 35h",
    duration: "35 heures (1 semaine)",
    price: "499",
    priceNum: 499,
    desc: "Formation intensive sur 1 semaine en centre. Idéale pour les candidats qui ont déjà des bases et souhaitent une remise à niveau rapide avant l'examen VTC théorique.",
    features: [
      "Cours en présentiel avec formateur",
      "Supports de cours inclus",
      "Examens blancs corrigés",
      "Accès e-learning offert",
    ],
  },
  {
    title: "Formation VTC Théorique 70h",
    duration: "70 heures (2 semaines)",
    price: "1 690",
    priceNum: 1690,
    desc: "Formation complète sur 2 semaines en centre. La formule la plus populaire : elle couvre en profondeur toutes les épreuves de l'examen VTC théorique.",
    popular: true,
    features: [
      "Cours en présentiel avec formateur",
      "Approfondissement de toutes les matières",
      "Examens blancs hebdomadaires",
      "Accès e-learning offert",
      "Suivi personnalisé",
    ],
  },
  {
    title: "Formation VTC Théorique 105h",
    duration: "105 heures (3 semaines)",
    price: "1 990",
    priceNum: 1990,
    desc: "Formation premium sur 3 semaines avec accompagnement renforcé. Recommandée pour les candidats qui souhaitent maximiser leurs chances de réussite à l'examen VTC.",
    features: [
      "Cours en présentiel avec formateur",
      "Accompagnement personnalisé intensif",
      "Examens blancs quotidiens",
      "Accès e-learning offert",
      "Coaching individuel",
      "Garantie de re-formation",
    ],
  },
  {
    title: "Formation VTC Théorique E-learning",
    duration: "À votre rythme",
    price: "499",
    priceNum: 499,
    desc: "Formation 100% en ligne accessible 24h/24, 7j/7. Préparez l'examen VTC théorique depuis chez vous, à votre rythme, avec cours vidéo, QCM et examens blancs.",
    features: [
      "Accès plateforme 24h/24, 7j/7",
      "Cours vidéo par matière",
      "QCM et examens blancs illimités",
      "Forum d'entraide",
      "Mise à jour continue du contenu",
    ],
  },
];

const faqs = [
  {
    question: "Quel est le programme de l'examen VTC théorique ?",
    answer:
      "L'examen VTC théorique comprend 7 épreuves écrites : Réglementation T3P (A), Gestion d'entreprise (B), Sécurité routière (C), Langue française (D), Langue anglaise A2 (E), Développement commercial VTC (F) et Réglementation nationale VTC (G). La durée totale est de 3h50 et il faut obtenir une moyenne générale d'au moins 10/20.",
  },
  {
    question: "Quelle est la note minimale pour réussir l'examen VTC théorique ?",
    answer:
      "Pour réussir l'examen VTC théorique, vous devez obtenir une moyenne générale d'au moins 10/20 sur l'ensemble des 7 épreuves, tout en respectant les notes éliminatoires par matière : 6/20 minimum pour les épreuves A, B, C, D, F, G et 4/20 minimum pour l'épreuve E (anglais).",
  },
  {
    question: "Combien coûte la formation VTC théorique ?",
    answer:
      "CAB Formations propose plusieurs formules : formation 35h en centre à 499€, formation 70h à 1 690€, formation 105h à 1 990€, et formation E-learning à 499€. Des aides au financement sont possibles via Pôle Emploi, CPF ou le règlement en 3X sans frais.",
  },
  {
    question: "Qu'est-ce que la certification RS5637 ?",
    answer:
      "La certification RS5637 est l'enregistrement officiel au Répertoire Spécifique de France Compétences. Elle est délivrée par le Ministère de la transition écologique et des territoires et atteste de la validité de l'examen VTC. Son statut est ACTIVE et elle est valable jusqu'au 31/12/2026.",
  },
  {
    question: "Qu'est-ce que la Passerelle VTC ?",
    answer:
      "La Passerelle VTC est un dispositif permettant aux chauffeurs de taxi titulaires d'une carte professionnelle de taxi en cours de validité d'obtenir la carte professionnelle VTC sans passer l'examen complet. Ils doivent suivre une formation spécifique et réussir les épreuves F et G uniquement.",
  },
  {
    question: "Qu'est-ce que l'Équivalence VTC ?",
    answer:
      "L'Équivalence VTC permet aux titulaires de certains diplômes (BTS Transport, Licence professionnelle transport, etc.) d'être dispensés de tout ou partie des épreuves de l'examen VTC théorique. Les conditions précises dépendent du diplôme détenu.",
  },
  {
    question: "Combien de temps dure la formation VTC théorique ?",
    answer:
      "CAB Formations propose des formations de 35h (1 semaine), 70h (2 semaines) et 105h (3 semaines) en centre, ainsi qu'une formule E-learning à votre rythme. La formule 70h est la plus populaire car elle permet un approfondissement complet de toutes les matières.",
  },
];

export default function ExamenVTCTheoriquePage() {
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
      url: "https://cab-formations.fr/examen-vtc-theorique",
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
            Certification RS5637 - ACTIVE | Ministère de la transition écologique
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            DÉCOUVREZ L&apos;EXAMEN VTC THÉORIQUE
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            L&apos;examen VTC théorique est la première étape pour obtenir votre carte professionnelle
            VTC. Il comprend 7 épreuves écrites avec une moyenne minimale de 10/20 requise.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            CAB Formations vous prépare avec des formations de 35h, 70h, 105h en centre et en
            E-learning. Certifié QUALIOPI | 4.7/5 sur 1216 avis.
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

      {/* What is the VTC theoretical exam? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Qu&apos;est-ce que l&apos;examen VTC théorique ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            L&apos;examen VTC théorique est une épreuve d&apos;admissibilité obligatoire pour obtenir
            la carte professionnelle de chauffeur VTC en France. Enregistré sous la certification
            RS5637 (statut ACTIVE), il est organisé par le Ministère de la transition écologique et
            des territoires. Cette certification est valable jusqu&apos;au 31/12/2026.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;examen se compose de 7 épreuves écrites notées sur 20 avec des coefficients
            différents. Pour être admissible, le candidat doit obtenir une moyenne générale pondérée
            d&apos;au moins <strong>10/20</strong>, sans note éliminatoire dans aucune matière. Les
            épreuves A à D et F-G constituent le tronc commun avec l&apos;examen Taxi.
          </p>
          <div className="bg-[var(--cab-gray)] rounded-xl p-6">
            <h3 className="font-bold text-[var(--cab-blue)] mb-3">
              Objectifs de la formation VTC théorique
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Préparer les candidats à l&apos;obtention de la carte professionnelle VTC
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Maîtriser les 7 matières de l&apos;examen VTC théorique
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Réussir l&apos;épreuve d&apos;admissibilité avec une moyenne minimum de 10/20
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Acquérir les connaissances réglementaires, commerciales et linguistiques requises
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7 exam sections */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">
            Quelles sont les 7 épreuves de l&apos;examen VTC théorique ?
          </h2>
          <p className="section-subtitle">
            L&apos;examen VTC théorique comprend 7 épreuves écrites avec des coefficients allant de 1
            à 3. La durée totale est de 3h50. Chaque épreuve a une note éliminatoire en dessous de
            laquelle le candidat est éliminé, quelle que soit sa moyenne générale.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examSections.map((section) => (
              <div
                key={section.letter}
                className="card border border-gray-100 hover:border-[var(--cab-gold)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[var(--cab-blue)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {section.letter}
                  </div>
                  <h3 className="font-bold text-[var(--cab-blue)] text-sm leading-tight">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Coefficient :</span>
                    <span className="font-semibold text-[var(--cab-blue)]">{section.coeff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Durée :</span>
                    <span className="font-semibold">{section.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Note éliminatoire :</span>
                    <span className="font-semibold text-red-600">&lt; {section.threshold}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-gray-500">{section.questions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-xl p-6 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 font-semibold">
              Moyenne minimale requise : <span className="text-[var(--cab-gold)] text-xl">10/20</span>{" "}
              sur l&apos;ensemble des épreuves pondérées par les coefficients.
            </p>
          </div>
        </div>
      </section>

      {/* Training offerings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">
            Combien coûte la formation VTC théorique ?
          </h2>
          <p className="section-subtitle">
            CAB Formations propose 4 formules pour préparer l&apos;examen VTC théorique, à partir de
            499€. Toutes nos formations incluent les supports de cours et l&apos;accès à la
            plateforme e-learning. Financement possible via Pôle Emploi, CPF ou paiement en 3X sans
            frais.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((f, i) => (
              <div
                key={i}
                className={`card relative ${f.popular ? "border-2 border-[var(--cab-gold)]" : "border border-gray-100"}`}
              >
                {f.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--cab-gold)] text-white text-xs font-bold px-4 py-1 rounded-full">
                    LA PLUS POPULAIRE
                  </div>
                )}
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

      {/* Passerelle VTC */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Qu&apos;est-ce que la Passerelle VTC ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            La Passerelle VTC est un dispositif réglementaire permettant aux chauffeurs de taxi en
            exercice d&apos;obtenir la carte professionnelle VTC de manière simplifiée. Si vous êtes
            titulaire d&apos;une carte professionnelle de taxi en cours de validité, vous pouvez
            accéder à la profession de VTC sans repasser l&apos;intégralité de l&apos;examen.
          </p>
          <div className="card border border-gray-100">
            <h3 className="font-bold text-[var(--cab-blue)] mb-4">
              Conditions de la Passerelle Taxi vers VTC
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Être titulaire d&apos;une carte professionnelle de taxi en cours de validité
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Suivre une formation complémentaire spécifique aux épreuves F et G
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Réussir uniquement les épreuves F (Développement commercial VTC) et G (Réglementation nationale VTC)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[var(--cab-gold)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Les épreuves A, B, C, D et E sont dispensées grâce à la carte taxi
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equivalence VTC */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Qu&apos;est-ce que l&apos;Équivalence VTC ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            L&apos;Équivalence VTC permet à certains candidats titulaires de diplômes spécifiques
            d&apos;être dispensés de tout ou partie des épreuves de l&apos;examen VTC théorique. Ce
            dispositif reconnaît les compétences déjà acquises dans le cadre de formations diplômantes.
          </p>
          <div className="card border border-gray-100">
            <h3 className="font-bold text-[var(--cab-blue)] mb-4">
              Diplômes pouvant ouvrir droit à une équivalence
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                BTS Transport et prestations logistiques
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                DUT Gestion logistique et transport
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Licence professionnelle dans le domaine du transport
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Titre professionnel de conducteur de transport en commun
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Les conditions d&apos;équivalence varient selon le diplôme. Contactez-nous au{" "}
              <a href="tel:+33176380017" className="text-[var(--cab-gold)] font-semibold">
                01 76 38 00 17
              </a>{" "}
              pour vérifier votre éligibilité.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">
            Questions fréquentes sur l&apos;examen VTC théorique
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
            Prêt à réussir l&apos;examen VTC théorique ?
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Rejoignez les +50 000 stagiaires formés par CAB Formations. Notre taux de réussite et notre
            certification QUALIOPI attestent de la qualité de nos formations.
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
