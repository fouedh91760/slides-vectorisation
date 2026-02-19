import type { Metadata } from "next";
import Link from "next/link";
import { quizCategories } from "@/data/quiz-data";

export const metadata: Metadata = {
  title: "Quiz VTC - Entrainement Gratuit a l'Examen | CAB Formations",
  description:
    "Entrainez-vous gratuitement a l'examen VTC avec nos quiz en ligne. 60 questions QCM couvrant les 6 matieres de l'examen theorique : reglementation T3P, gestion, securite routiere, francais, anglais, developpement commercial.",
  alternates: {
    canonical: "https://cab-formations.fr/quiz",
  },
  openGraph: {
    title: "Quiz VTC Gratuit - Preparez l'Examen VTC en Ligne",
    description:
      "60 QCM gratuits pour preparer l'examen theorique VTC. Testez vos connaissances sur les 6 matieres de l'examen.",
    url: "https://cab-formations.fr/quiz",
  },
};

const categoryIcons: Record<string, string> = {
  "reglementation-t3p": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "gestion-entreprise": "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "securite-routiere": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  "francais": "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  "anglais": "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  "developpement-commercial": "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
};

export default function QuizListingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Quiz VTC - Entrainement a l'examen",
            description: "Quiz gratuits pour preparer l'examen theorique VTC",
            numberOfItems: quizCategories.length,
            itemListElement: quizCategories.map((cat, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Quiz",
                name: cat.title,
                description: cat.description,
                url: `https://cab-formations.fr/quiz/${cat.slug}`,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">
            Quiz VTC - Entrainement Gratuit a l&apos;Examen
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Testez vos connaissances avec nos QCM gratuits couvrant les 6 matieres de l&apos;examen theorique VTC.
            60 questions pour vous preparer efficacement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              60 questions QCM
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              6 matieres de l&apos;examen
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              100% gratuit
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-[var(--cab-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Corrections detaillees
            </span>
          </div>
        </div>
      </section>

      {/* Quiz Categories Grid */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Choisissez une matiere</h2>
          <p className="section-subtitle">
            Selectionnez une categorie pour commencer votre entrainement. Chaque quiz contient 10 questions QCM avec corrections detaillees.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/quiz/${category.slug}`}
                className="card border border-gray-100 group cursor-pointer block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--cab-blue)] rounded-xl flex items-center justify-center text-white group-hover:bg-[var(--cab-gold)] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={categoryIcons[category.slug] || "M12 6v6m0 0v6m0-6h6m-6 0H6"}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--cab-blue)] group-hover:text-[var(--cab-gold)] transition-colors">
                      {category.title}
                    </h3>
                    <div className="text-xs text-gray-500">Coefficient {category.coefficient}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {category.questions.length} questions
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cab-gold)] group-hover:translate-x-1 transition-transform">
                    Commencer
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">Vous souhaitez aller plus loin ?</h2>
          <p className="section-subtitle">
            Nos quiz gratuits sont un complement ideal a nos formations VTC. Pour une preparation complete a l&apos;examen, decouvrez nos formations en presentiel et en e-learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis" className="btn-gold text-lg">
              Demander un devis gratuit
            </Link>
            <Link href="/" className="btn-blue text-lg">
              Decouvrir nos formations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
