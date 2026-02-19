"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    num: "1",
    tab: "JE VEUX M'INSCRIRE À L'EXAMEN VTC",
    title: "inscription à l'EXAMEN VTC & formation vtc",
    content: (
      <>
        <p className="mb-3 text-[var(--cab-dark)] leading-relaxed">
          <strong>Constituez votre dossier d&apos;inscription :</strong>
        </p>
        <p className="mb-4 text-[var(--cab-text-light)] leading-relaxed text-sm">
          - CNI ou titre de séjour valide<br />
          - Justificatif de domicile de moins de 3 mois<br />
          - Permis de conduire de plus de 3 ans<br />
          - Photo d&apos;identité<br />
          - Nom, prénom et signature
        </p>
        <p className="mb-2"><Link href="/reglement-examen-vtc" className="btn-primary text-xs">Découvrir l&apos;examen VTC</Link></p>
        <p><Link href="/demande-de-devis" className="btn-primary text-xs">demander plus d&apos;infos</Link></p>
      </>
    ),
  },
  {
    num: "2",
    tab: "JE PASSE L'EXAMEN VTC THÉORIQUE",
    title: "L'EXAMEN VTC THÉORIQUE",
    content: (
      <>
        <p className="mb-3 text-[var(--cab-text-light)] leading-relaxed text-sm">
          Première épreuve de l&apos;examen VTC, l&apos;épreuve théorique VTC est en tronc commun
          avec l&apos;examen Taxi et repose sur 6 matières.{" "}
          <Link href="/examen-vtc-theorique" className="text-[var(--cab-primary)]">Plus d&apos;infos</Link>
        </p>
        <p className="mb-3 text-sm text-[var(--cab-dark)]">
          <strong>Objectif :</strong> au moins 10/20
        </p>
        <p className="mb-3">
          <Link href="/calendrier-examen-vtc" className="text-[var(--cab-primary)] text-sm">
            Voir les dates des examens VTC
          </Link>
        </p>
        <p className="mb-2"><Link href="/examen-vtc-theorique" className="btn-primary text-xs">LES FORMATIONS THÉORIQUES</Link></p>
        <p><Link href="/demande-de-devis" className="btn-primary text-xs">demander un devis</Link></p>
      </>
    ),
  },
  {
    num: "3",
    tab: "JE PASSE L'EXAMEN VTC PRATIQUE",
    title: "L'EXAMEN VTC PRATIQUE",
    content: (
      <>
        <p className="mb-3 text-[var(--cab-text-light)] leading-relaxed text-sm">
          Félicitations, vous êtes admissible à l&apos;examen VTC pratique, <strong>épreuve de conduite</strong> professionnelle
          évaluée par 2 examinateurs, à bord d&apos;un <strong>véhicule double commande</strong> fourni par le candidat.{" "}
          <Link href="/examen-vtc-pratique" className="text-[var(--cab-primary)]">Plus d&apos;infos</Link>
        </p>
        <p className="mb-3 text-sm text-[var(--cab-dark)]">
          <strong>Objectif :</strong> au moins 12/20
        </p>
        <p className="mb-2"><Link href="/examen-vtc-pratique" className="btn-primary text-xs">LES FORMATIONS pratiques</Link></p>
        <p><Link href="/class/formation-pratique-vtc" className="btn-primary text-xs">louer un véhicule</Link></p>
      </>
    ),
  },
  {
    num: "4",
    tab: "J'AI RÉUSSI MON EXAMEN",
    title: "EXERCER EN TANT QUE CHAUFFEUR VTC",
    content: (
      <>
        <p className="mb-3 text-[var(--cab-text-light)] leading-relaxed text-sm">
          Vous avez réussi l&apos;examen VTC, Félicitations ! Vous êtes <strong>chauffeur VTC</strong>.
          CAB Formations vous accompagne et répond à vos interrogations…
        </p>
        <p className="mb-2 text-sm text-[var(--cab-text-light)]">Comment obtenir la <strong>carte professionnelle</strong> VTC ? Comment s&apos;inscrire au <strong>registre VTC</strong> ?</p>
        <p className="mb-2 text-sm text-[var(--cab-text-light)]">Comment <strong>créer mon entreprise</strong> ?</p>
        <p className="mb-3 text-sm text-[var(--cab-text-light)]">La <strong>formation continue</strong> est-elle obligatoire ?</p>
        <p className="mb-2"><Link href="/class/formation-continue" className="btn-primary text-xs">la formation continue</Link></p>
        <p><Link href="/devenir-vtc" className="btn-primary text-xs">toutes mes démarches</Link></p>
      </>
    ),
  },
];

export default function StepTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="slideshow-section">
      {/* Steps bar - white background at top */}
      <div className="steps-bar">
        <div className="steps-inner">
          {steps.map((step, i) => (
            <button
              key={step.num}
              onClick={() => setActive(i)}
              className={`step-item ${active === i ? "active" : ""}`}
            >
              <span className="step-number">{step.num}</span>
              <span className="step-text">{step.tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom left - title + CTA */}
      <div className="bottom-panel">
        <h1>FORMATION VTC</h1>
        <Link href="/demande-de-devis" className="btn-primary">
          Demandez un devis gratuit
        </Link>
      </div>

      {/* Right panel - step content */}
      <div className="right-panel">
        <div className="text-center">
          <h2>{steps[active].title}</h2>
          <div className="right-panel-content text-left">
            {steps[active].content}
          </div>
          {/* Pager dots */}
          <div className="pager-dots">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`dot ${active === i ? "active" : ""}`}
                aria-label={`Étape ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
