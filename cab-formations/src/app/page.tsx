import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation VTC | CAB Formations : Leader de la Formation VTC",
  description:
    "CAB Formations, leader de la formation VTC en France depuis 2015. Préparez votre examen VTC théorique et pratique. 12 centres, +50 000 stagiaires formés, certifié QUALIOPI. À partir de 499€.",
  alternates: { canonical: "https://cab-formations.fr" },
  openGraph: {
    title: "Formation VTC | CAB Formations : Leader de la Formation VTC",
    description:
      "Préparez votre examen VTC avec le leader français. 12 centres, +50 000 stagiaires, certifié QUALIOPI.",
    url: "https://cab-formations.fr",
  },
};

const steps = [
  {
    num: "1",
    title: "JE VEUX M'INSCRIRE À L'EXAMEN VTC",
    desc: "Préparez votre dossier : CNI, permis de conduire (+3 ans), justificatif de domicile, photo d'identité.",
  },
  {
    num: "2",
    title: "JE PASSE L'EXAMEN VTC THÉORIQUE",
    desc: "7 épreuves théoriques en tronc commun avec l'examen Taxi. Note minimale : 10/20.",
  },
  {
    num: "3",
    title: "JE PASSE L'EXAMEN VTC PRATIQUE",
    desc: "Épreuve de conduite professionnelle avec 2 examinateurs. Note minimale : 12/20.",
  },
  {
    num: "4",
    title: "J'AI RÉUSSI MON EXAMEN",
    desc: "Obtenez votre carte professionnelle VTC et créez votre entreprise.",
  },
];

const formations = [
  {
    title: "Formation VTC Théorique en Classe",
    duration: "35 heures",
    price: "499",
    desc: "Formation intensive sur 1 semaine pour préparer les 7 épreuves de l'examen théorique VTC.",
    href: "/examen-vtc-theorique",
    popular: false,
  },
  {
    title: "Formation VTC Théorique en Classe",
    duration: "70 heures",
    price: "1 690",
    desc: "Formation complète sur 2 semaines avec approfondissement de toutes les matières de l'examen VTC.",
    href: "/examen-vtc-theorique",
    popular: true,
  },
  {
    title: "Formation VTC Théorique en Classe",
    duration: "105 heures",
    price: "2 490",
    desc: "Formation premium sur 3 semaines avec accompagnement personnalisé et examens blancs.",
    href: "/examen-vtc-theorique",
    popular: false,
  },
  {
    title: "Formation VTC Théorique E-learning",
    duration: "À votre rythme",
    price: "499",
    desc: "Accès 24/7 à la plateforme e-learning avec cours vidéo, QCM et examens blancs.",
    href: "/examen-vtc-theorique",
    popular: false,
  },
  {
    title: "Formation VTC Pratique",
    duration: "70 heures",
    price: "159",
    desc: "Préparation à l'épreuve pratique avec véhicule double commande et formateurs expérimentés.",
    href: "/examen-vtc-pratique",
    popular: false,
  },
  {
    title: "Formation VTC Continue",
    duration: "14 heures",
    price: "399",
    desc: "Formation obligatoire tous les 5 ans pour renouveler votre carte professionnelle VTC.",
    href: "/formation-vtc-continue-obligatoire",
    popular: false,
  },
];

const centres = [
  { ville: "Bagnolet", adresse: "151, Avenue Gallieni, 93170" },
  { ville: "Herblay", adresse: "5 voie de l'Olivier, 95220" },
  { ville: "Villabé", adresse: "7 rue des Petits Champs, 91100" },
  { ville: "Bois-d'Arcy", adresse: "9 Rue René Clair, 78390" },
  { ville: "Seclin (Lille)", adresse: "1153 Av. de l'Épinette, 59113" },
  { ville: "Vénissieux (Lyon)", adresse: "7 Rue Eugène Hénaff, 69200" },
];

const financements = [
  "Règlement en 3X sans frais",
  "Pôle Emploi",
  "CPF (Compte Personnel de Formation)",
  "DIF (Droit Individuel à la Formation)",
  "Mission Locale",
  "Conseil Régional",
];

