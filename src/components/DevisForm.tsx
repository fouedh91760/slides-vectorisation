"use client";

import { useState, type FormEvent } from "react";

const formations = [
  "Formation VTC Théorique 35h",
  "Formation VTC Théorique 70h",
  "Formation VTC Théorique 105h",
  "Formation VTC E-learning",
  "Formation VTC Pratique",
  "Formation Continue",
  "Formation Taxi",
  "Formation TPMR",
];

const centres = [
  "Bagnolet (93170)",
  "Herblay (95220)",
  "Villabé (91100)",
  "Bois-d'Arcy (78390)",
  "Seclin - Lille (59113)",
  "Vénissieux - Lyon (69200)",
];

export default function DevisForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--cab-blue)] mb-2">Demande envoyée !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre demande de devis. Un conseiller CAB Formations vous contactera
          dans les plus brefs délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-blue"
        >
          Envoyer une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-1">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-1">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent"
            placeholder="Votre prénom"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-1">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label htmlFor="formation" className="block text-sm font-semibold text-gray-700 mb-1">
          Formation souhaitée <span className="text-red-500">*</span>
        </label>
        <select
          id="formation"
          name="formation"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent bg-white"
        >
          <option value="">-- Sélectionnez une formation --</option>
          {formations.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="centre" className="block text-sm font-semibold text-gray-700 mb-1">
          Centre souhaité
        </label>
        <select
          id="centre"
          name="centre"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent bg-white"
        >
          <option value="">-- Sélectionnez un centre --</option>
          {centres.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent resize-vertical"
          placeholder="Précisez votre demande..."
        />
      </div>

      <button type="submit" className="btn-gold w-full text-center text-lg">
        Envoyer ma demande de devis
      </button>

      <p className="text-xs text-gray-500 text-center">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté par CAB Formations
        concernant votre demande de devis.
      </p>
    </form>
  );
}
