import type { Metadata } from "next";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";

export const metadata: Metadata = {
  title: "Demande de Devis Gratuit | Formation VTC",
  description:
    "Demandez un devis gratuit pour votre formation VTC. CAB Formations vous accompagne dans votre projet professionnel. Réponse sous 24h.",
  alternates: { canonical: "https://cab-formations.fr/demande-de-devis" },
};

export default function DemandeDeDevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            DEMANDEZ UN DEVIS GRATUIT
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez votre devis personnalisé
            sous 24h. Un conseiller CAB Formations vous contactera pour répondre à
            toutes vos questions.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <DevisForm />
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--cab-gold)] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--cab-blue)] mb-1">Téléphone</h3>
                    <a
                      href="tel:+33176380017"
                      className="text-[var(--cab-gold)] font-semibold text-lg hover:underline"
                    >
                      01 76 38 00 17
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Appel gratuit</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--cab-blue)] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--cab-blue)] mb-1">Email</h3>
                    <a
                      href="mailto:contact@cab-formations.fr"
                      className="text-[var(--cab-gold)] font-semibold hover:underline"
                    >
                      contact@cab-formations.fr
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="card">
                <div className="flex items-start gap-4">
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
                    <h3 className="font-bold text-[var(--cab-blue)] mb-1">Adresse</h3>
                    <p className="text-sm text-gray-600">
                      151 avenue Gallieni<br />
                      Bât C<br />
                      93170 Bagnolet
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--cab-gold)] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--cab-blue)] mb-1">Horaires d&apos;ouverture</h3>
                    <p className="text-sm text-gray-600">
                      Lundi - Vendredi<br />
                      9h - 18h
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="card bg-[var(--cab-blue)] text-white text-center">
                <h3 className="font-bold text-lg mb-2">Besoin d&apos;un conseil ?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Nos conseillers sont disponibles pour vous accompagner dans votre projet de formation VTC.
                </p>
                <a href="tel:+33176380017" className="btn-gold w-full text-center block">
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Pourquoi choisir CAB Formations ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            +50 000 stagiaires formés, 12 centres en France, certifié QUALIOPI.
            Financement possible via CPF, Pôle Emploi, paiement en 3X sans frais.
          </p>
          <Link href="/examen-vtc-theorique" className="btn-gold text-lg">
            Découvrir nos formations
          </Link>
        </div>
      </section>
    </>
  );
}
