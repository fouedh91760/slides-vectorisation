import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Centres de Formation VTC en France",
  description:
    "Retrouvez nos 12 centres de formation VTC et Taxi en France : Paris (Bagnolet), Herblay, Villabé, Bois-d'Arcy, Lille (Seclin), Lyon (Vénissieux), Évry, Strasbourg, Nice, Bordeaux, Toulouse, Nantes. Certifié QUALIOPI.",
  alternates: { canonical: "https://cab-formations.fr/centres-de-formation" },
  openGraph: {
    title: "Nos Centres de Formation VTC en France | CAB Formations",
    description:
      "12 centres de formation VTC et Taxi partout en France. Paris, Lyon, Lille, Bordeaux, Toulouse, Strasbourg, Nantes, Nice. Certifié QUALIOPI.",
    url: "https://cab-formations.fr/centres-de-formation",
  },
};

const centres = [
  {
    ville: "Bagnolet",
    region: "Île-de-France",
    adresse: "151, Avenue Gallieni",
    codePostal: "93170",
    telephone: "01 76 38 00 17",
    lat: 48.8678,
    lng: 2.4164,
  },
  {
    ville: "Herblay",
    region: "Île-de-France",
    adresse: "5 voie de l'Olivier",
    codePostal: "95220",
    telephone: "01 76 38 00 17",
    lat: 48.9933,
    lng: 2.1697,
  },
  {
    ville: "Villabé",
    region: "Île-de-France",
    adresse: "7 rue des Petits Champs",
    codePostal: "91100",
    telephone: "01 76 38 00 17",
    lat: 48.5944,
    lng: 2.4486,
  },
  {
    ville: "Bois-d'Arcy",
    region: "Île-de-France",
    adresse: "9 Rue René Clair",
    codePostal: "78390",
    telephone: "01 76 38 00 17",
    lat: 48.8003,
    lng: 2.0332,
  },
  {
    ville: "Seclin (Lille)",
    region: "Hauts-de-France",
    adresse: "1153 Av. de l'Épinette",
    codePostal: "59113",
    telephone: "01 76 38 00 17",
    lat: 50.5494,
    lng: 3.0347,
  },
  {
    ville: "Vénissieux (Lyon)",
    region: "Auvergne-Rhône-Alpes",
    adresse: "7 Rue Eugène Hénaff",
    codePostal: "69200",
    telephone: "01 76 38 00 17",
    lat: 45.7073,
    lng: 4.8864,
  },
  {
    ville: "Évry",
    region: "Île-de-France",
    adresse: "Centre de formation VTC",
    codePostal: "91000",
    telephone: "01 76 38 00 17",
    lat: 48.6244,
    lng: 2.4298,
  },
  {
    ville: "Strasbourg",
    region: "Grand Est",
    adresse: "Centre de formation VTC",
    codePostal: "67000",
    telephone: "01 76 38 00 17",
    lat: 48.5734,
    lng: 7.7521,
  },
  {
    ville: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    adresse: "Centre de formation VTC",
    codePostal: "06000",
    telephone: "01 76 38 00 17",
    lat: 43.7102,
    lng: 7.2620,
  },
  {
    ville: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    adresse: "Centre de formation VTC",
    codePostal: "33000",
    telephone: "01 76 38 00 17",
    lat: 44.8378,
    lng: -0.5792,
  },
  {
    ville: "Toulouse",
    region: "Occitanie",
    adresse: "Centre de formation VTC",
    codePostal: "31000",
    telephone: "01 76 38 00 17",
    lat: 43.6047,
    lng: 1.4442,
  },
  {
    ville: "Nantes",
    region: "Pays de la Loire",
    adresse: "Centre de formation VTC",
    codePostal: "44000",
    telephone: "01 76 38 00 17",
    lat: 47.2184,
    lng: -1.5536,
  },
];

