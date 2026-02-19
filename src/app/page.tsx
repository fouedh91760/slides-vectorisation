import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StepTabs from "@/components/StepTabs";

export const metadata: Metadata = {
  title: "Formation VTC | CAB Formations : Leader de la Formation VTC",
  description:
    "Formation VTC agréée. Obtenez votre carte professionnelle VTC en passant l'examen VTC et devenez chauffeur VTC. Formation VTC en cours du jour ou cours du soir ainsi qu'à distance.",
  alternates: { canonical: "https://cab-formations.fr" },
  openGraph: {
    title: "Formation VTC | CAB Formations : Leader de la Formation VTC",
    description:
      "Formation VTC agréée. Obtenez votre carte professionnelle VTC avec CAB Formations.",
    url: "https://cab-formations.fr",
  },
};

const formations = [
  { title: "Théorie 1 Semaine", duration: "35h", price: "499", image: "/images/formations/th1.png", href: "/class/theorie-1-semaine" },
  { title: "Théorie 2 Semaines", duration: "70h", price: "1 690", image: "/images/formations/th2.png", href: "/class/theorie-2-semaines" },
  { title: "Formation Complète", duration: "105h", price: "2 490", image: "/images/formations/th3.png", href: "/class/formation-complete" },
  { title: "Formation Pratique VTC", duration: "70h", price: "159", image: "/images/formations/pr.png", href: "/class/formation-pratique-vtc" },
  { title: "E-Learning Complet", duration: "À votre rythme", price: "", image: "/images/formations/ecomplet.png", href: "/class/e-learning-complet" },
  { title: "Formation Continue", duration: "14h", price: "399", image: "/images/formations/fcontinue.png", href: "/class/formation-continue" },
];

const medias = [
  { name: "Automoto", file: "automoto.png", url: "https://www.auto-moto.com/dossier/cab-formations-methode-reussir-examen-vtc-154356.html" },
  { name: "France 2", file: "france2.png", url: "https://www.francetvinfo.fr" },
  { name: "France 3", file: "france3.png", url: "https://www.francetvinfo.fr" },
  { name: "Canal Plus", file: "canal.png", url: "https://www.canalplus.com" },
  { name: "France Bleu", file: "france-bleu.png", url: "https://www.francebleu.fr" },
  { name: "Slate", file: "slate.png", url: "http://www.slate.fr/story/117807/uber-banlieue" },
  { name: "Rue89", file: "rue89.png", url: "https://www.nouvelobs.com/rue89" },
];

const financements = [
  "Règlement en 3X sans frais",
  "Pôle Emploi",
  "DIF",
  "CPF",
  "Mission Locale",
  "Conseil Régional",
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://cab-formations.fr/",
            logo: "https://cab-formations.fr/sites/default/files/CAB-formations.png",
            sameAs: [
              "https://www.facebook.com/cabformations.fr/",
              "https://fr.linkedin.com/company/cabformations",
              "https://www.youtube.com/channel/UCf3-UsEY-ulxXTXr0MIljWg",
              "https://www.instagram.com/cab_formations/",
            ],
          }),
        }}
      />

      {/* Hero / Slideshow with Steps */}
      <section className="w-full">
        <StepTabs />
      </section>

      {/* Réseau de centres */}
      <section className="py-16" id="reseau">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">
            Un réseau de centres de formation VTC agréés partout en France
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-10">
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-6">
                <div>
                  <div className="stat-number">12</div>
                  <div className="text-sm text-gray-500 font-medium uppercase">Centres de formation</div>
                </div>
                <div>
                  <div className="stat-number">+ de 50K</div>
                  <div className="text-sm text-gray-500 font-medium uppercase">Stagiaires formés</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                CAB formations est un acteur incontournable de la formation VTC. Nous disposons de
                centres de formation VTC à Paris, Bordeaux, Lille, Toulouse, Strasbourg, Nantes, Lyon
                et proposons également notre plateforme de e-learning.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/centres-de-formation" className="btn-primary text-sm">
                  Trouver un centre
                </Link>
                <Link href="/examen-vtc-theorique" className="btn-outline-primary text-sm">
                  Découvrir le e-learning
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/backgrounds/map.gif"
                alt="Carte des centres de formation VTC en France"
                width={480}
                height={480}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formations / Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Formation VTC Les Prix</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {formations.map((f, i) => (
              <Link key={i} href={f.href} className="formation-card group block">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={400}
                  height={200}
                  className="formation-img group-hover:scale-105 transition-transform duration-300"
                />
                <div className="formation-body text-center">
                  <h3 className="font-bold text-[var(--cab-dark)] mb-1">{f.title}</h3>
                  <div className="text-sm text-gray-500 mb-1">{f.duration}</div>
                  {f.price && <div className="price-tag">{f.price}€</div>}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/demande-de-devis" className="btn-primary text-base">
              DEVIS GRATUIT
            </Link>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section className="py-16 financement-bg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Les aides au financement</h2>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {financements.map((f) => (
                <div key={f} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-[var(--cab-border)]">
                  <svg className="w-5 h-5 text-[var(--cab-green)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-[var(--cab-dark)]">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Link href="/blog/financer-sa-formation-vtc" className="btn-primary text-sm">
                Plus d&apos;informations
              </Link>
              <Link href="/demande-de-devis" className="btn-primary text-sm">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Démarche Qualité */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Démarche Qualité</h2>
          <p className="section-subtitle">
            Actions de formations et Centre d&apos;apprentissage
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-[var(--cab-bg)] rounded-lg px-8 py-6 border border-[var(--cab-border)]">
              <Image src="/images/certifications/qualiopi-2024.jpg" alt="Certification QUALIOPI" width={180} height={80} className="object-contain" />
            </div>
            <div className="bg-[var(--cab-bg)] rounded-lg px-8 py-6 border border-[var(--cab-border)]">
              <Image src="/images/certifications/datadock-original.png" alt="Certification Datadock" width={180} height={80} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Médias */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Ils parlent de nous</h2>
          <div className="flex flex-wrap justify-center gap-5 items-center mt-8">
            {medias.map((m) => (
              <a
                key={m.name}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg px-5 py-3 border border-[var(--cab-border)] hover:shadow-md transition-shadow"
              >
                <Image src={`/images/medias/${m.file}`} alt={m.name} width={100} height={40} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Réseaux sociaux */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title">Plus d&apos;actu ? Suivez-nous !</h2>
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://www.facebook.com/cabformations.fr/" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 bg-[#3b5998] hover:bg-[#2d4373] rounded-full flex items-center justify-center text-white transition-all hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="https://twitter.com/cabformations/" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1da1f2] hover:bg-[#1a91da] rounded-full flex items-center justify-center text-white transition-all hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
