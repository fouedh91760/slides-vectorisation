import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendrier Examen VTC 2026",
  description:
    "Consultez le calendrier des examens VTC 2026 organisés par les CMA. Dates des sessions, inscription et préparation avec CAB Formations.",
  alternates: { canonical: "https://cab-formations.fr/calendrier-examen-vtc" },
};

const mois2026 = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export default function CalendrierExamenVtcPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            CALENDRIER DES EXAMENS VTC
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Retrouvez toutes les dates des sessions d&apos;examen VTC 2026 organisées
            par les Chambres de Métiers et de l&apos;Artisanat (CMA) dans toute la France.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--cab-blue)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Sessions mensuelles</h3>
              <p className="text-sm text-gray-600">
                Les examens VTC sont organisés chaque mois par les CMA dans les principales
                villes de France.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--cab-blue)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Inscription CMA</h3>
              <p className="text-sm text-gray-600">
                L&apos;inscription à l&apos;examen se fait directement auprès de la CMA de votre
                département. Les places sont limitées.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--cab-blue)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Anticipez</h3>
              <p className="text-sm text-gray-600">
                Inscrivez-vous au moins 2 mois avant la date d&apos;examen souhaitée pour
                garantir votre place et avoir le temps de vous préparer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Calendrier 2026</h2>
          <p className="section-subtitle">
            Les dates exactes sont communiquées par chaque CMA. Contactez-nous pour connaître
            les prochaines sessions disponibles près de chez vous.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mois2026.map((mois, index) => {
              const isPast = index < 1; // January is past (we're in February 2026)
              return (
                <div
                  key={mois}
                  className={`card text-center ${
                    isPast ? "opacity-50" : ""
                  }`}
                >
                  <div
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      isPast ? "text-gray-400" : "text-[var(--cab-gold)]"
                    }`}
                  >
                    2026
                  </div>
                  <h3
                    className={`text-lg font-bold mb-3 ${
                      isPast ? "text-gray-400" : "text-[var(--cab-blue)]"
                    }`}
                  >
                    {mois}
                  </h3>
                  <div
                    className={`text-sm mb-3 ${
                      isPast ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {isPast ? (
                      <span>Session terminée</span>
                    ) : (
                      <span>Session prévue</span>
                    )}
                  </div>
                  <div
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                      isPast
                        ? "bg-gray-200 text-gray-500"
                        : index === 1
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-[var(--cab-blue)]"
                    }`}
                  >
                    {isPast
                      ? "Passé"
                      : index === 1
                        ? "En cours"
                        : "À venir"}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-amber-600 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="font-bold text-amber-800 mb-1">Information importante</h4>
                <p className="text-sm text-amber-700">
                  Les dates précises des sessions d&apos;examen sont fixées par chaque CMA
                  départementale et peuvent varier. Les sessions se tiennent généralement
                  une fois par mois. Nous vous recommandons de vous inscrire le plus tôt
                  possible car les places sont limitées. Contactez un CAB&apos;Expert au{" "}
                  <a href="tel:+33176380017" className="font-semibold underline">
                    01 76 38 00 17
                  </a>{" "}
                  pour connaître les prochaines dates disponibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Préparez votre examen avec CAB Formations</h2>
          <p className="section-subtitle">
            Ne laissez rien au hasard. Nos formations vous préparent efficacement à l&apos;examen VTC
            avec un taux de réussite exceptionnel.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-gold)] mb-2">35h</div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-1">Formation Intensive</h3>
              <p className="text-sm text-gray-600 mb-3">1 semaine - À partir de 499€</p>
              <Link href="/examen-vtc-theorique" className="text-sm text-[var(--cab-gold)] font-semibold hover:underline">
                En savoir plus
              </Link>
            </div>

            <div className="card text-center border-2 border-[var(--cab-gold)]">
              <div className="text-xs font-bold text-[var(--cab-gold)] uppercase tracking-wider mb-1">
                Recommandé
              </div>
              <div className="text-3xl font-extrabold text-[var(--cab-gold)] mb-2">70h</div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-1">Formation Complète</h3>
              <p className="text-sm text-gray-600 mb-3">2 semaines - 1 690€</p>
              <Link href="/examen-vtc-theorique" className="text-sm text-[var(--cab-gold)] font-semibold hover:underline">
                En savoir plus
              </Link>
            </div>

            <div className="card text-center">
              <div className="text-3xl font-extrabold text-[var(--cab-gold)] mb-2">105h</div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-1">Formation Premium</h3>
              <p className="text-sm text-gray-600 mb-3">3 semaines - 2 490€</p>
              <Link href="/examen-vtc-theorique" className="text-sm text-[var(--cab-gold)] font-semibold hover:underline">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Inscrivez-vous à une formation VTC
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Préparez votre examen VTC avec le leader de la formation en France.
            Demandez votre devis gratuit dès maintenant.
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