const medias = ["Automoto", "France 2", "France 3", "Canal Plus", "France Bleu", "Slate", "Rue89"];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD for courses */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: formations.map((f, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Course",
                name: f.title,
                description: f.desc,
                provider: {
                  "@type": "Organization",
                  name: "CAB Formations",
                  url: "https://cab-formations.fr",
                },
                offers: {
                  "@type": "Offer",
                  price: f.price.replace(/\s/g, ""),
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">FORMATION VTC</h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Leader de la Formation VTC en France depuis 2015
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            +50 000 stagiaires formés | 12 centres en France | Certifié QUALIOPI | Note 4.7/5
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis" className="btn-gold text-lg">
              Demandez un devis gratuit
            </Link>
            <Link href="/examen-vtc-theorique" className="btn-blue text-lg border border-white/20">
              Découvrir nos formations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="stat-number">12</div>
            <div className="text-sm text-gray-600 font-medium">Centres de formation</div>
          </div>
          <div>
            <div className="stat-number">+50K</div>
            <div className="text-sm text-gray-600 font-medium">Stagiaires formés</div>
          </div>
          <div>
            <div className="stat-number">4.7/5</div>
            <div className="text-sm text-gray-600 font-medium">Note moyenne (1216 avis)</div>
          </div>
          <div>
            <div className="stat-number">2015</div>
            <div className="text-sm text-gray-600 font-medium">Année de création</div>
          </div>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Comment devenir chauffeur VTC ?</h2>
          <p className="section-subtitle">
            Depuis 2017, l&apos;accès à la profession de chauffeur VTC nécessite la réussite d&apos;un
            examen composé de deux épreuves : théorique et pratique.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card text-center">
                <div className="w-12 h-12 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-sm">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations / Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Nos formations VTC</h2>
          <p className="section-subtitle">
            Des formations VTC en classe, à distance ou en mixte, adaptées à votre rythme et votre
            budget. Financement possible via Pôle Emploi, CPF, DIF.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((f, i) => (
              <div
                key={i}
                className={`card relative ${f.popular ? "border-2 border-[var(--cab-gold)]" : "border border-gray-100"}`}
              >
                {f.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--cab-gold)] text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAIRE
                  </div>
                )}
                <h3 className="font-bold text-[var(--cab-blue)] mb-1">{f.title}</h3>
                <div className="text-sm text-gray-500 mb-3">{f.duration}</div>
                <div className="price-tag mb-3">{f.price}€</div>
                <p className="text-sm text-gray-600 mb-4">{f.desc}</p>
                <Link href={f.href} className="btn-gold text-sm w-full text-center">
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">
            Un réseau de centres de formation VTC agréés partout en France
          </h2>
          <p className="section-subtitle">
            Retrouvez nos 12 centres de formation VTC à Paris, Lyon, Lille, Bordeaux, Toulouse,
            Strasbourg, Nantes et dans toute la France.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {centres.map((c) => (
              <div key={c.ville} className="card flex items-start gap-3">
                <div className="w-10 h-10 bg-[var(--cab-blue)] rounded-lg flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[var(--cab-blue)]">{c.ville}</div>
                  <div className="text-sm text-gray-500">{c.adresse}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/centres-de-formation" className="btn-blue">
              Voir tous nos centres
            </Link>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Les aides au financement</h2>
          <p className="section-subtitle">
            Plusieurs solutions de financement existent pour votre formation VTC. Contactez
            gratuitement un CAB&apos;Expert au{" "}
            <a href="tel:+33176380017" className="text-[var(--cab-gold)] font-semibold">
              01 76 38 00 17
            </a>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {financements.map((f) => (
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

      {/* Quality / Media */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Ils parlent de nous</h2>
          <p className="section-subtitle">
            CAB Formations s&apos;engage dans une démarche qualité et est certifié QUALIOPI. Notre
            expertise est reconnue par les médias nationaux.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {medias.map((m) => (
              <div
                key={m}
                className="bg-white rounded-lg px-6 py-4 shadow-sm text-gray-600 font-semibold text-lg"
              >
                {m}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-green-700 font-semibold">Certifié QUALIOPI</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prêt à devenir chauffeur VTC ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Rejoignez les +50 000 stagiaires qui nous ont fait confiance. Demandez votre devis
            gratuit et commencez votre formation dès maintenant.
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
