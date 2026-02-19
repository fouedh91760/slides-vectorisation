import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formations } from "@/data/formations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return formations.map((formation) => ({
    slug: formation.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);

  if (!formation) {
    return { title: "Formation introuvable" };
  }

  return {
    title: `${formation.title} | CAB Formations`,
    description: formation.description.substring(0, 160),
    alternates: {
      canonical: `https://cab-formations.fr/class/${formation.slug}`,
    },
    openGraph: {
      title: `${formation.title} - ${formation.price}`,
      description: formation.subtitle,
      url: `https://cab-formations.fr/class/${formation.slug}`,
      type: "website",
    },
  };
}

export default async function FormationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);

  if (!formation) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: formation.title,
    description: formation.subtitle,
    brand: {
      "@type": "Organization",
      name: "CAB Formations",
    },
    offers: {
      "@type": "Offer",
      price: formation.priceNumeric,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `https://cab-formations.fr/class/${formation.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "1216",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">{formation.title}</h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {formation.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formation.duration}
            </span>
            <span className="inline-flex items-center gap-2 bg-[var(--cab-gold)] rounded-full px-5 py-2 text-sm font-bold">
              {formation.price}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {formation.format}
            </span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Presentation de la formation</h2>
          <div className="mt-8 space-y-4">
            {formation.description.split("\n").map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Programme de la formation</h2>
          <p className="section-subtitle">
            Decouvrez le contenu detaille de chaque module de la formation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {formation.program.map((module, i) => (
              <div key={i} className="card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-[var(--cab-gold)] text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-[var(--cab-blue)] text-lg">{module.title}</h3>
                </div>
                <ul className="space-y-2 ml-11">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-[var(--cab-gold)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Les avantages de cette formation</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {formation.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-[var(--cab-gray)] rounded-lg p-4">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-xl font-bold text-[var(--cab-blue)] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Prerequis
              </h2>
              <p className="text-gray-600 leading-relaxed">{formation.prerequisites}</p>
            </div>
            <div className="card">
              <h2 className="text-xl font-bold text-[var(--cab-blue)] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Objectifs
              </h2>
              <p className="text-gray-600 leading-relaxed">{formation.objectives}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="card border-2 border-[var(--cab-gold)] text-center">
            <div className="text-sm font-semibold text-[var(--cab-gold)] uppercase tracking-wide mb-2">
              {formation.format} &middot; {formation.duration}
            </div>
            <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-2">{formation.title}</h2>
            <div className="price-tag text-4xl mb-2">{formation.price}</div>
            <p className="text-sm text-gray-500 mb-6">
              Financement possible : CPF, Pole Emploi, DIF. Reglement en 3X sans frais.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/demande-de-devis" className="btn-gold text-lg text-center">
                Demander un devis gratuit
              </Link>
              <a href="tel:+33176380017" className="btn-blue text-center">
                Appeler le 01 76 38 00 17
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Pret a commencer votre formation ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Rejoignez les +50 000 stagiaires formes par CAB Formations. Nos conseillers sont disponibles pour repondre a toutes vos questions.
          </p>
          <Link href="/demande-de-devis" className="btn-gold text-lg">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
