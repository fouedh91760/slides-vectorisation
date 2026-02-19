import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/blog-articles";

export const metadata: Metadata = {
  title: "Blog Formation VTC - Actualit\u00e9s et Conseils | CAB Formations",
  description:
    "Retrouvez tous nos articles sur la formation VTC : actualit\u00e9s du secteur, conseils pratiques, r\u00e9glementation, financement, salaires et cr\u00e9ation d'entreprise VTC. Blog CAB Formations.",
  alternates: { canonical: "https://cab-formations.fr/blog" },
  openGraph: {
    title: "Blog Formation VTC - Actualit\u00e9s et Conseils | CAB Formations",
    description:
      "Tous nos articles sur la formation VTC : actualit\u00e9s, conseils, r\u00e9glementation, financement et cr\u00e9ation d'entreprise. CAB Formations, leader de la formation VTC.",
    url: "https://cab-formations.fr/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Qualit\u00e9": "bg-green-100 text-green-800",
  "Actualit\u00e9": "bg-red-100 text-red-800",
  "Bon \u00e0 savoir": "bg-blue-100 text-blue-800",
  "Conseils": "bg-yellow-100 text-yellow-800",
  "R\u00e9glementation": "bg-purple-100 text-purple-800",
  "Applications VTC": "bg-indigo-100 text-indigo-800",
  "Pratique": "bg-orange-100 text-orange-800",
  "Financement": "bg-teal-100 text-teal-800",
};

export default function BlogPage() {
  return (
    <>
      {/* JSON-LD Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Formation VTC - CAB Formations",
            description:
              "Actualit\u00e9s, conseils et informations sur la formation VTC et le m\u00e9tier de chauffeur VTC.",
            url: "https://cab-formations.fr/blog",
            publisher: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
            blogPost: articles.map((article) => ({
              "@type": "BlogPosting",
              headline: article.title,
              description: article.excerpt,
              url: `https://cab-formations.fr/blog/${article.slug}`,
              author: {
                "@type": "Organization",
                name: "CAB Formations",
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">BLOG FORMATION VTC</h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Actualit&eacute;s, conseils et informations sur le m&eacute;tier de chauffeur VTC
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Retrouvez tous nos articles pour vous accompagner dans votre projet de devenir
            chauffeur VTC : r&eacute;glementation, financement, cr&eacute;ation d&apos;entreprise, salaires et
            bien plus encore.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Nos articles</h2>
          <p className="section-subtitle">
            D&eacute;couvrez nos derniers articles sur la formation VTC, le m&eacute;tier de chauffeur et
            l&apos;actualit&eacute; du secteur du transport de personnes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card flex flex-col no-underline"
              >
                <div className="mb-3">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-800"}`}
                  >
                    {article.category}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--cab-blue)] mb-2 text-lg leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{article.excerpt}</p>
                <span className="text-[var(--cab-gold)] font-semibold text-sm inline-flex items-center gap-1">
                  Lire la suite
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pr&ecirc;t &agrave; devenir chauffeur VTC ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Rejoignez les +50 000 stagiaires qui nous ont fait confiance. Demandez votre devis
            gratuit et commencez votre formation VTC d&egrave;s maintenant.
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
    </>
  );
}
