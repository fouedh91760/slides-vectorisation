import type { Metadata } from "next";
import UserLoginForm from "@/components/UserLoginForm";

export const metadata: Metadata = {
  title: "Mes Cours | Espace E-learning",
  description:
    "Accédez à votre espace e-learning CAB Formations. Suivez vos cours VTC en ligne, consultez votre progression et accédez à vos ressources de formation.",
};

export default function UserPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">ESPACE E-LEARNING</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connectez-vous pour accéder à vos formations, suivre votre progression et
            consulter vos résultats.
          </p>
        </div>
      </section>

      {/* Login section */}
      <section className="py-16 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Login form */}
            <div>
              <UserLoginForm />
            </div>

            {/* Right: Info about e-learning */}
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-xl font-bold text-[var(--cab-blue)] mb-4">
                  Votre plateforme de formation en ligne
                </h2>
                <p className="text-gray-600 mb-6">
                  Accédez à l&apos;ensemble de vos cours et ressources pédagogiques depuis
                  n&apos;importe quel appareil, 24h/24 et 7j/7.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-800">Cours en vidéo HD</div>
                      <div className="text-sm text-gray-500">
                        Plus de 200 heures de cours filmés par nos formateurs experts
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-800">QCM et examens blancs</div>
                      <div className="text-sm text-gray-500">
                        Entrainez-vous avec des centaines de questions type examen
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-800">Suivi de progression</div>
                      <div className="text-sm text-gray-500">
                        Tableau de bord personnalisé avec vos statistiques en temps réel
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-800">Support pédagogique</div>
                      <div className="text-sm text-gray-500">
                        Une équipe dédiée pour répondre à toutes vos questions
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card bg-[var(--cab-blue)] text-white">
                <h3 className="font-bold text-lg mb-2">Pas encore inscrit ?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Découvrez nos formations VTC en e-learning à partir de 499 euros. Accès illimité
                  pendant 6 mois avec accompagnement personnalisé.
                </p>
                <a href="/demande-de-devis" className="btn-gold text-sm inline-block">
                  Demander un devis gratuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
