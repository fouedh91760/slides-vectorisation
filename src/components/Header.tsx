"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Formations VTC",
    children: [
      { label: "Formation VTC théorique", href: "/examen-vtc-theorique" },
      { label: "Formation VTC pratique", href: "/examen-vtc-pratique" },
      { label: "Formation VTC continue", href: "/formation-vtc-continue-obligatoire" },
      { label: "Tous les tarifs", href: "/reglement-examen-vtc" },
      { label: "Tout savoir sur l'examen VTC", href: "/reglement-examen-vtc", em: true },
    ],
  },
  {
    label: "Taxi",
    children: [
      { label: "Formation Taxi initial", href: "/formation-taxi-initial" },
      { label: "Formation Taxi mobilité", href: "/formation-taxi-mobilite" },
    ],
  },
  {
    label: "TPMR",
    children: [
      { label: "Transport de personnes à mobilité réduite", href: "/la-formation-tpmr" },
    ],
  },
  {
    label: "Location de véhicule",
    children: [
      { label: "Véhicule double commande VTC", href: "/class/formation-pratique-vtc" },
      { label: "Formation VTC pratique + Location", href: "/examen-vtc-pratique" },
    ],
  },
  {
    label: "Informations",
    children: [
      { label: "Les centres CAB formations", href: "/centres-de-formation" },
      { label: "Le calendrier des examens VTC", href: "/calendrier-examen-vtc" },
      { label: "Le métier de chauffeur VTC", href: "/devenir-vtc" },
      { label: "L'examen VTC", href: "/reglement-examen-vtc" },
      { label: "L'actualité VTC", href: "/blog", em: true },
      { label: "FAQ", href: "/faq" },
      { label: "Contactez-nous", href: "/contact" },
    ],
  },
  {
    label: "Devis",
    children: [
      { label: "Demander un devis", href: "/demande-de-devis" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logos/logo-original.png"
              alt="Formation VTC - CAB Formations"
              width={160}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-4 text-xs font-bold text-[var(--cab-dark)] hover:text-[var(--cab-primary)] transition-colors uppercase tracking-wide">
                  {item.label}
                  <svg className="inline ml-0.5 w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && item.children && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md py-1 min-w-[280px] border border-gray-100 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className={`block px-4 py-2 text-sm hover:bg-[var(--cab-bg)] hover:text-[var(--cab-primary)] transition-colors ${
                          (child as { em?: boolean }).em ? "font-semibold border-t border-gray-100 mt-1 pt-2" : "text-gray-700"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/user" className="ml-3 text-xs font-bold text-[var(--cab-dark)] hover:text-[var(--cab-primary)] transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Mes cours
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="font-bold text-xs text-[var(--cab-dark)] uppercase tracking-wide py-2 border-b border-gray-100">
                    {item.label}
                  </div>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      className="block pl-3 py-2 text-sm text-gray-600 hover:text-[var(--cab-primary)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/user" className="block py-3 text-sm font-semibold text-[var(--cab-primary)] border-t" onClick={() => setMobileOpen(false)}>
                Mes cours
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Secondary nav bar */}
      <div className="secondary-nav hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-6">
          <Link href="/centres-de-formation" className="flex items-center gap-1.5 py-2">
            <svg className="w-4 h-4 text-[var(--cab-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Trouver un centre
          </Link>
          <Link href="/contact" className="flex items-center gap-1.5 py-2">
            <svg className="w-4 h-4 text-[var(--cab-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Nous contacter
          </Link>
          <a href="tel:0176380017" className="flex items-center gap-1.5 py-2 font-semibold">
            <svg className="w-4 h-4 text-[var(--cab-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            01 76 38 00 17
          </a>
        </div>
      </div>
    </>
  );
}
