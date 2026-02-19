import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tableau de Bord | Espace E-learning | CAB Formations",
  description:
    "Votre tableau de bord e-learning CAB Formations. Suivez votre progression, consultez vos résultats et accédez à vos formations VTC en ligne.",
};

const stats = [
  { label: "Cours inscrits", value: "3", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { label: "Heures complétées", value: "47h", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Quiz réussis", value: "12/15", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Note moyenne", value: "14.5/20", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
];

const courses = [
  {
    title: "Formation VTC Théorique",
    progress: 65,
    totalHours: 70,
    completedHours: 45.5,
    modules: [
      { name: "Réglementation des transports", done: true },
      { name: "Gestion d'entreprise", done: true },
      { name: "Sécurité routière", done: true },
      { name: "Développement commercial", done: false },
      { name: "Réglementation nationale VTC", done: false },
      { name: "Français & Anglais", done: false },
    ],
    status: "En cours",
    color: "var(--cab-blue)",
  },
  {
    title: "Formation VTC Pratique",
    progress: 30,
    totalHours: 70,
    completedHours: 21,
    modules: [
      { name: "Conduite en agglomération", done: true },
      { name: "Conduite sur autoroute", done: true },
      { name: "Conduite de nuit", done: false },
      { name: "Accueil client professionnel", done: false },
    ],
    status: "En cours",
    color: "var(--cab-gold)",
  },
  {
    title: "Sécurité Routière - Quiz",
    progress: 100,
    totalHours: 5,
    completedHours: 5,
    modules: [
      { name: "Code de la route avancé", done: true },
      { name: "Premiers secours", done: true },
      { name: "Quiz final", done: true },
    ],
    status: "Terminé",
    color: "#22c55e",
  },
];

const upcomingSessions = [
  { date: "24 Fév 2026", time: "09:00 - 12:00", title: "Module Développement Commercial", lieu: "En ligne" },
  { date: "26 Fév 2026", time: "14:00 - 17:00", title: "Conduite de nuit - Pratique", lieu: "Centre Bagnolet" },
  { date: "03 Mar 2026", time: "09:00 - 17:00", title: "Réglementation VTC - Révisions", lieu: "En ligne" },
  { date: "10 Mar 2026", time: "09:00 - 12:00", title: "Examen blanc théorique", lieu: "Centre Bagnolet" },
];

export default function DashboardPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-2">Tableau de Bord</h1>
              <p className="text-gray-300">Bienvenue, Stagiaire. Voici un résumé de votre progression.</p>
            </div>
            <Link href="/user" className="btn-gold text-sm hidden sm:inline-block">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card text-center">
                <svg className="w-8 h-8 text-[var(--cab-blue)] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
                <div className="text-2xl font-bold text-[var(--cab-blue)]">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course detail list */}
      <section className="py-12 bg-[var(--cab-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Détail des formations</h2>
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.title} className="card">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Course info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--cab-blue)]">{course.title}</h3>
                        <p className="text-sm text-gray-500">
                          {course.completedHours}h / {course.totalHours}h complétées
                        </p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          course.status === "Terminé"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">Progression globale</span>
                        <span className="font-semibold" style={{ color: course.color }}>
                          {course.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 rounded-full"
                          style={{
                            width: `${course.progress}%`,
                            backgroundColor: course.color,
                          }}
                        />
                      </div>
                    </div>

                    {/* Modules */}
                    <div className="space-y-2">
                      {course.modules.map((mod) => (
                        <div key={mod.name} className="flex items-center gap-2 text-sm">
                          {mod.done ? (
                            <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="9" strokeWidth={2} />
                            </svg>
                          )}
                          <span className={mod.done ? "text-gray-500 line-through" : "text-gray-700"}>
                            {mod.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming sessions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Prochaines sessions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingSessions.map((session, i) => (
              <div key={i} className="card flex items-start gap-4">
                <div className="bg-[var(--cab-blue)] text-white rounded-lg p-3 text-center min-w-[70px]">
                  <div className="text-xs font-medium">{session.date.split(" ")[1]}</div>
                  <div className="text-xl font-bold">{session.date.split(" ")[0]}</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{session.title}</h4>
                  <p className="text-sm text-gray-500">{session.time}</p>
                  <p className="text-sm text-[var(--cab-blue)]">{session.lieu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--cab-gray)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Envie d&apos;aller plus loin ?</h2>
          <p className="text-gray-600 mb-8">
            Découvrez toutes nos formations VTC et complétez votre parcours professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/examen-vtc-theorique" className="btn-gold">
              Voir toutes les formations
            </Link>
            <Link href="/contact" className="btn-blue">
              Contacter un conseiller
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
