import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendrier Examen VTC 2026",
  description:
    "Consultez le calendrier des examens VTC 2026 organisés par la Chambre des Métiers et de l'Artisanat. Dates des sessions mensuelles et inscription.",
  alternates: { canonical: "https://cab-formations.fr/calendrier-examen-vtc" },
};

const mois2026 = [
  { nom: "Janvier", dates: "13 - 14 janvier 2026" },
  { nom: "Février", dates: "10 - 11 février 2026" },
  { nom: "Mars", dates: "10 - 11 mars 2026" },
  { nom: "Avril", dates: "7 - 8 avril 2026" },
  { nom: "Mai", dates: "12 - 13 mai 2026" },
  { nom: "Juin", dates: "9 - 10 juin 2026" },
  { nom: "Juillet", dates: "7 - 8 juillet 2026" },
  { nom: "Août", dates: "Pas de session" },
  { nom: "Septembre", dates: "8 - 9 septembre 2026" },
  { nom: "Octobre", dates: "13 - 14 octobre 2026" },
  { nom: "Novembre", dates: "10 - 11 novembre 2026" },
  { nom: "Décembre", dates: "8 - 9 décembre 2026" },
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Retrouvez les dates des sessions d&apos;examen VTC 2026 organisées par la
            Chambre des Métiers et de l&apos;Artisanat (CMA) partout en France.
          </p>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Comment s&apos;organise l&apos;examen VTC ?</h2>
          <p className="section-subtitle">
            L&apos;examen VTC est organisé mensuellement par la Chambre des Métiers et de
            l&apos;Artisanat (CMA) dans chaque région. Il se compose de deux épreuves
            distinctes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Inscription à la CMA</h3>
              <p className="text-sm text-gray-600">
                Inscrivez-vous auprès de la Chambre des Métiers et de l&apos;Artisanat de
                votre département. Dossier à déposer au minimum 1 mois avant la session.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Épreuve théorique</h3>
              <p className="text-sm text-gray-600">
                7 épreuves QCM le premier jour. Note minimale de 10/20 requise à chaque
                épreuve pour être admissible à l&apos;épreuve pratique.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Épreuve pratique</h3>
              <p className="text-sm text-gray-600">
                Épreuve de conduite professionnelle le second jour, en présence de deux
                examinateurs. Note minimale de 12/20 requise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Sessions d&apos;examen VTC 2026</h2>
          <p className="section-subtitle">
            Les dates ci-dessous sont indicatives et peuvent varier selon les CMA
            régionales. Nous vous recommandons de vérifier auprès de votre CMA locale.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mois2026.map((m) => (
              <div
                key={m.nom}
                className={`card text-center ${
                  m.dates === "Pas de session"
                    ? "opacity-50"
                    : "hover:border-[var(--cab-gold)] border-2 border-transparent"
                }`}
              >
                <div className="text-sm font-semibold text-[var(--cab-gold)] uppercase tracking-wider mb-1">
                  2026
                </div>
                <h3 className="text-xl font-bold text-[var(--cab-blue)] mb-2">{m.nom}</h3>
                <p
                  className={`text-sm ${
                    m.dates === "Pas de session" ? "text-gray-400 italic" : "text-gray-600 font-medium"
                  }`}
                >
                  {m.dates}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-center">
            <p className="text-sm text-amber-800">
              <strong>Important :</strong> Ces dates sont données à titre indicatif.
              Les dates exactes peuvent varier selon les Chambres des Métiers et de
              l&apos;Artisanat régionales. Contactez votre CMA locale pour confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Préparez votre examen avec CAB Formations</h2>
          <p className="section-subtitle">
            Ne laissez rien au hasard. Nos formations vous préparent efficacement aux
            épreuves théoriques et pratiques de l&apos;examen VTC.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Théorique 35h</h3>
              <p className="text-sm text-gray-600 mb-3">
                Formation intensive sur 1 semaine pour préparer les 7 épreuves.
              </p>
              <span className="price-tag">499€</span>
            </div>
            <div className="card border-2 border-[var(--cab-gold)]">
              <div className="text-xs font-bold text-[var(--cab-gold)] mb-1">RECOMMANDÉ</div>
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Théorique 70h</h3>
              <p className="text-sm text-gray-600 mb-3">
                Formation complète sur 2 semaines avec approfondissement.
              </p>
              <span className="price-tag">1 690€</span>
            </div>
            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] mb-2">Théorique 105h</h3>
              <p className="text-sm text-gray-600 mb-3">
                Formation premium sur 3 semaines avec examens blancs.
              </p>
              <span className="price-tag">2 490€</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Inscrivez-vous dès maintenant
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Préparez votre examen VTC avec CAB Formations, leader de la formation
            VTC en France. +50 000 stagiaires formés depuis 2015.
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
