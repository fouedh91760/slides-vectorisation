"use client";

import { useState } from "react";
import Link from "next/link";

const enrolledCourses = [
  {
    id: 1,
    title: "Formation VTC Théorique",
    progress: 65,
    status: "En cours",
    color: "var(--cab-blue)",
    nextLesson: "Réglementation des transports",
  },
  {
    id: 2,
    title: "Formation VTC Pratique",
    progress: 30,
    status: "En cours",
    color: "var(--cab-gold)",
    nextLesson: "Conduite professionnelle",
  },
  {
    id: 3,
    title: "Sécurité Routière - Quiz",
    progress: 100,
    status: "Terminé",
    color: "#22c55e",
    nextLesson: null,
  },
];

const sidebarLinks = [
  { label: "Mes informations", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "Mes factures", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
];

export default function UserLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 800);
  };

  if (!isLoggedIn) {
    return (
      <div className="card">
        <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-6">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="votre@email.fr"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cab-blue)] focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Votre mot de passe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cab-blue)] focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-[var(--cab-blue)] hover:underline">
              Mot de passe oublié ?
            </a>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="btn-gold w-full text-center text-lg disabled:opacity-50"
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
      </div>
    );
  }

  // Dashboard UI after login
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="card bg-[var(--cab-blue)] text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Bienvenue, Stagiaire</h2>
            <p className="text-gray-300 text-sm">
              Continuez votre formation et atteignez vos objectifs.
            </p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-gray-300 hover:text-white underline"
          >
            Déconnexion
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="card p-0 overflow-hidden">
            <nav>
              {sidebarLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="flex items-center gap-3 px-5 py-4 text-sm text-gray-700 hover:bg-[var(--cab-gray)] hover:text-[var(--cab-blue)] transition-colors border-b border-gray-100 last:border-0"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                  {link.label}
                </a>
              ))}
              <Link
                href="/user/dashboard"
                className="flex items-center gap-3 px-5 py-4 text-sm text-[var(--cab-blue)] font-semibold hover:bg-[var(--cab-gray)] transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Tableau de bord complet
              </Link>
            </nav>
          </div>
        </div>

        {/* Course cards */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="font-bold text-lg text-gray-800">Mes formations</h3>
          {enrolledCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-[var(--cab-blue)]">{course.title}</h4>
                  {course.nextLesson && (
                    <p className="text-sm text-gray-500 mt-1">
                      Prochaine leçon : {course.nextLesson}
                    </p>
                  )}
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
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Progression</span>
                  <span className="font-semibold" style={{ color: course.color }}>
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${course.progress}%`,
                      backgroundColor: course.color,
                    }}
                  />
                </div>
              </div>
              <button
                className={course.status === "Terminé" ? "btn-blue text-sm" : "btn-gold text-sm"}
              >
                {course.status === "Terminé" ? "Revoir" : "Continuer"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
