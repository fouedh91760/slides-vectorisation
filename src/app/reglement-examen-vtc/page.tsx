import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs et Règlement Examen VTC",
  description:
    "Découvrez les tarifs des formations VTC chez CAB Formations. À partir de 499€. Paiement en 3X sans frais, CPF, Pôle Emploi. Règlement de l'examen VTC.",
  alternates: { canonical: "https://cab-formations.fr/reglement-examen-vtc" },
};

const tarifs = [
  {
    formation: "Formation VTC Théorique 35h",
    duree: "35 heures (1 semaine)",
    prix: "499",
    details: "Formation intensive en classe",
  },
  {
    formation: "Formation VTC Théorique 70h",
    duree: "70 heures (2 semaines)",
    prix: "1 690",
    details: "Formation complète en classe",
    populaire: true,
  },
  {
    formation: "Formation VTC Théorique 105h",
    duree: "105 heures (3 semaines)",
    prix: "2 490",
    details: "Formation premium en classe",
  },
  {
    formation: "Formation VTC E-learning Théorique",
    duree: "À votre rythme",
    prix: "499",
    details: "Formation à distance, accès 24/7",
  },
  {
    formation: "Formation VTC Pratique",
    duree: "70 heures",
    prix: "159",
    details: "Préparation à l'épreuve pratique",
  },
  {
    formation: "Formation VTC E-learning Pratique",
    duree: "À votre rythme",
    prix: "399",
    details: "Préparation pratique à distance",
  },
  {
    formation: "Formation VTC Continue 14h",
    duree: "14 heures (2 jours)",
    prix: "399",
    details: "Renouvellement carte professionnelle",
  },
];

const paiements = [
  {
    titre: "Paiement en 3X sans frais",
    desc: "Réglez votre formation en 3 mensualités sans frais supplémentaires.",
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    titre: "CPF (Compte Personnel de Formation)",
    desc: "Utilisez vos droits CPF pour financer tout ou partie de votre formation VTC.",
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    titre: "Pôle Emploi",
    desc: "Les demandeurs d'emploi peuvent bénéficier d'une prise en charge par Pôle Emploi.",
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    titre: "DIF (Droit Individuel à la Formation)",
    desc: "Transférez vos heures DIF non utilisées sur votre CPF avant leur expiration.",
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titre: "Mission Locale",
    desc: "Les jeunes de 16 à 25 ans peuvent bénéficier d'un financement via la Mission Locale.",
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    titre: "Conseil Régional",
    desc: "Certaines régions proposent des aides spécifiques pour les formations professionnelles.",
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Retrouvez les tarifs de toutes nos formations VTC ainsi que le règlement
            de l&apos;examen VTC. Financement possible via CPF, Pôle Emploi ou en 3X sans frais.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Nos tarifs</h2>
          <p className="section-subtitle">
            Des formations adaptées à tous les budgets, avec des solutions de financement flexibles.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[var(--cab-blue)] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm">Formation</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">Durée</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">Détails</th>
                  <th className="text-right px-6 py-4 font-semibold text-sm">Prix</th>
                  <th className="text-center px-6 py-4 font-semibold text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((t, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${
                      t.populaire ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[var(--cab-blue)]">{t.formation}</span>
                        {t.populaire && (
                          <span className="bg-[var(--cab-gold)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            POPULAIRE
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{t.duree}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{t.details}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xl font-extrabold text-[var(--cab-blue)]">
                        {t.prix}€
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        href="/demande-de-devis"
                        className="btn-gold text-xs px-4 py-2"
                      >
                        Devis gratuit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Tous les prix sont TTC. Les tarifs peuvent être soumis à des conditions particulières.
            Contactez-nous pour plus d&apos;informations.
          </p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Solutions de financement</h2>
          <p className="section-subtitle">
            Plusieurs aides et solutions de financement existent pour vous permettre de réaliser
            votre projet de formation VTC.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paiements.map((p) => (
              <div key={p.titre} className="card">
                <div className="w-12 h-12 bg-[var(--cab-blue)] rounded-lg flex items-center justify-center text-white mb-4">
                  {p.icone}
                </div>
                <h3 className="font-bold text-[var(--cab-blue)] mb-2">{p.titre}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
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
            L&apos;examen VTC est organisé par les Chambres de Métiers et de l&apos;Artisanat (CMA).
            Voici les principales règles à connaître.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">
                Épreuve théorique
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  7 épreuves en tronc commun avec l&apos;examen Taxi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Durée : 3h50 au total
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Note minimale requise : 10/20 à chaque épreuve
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Matières : réglementation du transport, gestion, sécurité routière, français, anglais, développement commercial, réglementation nationale VTC
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  QCM et questions à réponses courtes
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">
                Épreuve pratique
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Épreuve de conduite sur route
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Durée : environ 30 à 40 minutes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Note minimale requise : 12/20
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  2 examinateurs présents dans le véhicule
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Évaluation de la conduite, du comportement professionnel et de la relation client
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">
                Conditions d&apos;inscription
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Être titulaire du permis B depuis au moins 3 ans
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Avoir un casier judiciaire vierge (bulletin n°2)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Fournir un certificat médical d&apos;aptitude
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Attestation de formation PSC1 (premiers secours)
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-[var(--cab-blue)] mb-3 text-lg">
                Pièces à fournir
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Carte nationale d&apos;identité ou passeport en cours de validité
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Permis de conduire catégorie B
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Justificatif de domicile de moins de 3 mois
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  3 photos d&apos;identité récentes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cab-gold)] font-bold mt-0.5">&#8226;</span>
                  Frais d&apos;inscription à l&apos;examen (environ 195€)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à vous lancer ?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Demandez votre devis gratuit et commencez votre formation VTC dès maintenant.
            Paiement en 3X sans frais disponible.
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
