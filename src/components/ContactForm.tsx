"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
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
        <h3 className="text-2xl font-bold text-[var(--cab-blue)] mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre message. Notre équipe vous répondra dans les meilleurs délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-blue"
        >
          Envoyer un nouveau message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div>
        <label htmlFor="contact-nom" className="block text-sm font-semibold text-gray-700 mb-1">
          Nom <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-nom"
          name="nom"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-sujet" className="block text-sm font-semibold text-gray-700 mb-1">
          Sujet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-sujet"
          name="sujet"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent"
          placeholder="Sujet de votre message"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cab-gold)] focus:border-transparent resize-vertical"
          placeholder="Votre message..."
        />
      </div>

      <button type="submit" className="btn-gold w-full text-center text-lg">
        Envoyer le message
      </button>

      <p className="text-xs text-gray-500 text-center">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/politique-de-confidentialite" className="underline">politique de confidentialité</a>.
      </p>
    </form>
  );
}
