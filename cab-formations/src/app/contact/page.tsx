import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | CAB Formations",
  description:
    "Contactez CAB Formations par téléphone, email ou en vous rendant dans l'un de nos 12 centres. Nos conseillers sont disponibles du lundi au vendredi de 9h à 18h.",
  alternates: { canonical: "https://cab-formations.fr/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">CONTACTEZ-NOUS</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Une question sur nos formations VTC ? Notre équipe est à votre disposition
            pour vous accompagner dans votre projet professionnel.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--cab-gold)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] text-lg mb-2">Téléphone</h3>
              <a
                href="tel:+33176380017"
                className="text-[var(--cab-gold)] font-semibold text-xl hover:underline"
              >
                01 76 38 00 17
              </a>
              <p className="text-sm text-gray-500 mt-2">Lundi - Vendredi, 9h - 18h</p>
            </div>

            {/* Email Card */}
            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--cab-blue)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] text-lg mb-2">Email</h3>
              <a
                href="mailto:contact@cab-formations.fr"
                className="text-[var(--cab-gold)] font-semibold text-lg hover:underline"
              >
                contact@cab-formations.fr
              </a>
              <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
            </div>

            {/* Address Card */}
            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--cab-blue)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h3 className="font-bold text-[var(--cab-blue)] text-lg mb-2">Adresse</h3>
              <p className="text-gray-600">
                151 avenue Gallieni, Bât C<br />
                93170 Bagnolet
              </p>
              <p className="text-sm text-gray-500 mt-2">Métro Gallieni (Ligne 3)</p>
            </div>
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="section-title text-left !mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="section-title text-left !mb-6">Nous trouver</h2>
              <div className="card h-[400px] lg:h-full min-h-[400px] flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--cab-blue)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium mb-2">Carte interactive</p>
                  <p className="text-sm text-gray-400">
                    151 avenue Gallieni, Bât C<br />
                    93170 Bagnolet
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=151+avenue+Gallieni+93170+Bagnolet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-blue mt-4 text-sm"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à démarrer votre formation VTC ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Demandez votre devis gratuit et personnalisé. Un conseiller vous rappelle
            sous 24h pour répondre à toutes vos questions.
          </p>
          <Link href="/demande-de-devis" className="btn-gold text-lg">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