function buildLocalBusinessJsonLd() {
  return centres.map((c) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `CAB Formations - ${c.ville}`,
    description: `Centre de formation VTC et Taxi à ${c.ville}. Préparation aux examens VTC et Taxi, certifié QUALIOPI.`,
    url: "https://cab-formations.fr/centres-de-formation",
    telephone: "+33176380017",
    address: {
      "@type": "PostalAddress",
      streetAddress: c.adresse,
      addressLocality: c.ville.replace(/ \(.*\)/, ""),
      postalCode: c.codePostal,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: c.lat,
      longitude: c.lng,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "CAB Formations",
      url: "https://cab-formations.fr",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  }));
}

export default function CentresDeFormationPage() {
  return (
    <>
      {/* JSON-LD for each LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalBusinessJsonLd()),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">NOS CENTRES DE FORMATION</h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            12 centres de formation VTC et Taxi partout en France
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Retrouvez le centre CAB Formations le plus proche de chez vous. Nos centres sont
            &eacute;quip&eacute;s pour vous accueillir dans les meilleures conditions.
          </p>
        </div>
      </section>

      {/* Île-de-France */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">&Icirc;le-de-France</h2>
          <p className="section-subtitle">
            Nos 5 centres en r&eacute;gion parisienne pour &ecirc;tre toujours proche de vous.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres
              .filter((c) => c.region === "Île-de-France")
              .map((c) => (
                <div key={c.ville} className="card flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--cab-blue)] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <h3 className="font-bold text-[var(--cab-blue)] text-lg">{c.ville}</h3>
                    <p className="text-sm text-gray-600 mt-1">{c.adresse}</p>
                    <p className="text-sm text-gray-600">{c.codePostal} {c.ville.replace(/ \(.*\)/, "")}</p>
                    <a
                      href={`tel:+33176380017`}
                      className="text-sm text-[var(--cab-gold)] font-semibold mt-2 inline-block"
                    >
                      {c.telephone}
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Régions */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Nos centres en r&eacute;gion</h2>
          <p className="section-subtitle">
            CAB Formations est pr&eacute;sent dans les principales m&eacute;tropoles fran&ccedil;aises pour vous
            accompagner au plus pr&egrave;s.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres
              .filter((c) => c.region !== "Île-de-France")
              .map((c) => (
                <div key={c.ville} className="card flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--cab-blue)] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <h3 className="font-bold text-[var(--cab-blue)] text-lg">{c.ville}</h3>
                    <p className="text-sm text-gray-600 mt-1">{c.adresse}</p>
                    <p className="text-sm text-gray-600">{c.codePostal} {c.ville.replace(/ \(.*\)/, "")}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href={`tel:+33176380017`}
                        className="text-sm text-[var(--cab-gold)] font-semibold"
                      >
                        {c.telephone}
                      </a>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 inline-block">{c.region}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Info pratique */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Informations pratiques</h2>
          <p className="section-subtitle">
            Tous nos centres sont accessibles en transports en commun et disposent de places de stationnement.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--cab-gold)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Horaires</h3>
              <p className="text-sm text-gray-600">Du lundi au vendredi<br />de 9h00 &agrave; 18h00</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--cab-gold)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">T&eacute;l&eacute;phone</h3>
              <p className="text-sm text-gray-600">
                <a href="tel:+33176380017" className="text-[var(--cab-gold)] font-semibold">
                  01 76 38 00 17
                </a>
              </p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--cab-gold)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Email</h3>
              <p className="text-sm text-gray-600">
                <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] font-semibold">
                  contact@cab-formations.fr
                </a>
              </p>
            </div>
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
            Tous nos centres sont certifi&eacute;s QUALIOPI, garantissant la qualit&eacute; de nos formations
            et l&apos;acc&egrave;s aux financements publics et mutualis&eacute;s.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trouvez votre centre de formation
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contactez-nous pour conna&icirc;tre les prochaines dates de session dans le centre le plus
            proche de chez vous. Nos conseillers vous accompagnent dans votre projet.
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
