import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ Formation VTC - Questions Fréquentes",
  description:
    "Questions fréquentes sur la formation VTC : prix (499€ à 2490€), durée (35h à 105h), financement (CPF, Pôle Emploi), taux de réussite, formation continue obligatoire, e-learning, salaire VTC, conditions d'accès.",
  alternates: { canonical: "https://cab-formations.fr/faq" },
  openGraph: {
    title: "FAQ Formation VTC - Questions Fréquentes | CAB Formations",
    description:
      "Toutes les réponses à vos questions sur la formation VTC : prix, durée, financement, examen, carte professionnelle. CAB Formations, certifié QUALIOPI.",
    url: "https://cab-formations.fr/faq",
  },
};

const faqItems = [
  {
    question: "Combien coûte une formation VTC ?",
    answer:
      "Le prix d'une formation VTC chez CAB Formations varie de 499€ à 2 490€ selon la durée et le format choisi. La formation théorique de 35h est à 499€, la formation de 70h est à 1 690€ et la formation premium de 105h est à 2 490€. La formation e-learning est également disponible à partir de 499€. Plusieurs dispositifs de financement sont disponibles pour réduire ou prendre en charge intégralement le coût de votre formation.",
  },
  {
    question: "Quelle est la durée de la formation VTC ?",
    answer:
      "La durée de la formation VTC varie de 35 heures à 105 heures selon la formule choisie. La formation intensive de 35h se déroule sur 1 semaine, la formation complète de 70h sur 2 semaines et la formation premium de 105h sur 3 semaines. La formation e-learning se fait à votre rythme. Chez CAB Formations, nous recommandons la formation de 70h qui offre le meilleur équilibre entre approfondissement des connaissances et durée de préparation.",
  },
  {
    question: "Comment financer sa formation VTC ?",
    answer:
      "Plusieurs solutions de financement existent pour votre formation VTC. Le CPF (Compte Personnel de Formation) permet d'utiliser vos droits acquis au fil de votre carrière. Pôle Emploi peut financer votre formation via l'AIF (Aide Individuelle à la Formation) si vous êtes demandeur d'emploi. Le DIF (Droit Individuel à la Formation) et la Mission Locale (pour les moins de 26 ans) sont également des options. CAB Formations propose aussi le règlement en 3 fois sans frais. Contactez nos conseillers au 01 76 38 00 17 pour étudier votre dossier de financement.",
  },
  {
    question: "Quel est le taux de réussite à l'examen VTC ?",
    answer:
      "Le taux de réussite à l'examen VTC varie selon la préparation des candidats. L'examen VTC est un examen exigeant qui nécessite une préparation sérieuse. Chez CAB Formations, nous mettons tout en œuvre pour vous offrir la meilleure préparation possible : cours théoriques approfondis, examens blancs réguliers, corrections individualisées et accompagnement personnalisé. Nos formateurs expérimentés vous transmettent les méthodes et connaissances indispensables pour réussir votre examen du premier coup.",
  },
  {
    question: "La formation continue VTC est-elle obligatoire ?",
    answer:
      "Oui, la formation continue VTC est obligatoire. Tous les chauffeurs VTC doivent suivre une formation continue de 14 heures tous les 5 ans pour renouveler leur carte professionnelle. Cette formation permet de mettre à jour vos connaissances en réglementation, sécurité routière et relation client. CAB Formations propose cette formation continue à 399€. Le non-respect de cette obligation peut entraîner le retrait de votre carte professionnelle VTC.",
  },
  {
    question: "Peut-on passer l'examen VTC en e-learning ?",
    answer:
      "Oui, la formation VTC est disponible en e-learning chez CAB Formations. Notre plateforme e-learning vous permet de préparer l'examen VTC théorique à votre rythme, 24h/24 et 7j/7. Vous accédez à des cours vidéo, des QCM interactifs, des fiches de révision et des examens blancs corrigés. L'examen lui-même se passe en présentiel dans un centre agréé de la CMA, mais la préparation peut se faire entièrement à distance. La formule e-learning est disponible à partir de 499€.",
  },
  {
    question: "Combien gagne un chauffeur VTC ?",
    answer:
      "Le salaire moyen d'un chauffeur VTC est entre 2 000€ et 4 000€ net par mois. Un chauffeur VTC débutant peut espérer gagner environ 2 000€ net/mois en travaillant à temps plein. Avec de l'expérience et une clientèle fidélisée, les revenus peuvent atteindre 3 000€ à 4 000€ net/mois, voire davantage. Les revenus dépendent de votre zone géographique (Paris étant la plus rémunératrice), du nombre d'heures travaillées, des plateformes utilisées et de votre capacité à développer une clientèle directe.",
  },
  {
    question: "Quelles sont les conditions pour devenir VTC ?",
    answer:
      "Pour devenir chauffeur VTC, vous devez remplir les conditions suivantes : être titulaire du permis de conduire catégorie B depuis au moins 3 ans, avoir un casier judiciaire vierge (bulletin n°2), passer une visite médicale favorable et réussir l'examen VTC (théorique et pratique) organisé par la CMA (Chambre des Métiers et de l'Artisanat). Une fois l'examen réussi, vous obtiendrez votre carte professionnelle VTC auprès de la préfecture, puis vous devrez créer votre entreprise et immatriculer votre véhicule.",
  },
  {
    question: "Où passer l'examen VTC ?",
    answer:
      "L'examen VTC se passe dans les Chambres des Métiers et de l'Artisanat (CMA) de votre département. Vous pouvez vous inscrire dans la CMA de votre choix, quel que soit votre lieu de résidence. CAB Formations dispose de 12 centres de formation répartis dans toute la France : Bagnolet, Herblay, Villabé, Bois-d'Arcy, Seclin (Lille), Vénissieux (Lyon), Évry, Strasbourg, Nice, Bordeaux, Toulouse et Nantes. Nos centres sont situés à proximité des CMA pour faciliter votre passage d'examen.",
  },
  {
    question: "Comment obtenir la carte professionnelle VTC ?",
    answer:
      "Pour obtenir la carte professionnelle VTC, vous devez d'abord réussir l'examen VTC (théorique et pratique) organisé par la CMA. Une fois reçu, vous effectuez une demande de carte professionnelle auprès de la préfecture de votre département. Le dossier comprend : l'attestation de réussite à l'examen, une pièce d'identité, le permis de conduire, un justificatif de domicile, le bulletin n°2 du casier judiciaire et un certificat médical. Le délai d'obtention est d'environ 3 mois. La carte est valable 5 ans et doit être renouvelée avec une formation continue de 14 heures.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
            QUESTIONS FR&Eacute;QUENTES SUR LA FORMATION VTC
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Toutes les r&eacute;ponses &agrave; vos questions sur la formation et le m&eacute;tier de chauffeur VTC
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Prix, dur&eacute;e, financement, examen, carte professionnelle... Retrouvez ici les r&eacute;ponses
            aux questions les plus pos&eacute;es par nos futurs stagiaires.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Nos r&eacute;ponses &agrave; vos questions</h2>
          <p className="section-subtitle">
            Cliquez sur une question pour d&eacute;couvrir la r&eacute;ponse. Si vous ne trouvez pas la r&eacute;ponse
            &agrave; votre question, contactez-nous au{" "}
            <a href="tel:+33176380017" className="text-[var(--cab-gold)] font-semibold">
              01 76 38 00 17
            </a>
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            {faqItems.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.question}</summary>
                <div className="faq-content">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Résumé rapide */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Les essentiels de la formation VTC</h2>
          <p className="section-subtitle">
            Un r&eacute;capitulatif rapide des informations cl&eacute;s sur la formation VTC.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="stat-number">499&euro;</div>
              <div className="text-sm text-gray-600 font-medium">&agrave; 2 490&euro;</div>
              <div className="text-xs text-gray-400 mt-1">Prix de la formation</div>
            </div>
            <div className="card text-center">
              <div className="stat-number">35h</div>
              <div className="text-sm text-gray-600 font-medium">&agrave; 105h</div>
              <div className="text-xs text-gray-400 mt-1">Dur&eacute;e de la formation</div>
            </div>
            <div className="card text-center">
              <div className="stat-number">12</div>
              <div className="text-sm text-gray-600 font-medium">centres en France</div>
              <div className="text-xs text-gray-400 mt-1">Dont Paris, Lyon, Lille</div>
            </div>
            <div className="card text-center">
              <div className="stat-number">2K-4K&euro;</div>
              <div className="text-sm text-gray-600 font-medium">net / mois</div>
              <div className="text-xs text-gray-400 mt-1">Salaire moyen VTC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Les aides au financement</h2>
          <p className="section-subtitle">
            Plusieurs solutions existent pour financer votre formation VTC.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "CPF (Compte Personnel de Formation)",
              "Pôle Emploi (AIF)",
              "DIF (Droit Individuel à la Formation)",
              "Mission Locale (- de 26 ans)",
              "Conseil Régional",
              "Règlement en 3X sans frais",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 bg-[var(--cab-gray)] rounded-lg p-4">
                <svg
                  className="w-5 h-5 text-green-500 shrink-0"
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
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIOPI */}
      <section className="py-12 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-green-700 font-semibold">Certifi&eacute; QUALIOPI</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            CAB Formations est certifi&eacute; QUALIOPI. Cette certification atteste de la qualit&eacute; de nos
            formations et vous permet de b&eacute;n&eacute;ficier de financements publics et mutualis&eacute;s.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vous avez encore des questions ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Nos conseillers sont disponibles pour r&eacute;pondre &agrave; toutes vos questions et vous accompagner
            dans votre projet de formation VTC. Contactez-nous gratuitement.
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
