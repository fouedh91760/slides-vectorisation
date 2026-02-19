import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/blog-articles";

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

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article non trouv\u00e9",
    };
  }

  return {
    title: `${article.title} | Blog CAB Formations`,
    description: article.excerpt,
    alternates: { canonical: `https://cab-formations.fr/blog/${article.slug}` },
    openGraph: {
      title: `${article.title} | Blog CAB Formations`,
      description: article.excerpt,
      url: `https://cab-formations.fr/blog/${article.slug}`,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const recentArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 5);

  const paragraphs = article.content.split("\n\n");

  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            url: `https://cab-formations.fr/blog/${article.slug}`,
            author: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
            publisher: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
              logo: {
                "@type": "ImageObject",
                url: "https://cab-formations.fr/images/logo-cab-formations.png",
              },
            },
            datePublished: "2024-01-15",
            dateModified: "2026-01-10",
            mainEntityOfPage: `https://cab-formations.fr/blog/${article.slug}`,
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-4">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-800"}`}
            >
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-6">{article.title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{article.excerpt}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[var(--cab-gold)]">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[var(--cab-gold)]">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--cab-blue)] font-medium">{article.title}</span>
          </nav>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="prose max-w-none">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-6 text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Share / Back */}
                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[var(--cab-blue)] font-semibold hover:text-[var(--cab-gold)] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Retour au blog
                  </Link>
                  <Link href="/demande-de-devis" className="btn-gold text-sm">
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="card bg-[var(--cab-blue)] text-white">
                <h3 className="text-xl font-bold mb-3">Devenez chauffeur VTC</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Rejoignez les +50 000 stagiaires form&eacute;s par CAB Formations.
                  Pr&eacute;parez votre examen VTC avec le leader fran&ccedil;ais.
                </p>
                <Link href="/demande-de-devis" className="btn-gold text-sm w-full text-center">
                  Demander un devis gratuit
                </Link>
                <div className="mt-3 text-center">
                  <a
                    href="tel:+33176380017"
                    className="text-[var(--cab-gold)] text-sm font-semibold"
                  >
                    01 76 38 00 17
                  </a>
                </div>
              </div>

              {/* Recent Articles */}
              <div className="card">
                <h3 className="text-lg font-bold text-[var(--cab-blue)] mb-4">
                  Articles r&eacute;cents
                </h3>
                <div className="space-y-4">
                  {recentArticles.map((recent) => (
                    <Link
                      key={recent.slug}
                      href={`/blog/${recent.slug}`}
                      className="block group no-underline"
                    >
                      <div className="mb-1">
                        <span
                          className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[recent.category] || "bg-gray-100 text-gray-800"}`}
                        >
                          {recent.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-[var(--cab-blue)] group-hover:text-[var(--cab-gold)] transition-colors leading-tight">
                        {recent.title}
                      </h4>
                      {recent !== recentArticles[recentArticles.length - 1] && (
                        <div className="border-b border-gray-100 mt-3" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Formations Card */}
              <div className="card">
                <h3 className="text-lg font-bold text-[var(--cab-blue)] mb-4">
                  Nos formations VTC
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/examen-vtc-theorique"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--cab-gold)] transition-colors no-underline"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--cab-gold)] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Formation VTC Th&eacute;orique
                  </Link>
                  <Link
                    href="/examen-vtc-pratique"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--cab-gold)] transition-colors no-underline"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--cab-gold)] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Formation VTC Pratique
                  </Link>
                  <Link
                    href="/formation-vtc-continue-obligatoire"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--cab-gold)] transition-colors no-underline"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--cab-gold)] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Formation Continue VTC
                  </Link>
                  <Link
                    href="/formation-taxi-initial"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--cab-gold)] transition-colors no-underline"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--cab-gold)] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Formation Taxi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
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
