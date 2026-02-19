import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs et Règlement Examen VTC",
  description:
    "Découvrez les tarifs des formations VTC chez CAB Formations. Formation théorique à partir de 499€, paiement en 3X sans frais, financement CPF et Pôle Emploi.",
  alternates: { canonical: "https://cab-formations.fr/reglement-examen-vtc" },
};

const formations = [
  {
    nom: "Formation VTC Théorique",
    duree: "35 heures",
    modalite: "En classe",
    prix: "499€",
    detail: "Formation intensive sur 1 semaine",
  },
  {
    nom: "Formation VTC Théorique",
    duree: "70 heures",
    modalite: "En classe",
    prix: "1 690€",
    detail: "Formation complète sur 2 semaines",
    populaire: true,
  },
  {
    nom: "Formation VTC Théorique",
    duree: "105 heures",
    modalite: "En classe",
    prix: "2 490€",
    detail: "Formation premium sur 3 semaines",
  },
  {
    nom: "Formation VTC Théorique E-learning",
    duree: "À votre rythme",
    modalite: "E-learning",
    prix: "499€",
    detail: "Accès plateforme 24/7",
  },
  {
    nom: "Formation VTC Pratique",
    duree: "70 heures",
    modalite: "En présentiel",
    prix: "159€",
    detail: "Préparation épreuve pratique",
  },
  {
    nom: "Formation VTC Pratique E-learning",
    duree: "À votre rythme",
    modalite: "E-learning",
    prix: "399€",
    detail: "Préparation à distance",
  },
  {
    nom: "Formation VTC Continue",
    duree: "14 heures",
    modalite: "En classe",
    prix: "399€",
    detail: "Obligatoire tous les 5 ans",
  },
];

const paiements = [
  {
    titre: "Paiement en 3X sans frais",
    desc: "Réglez votre formation en 3 mensualités sans frais supplémentaires. Premier versement à l'inscription.",
  },
  {
    titre: "CPF (Compte Personnel de Formation)",
    desc: "Utilisez votre solde CPF pour financer tout ou partie de votre formation VTC. Nos formations sont éligibles au CPF.",
  },
  {
    titre: "Pôle Emploi (France Travail)",
    desc: "Si vous êtes demandeur d'emploi, Pôle Emploi peut prendre en charge votre formation. Nous vous accompagnons dans vos démarches.",
  },
  {
    titre: "DIF (Droit Individuel à la Formation)",
    desc: "Vos droits DIF acquis avant 2015 peuvent être mobilisés pour financer votre formation.",
  },
  {
    titre: "Mission Locale",
    desc: "Pour les jeunes de 16 à 25 ans, la Mission Locale peut financer votre formation VTC.",
  },
  {
    titre: "Conseil Régional",
    desc: "Selon votre région, des aides complémentaires peuvent être mobilisées pour votre formation.",
  },
];

export default function ReglementExamenVtcPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            TARIFS ET RÈGLEMENT DE L&apos;EXAMEN VTC
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Retrouvez l&apos;ensemble de nos tarifs de formation VTC et les différentes
            options de financement disponibles pour votre projet professionnel.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Nos tarifs de formation</h2>
          <p className="section-subtitle">
            Des formations adaptées à tous les budgets, avec des possibilités de
            financement pour chaque situation.
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[var(--cab-blue)] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Formation</th>
                  <th className="text-left px-6 py-4 font-semibold">Durée</th>
                  <th className="text-left px-6 py-4 font-semibold">Modalité</th>
                  <th className="text-left px-6 py-4 font-semibold">Détail</th>
                  <th className="text-right px-6 py-4 font-semibold">Tarif</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {formations.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 transition-colors hover:bg-[var(--cab-gray)] ${
                      f.populaire ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[var(--cab-blue)]">{f.nom}</span>
                        {f.populaire && (
                          <span className="bg-[var(--cab-gold)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            POPULAIRE
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{f.duree}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{f.modalite}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{f.detail}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xl font-extrabold text-[var(--cab-blue)]">
                        {f.prix}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link href="/demande-de-devis" className="btn-gold text-sm whitespace-nowrap">
                        Devis gratuit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {formations.map((f, i) => (
              <div
                key={i}
                className={`card ${f.populaire ? "border-2 border-[var(--cab-gold)]" : "border border-gray-100"} relative`}
              >
                {f.populaire && (
                  <div className="absolute -top-3 left-4 bg-[var(--cab-gold)] text-white text-xs font-bold px-3 py-0.5 rounded-full">
                    POPULAIRE
                  </div>
                )}
                <h3 className="font-bold text-[var(--cab-blue)] mb-1">{f.nom}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <span>{f.duree}</span>
                  <span>-</span>
                  <span>{f.modalite}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{f.detail}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-[var(--cab-blue)]">{f.prix}</span>
                  <Link href="/demande-de-devis" className="btn-gold text-sm">
                    Devis gratuit
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Tous les prix sont indiqués TTC. Les tarifs peuvent être modifiés sans préavis.
              Contactez-nous pour obtenir un devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Options de financement</h2>
          <p className="section-subtitle">
            Plusieurs solutions de financement sont disponibles pour rendre votre
            formation VTC accessible. Contactez un conseiller pour étudier votre dossier.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paiements.map((p, i) => (
              <div key={i} className="card">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--cab-blue)] mb-1">{p.titre}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Rules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Règlement de l&apos;examen VTC</h2>
          <p className="section-subtitle">
            L&apos;examen VTC est organisé par la Chambre des Métiers et de l&apos;Artisanat (CMA).
            Voici les principales règles à connaître.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] text-lg mb-3">Épreuve théorique</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>7 épreuves en tronc commun avec l&apos;examen Taxi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>QCM et questions à réponses courtes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Note minimale requise : 10/20 à chaque épreuve</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Note éliminatoire en dessous de 6/20</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Durée totale : 3h50</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] text-lg mb-3">Épreuve pratique</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Épreuve de conduite professionnelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Deux examinateurs présents dans le véhicule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Note minimale requise : 12/20</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Durée : environ 30 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">-</span>
                  <span>Accessible après réussite de l&apos;épreuve théorique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d&apos;aide pour choisir votre formation ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contactez gratuitement un conseiller CAB Formations pour obtenir un devis
            personnalisé et étudier vos options de financement.
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
