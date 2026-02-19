"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Formations VTC",
    children: [
      { label: "Examen VTC Théorique", href: "/examen-vtc-theorique" },
      { label: "Examen VTC Pratique", href: "/examen-vtc-pratique" },
      { label: "Formation Continue", href: "/formation-vtc-continue-obligatoire" },
      { label: "Tarifs & Règlement", href: "/reglement-examen-vtc" },
    ],
  },
  {
    label: "Taxi",
    children: [
      { label: "Formation Taxi Initial", href: "/formation-taxi-initial" },
      { label: "Formation Taxi Mobilité", href: "/formation-taxi-mobilite" },
    ],
  },
  { label: "TPMR", href: "/la-formation-tpmr" },
  {
    label: "Informations",
    children: [
      { label: "Nos Centres", href: "/centres-de-formation" },
      { label: "Devenir VTC", href: "/devenir-vtc" },
      { label: "Calendrier Examen", href: "/calendrier-examen-vtc" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Devis Gratuit", href: "/demande-de-devis", highlight: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[var(--cab-blue)] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+33176380017" className="hover:text-[var(--cab-gold)] transition-colors">
              01 76 38 00 17
            </a>
            <a
              href="mailto:contact@cab-formations.fr"
              className="hidden sm:inline hover:text-[var(--cab-gold)] transition-colors"
            >
              contact@cab-formations.fr
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[var(--cab-gold)] font-semibold">4.7/5</span>
            <span className="text-gray-300">(1216 avis)</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logos/cab-formations.png" alt="CAB Formations - Formation VTC" width={40} height={40} className="rounded-lg" />
          <div>
            <div className="font-bold text-[var(--cab-blue)] text-lg leading-tight">
              CAB Formations
            </div>
            <div className="text-xs text-gray-500">Leader Formation VTC</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--cab-blue)] transition-colors rounded-md hover:bg-gray-50">
                  {item.label}
                  <svg
                    className="inline ml-1 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--cab-gray)] hover:text-[var(--cab-blue)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={
                  item.highlight
                    ? "btn-gold text-sm !py-2 !px-4 ml-2"
                    : "px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--cab-blue)] transition-colors rounded-md hover:bg-gray-50"
                }
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
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
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="font-semibold text-sm text-[var(--cab-blue)] py-2">
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block pl-4 py-2 text-sm text-gray-600 hover:text-[var(--cab-blue)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={
                    item.highlight
                      ? "btn-gold text-sm text-center block"
                      : "block py-2 text-sm text-gray-700 hover:text-[var(--cab-blue)]"
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
