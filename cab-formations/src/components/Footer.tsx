import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--cab-dark)] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[var(--cab-gold)] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              C
            </div>
            <div>
              <div className="font-bold text-white text-lg">CAB Formations</div>
              <div className="text-xs text-gray-400">Leader Formation VTC</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Depuis 2015, CAB Formations est le leader de la formation VTC en France avec plus de
            50 000 stagiaires formés et 12 centres de formation.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/cabformations.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-700 hover:bg-[var(--cab-blue)] rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/cabformations"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-700 hover:bg-[var(--cab-blue)] rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cab_formations"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-700 hover:bg-[var(--cab-blue)] rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCf3-UsEY-ulxXTXr0MIljWg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-700 hover:bg-[var(--cab-blue)] rounded-full flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#fff" />
              </svg>
            </a>
          </div>
        </div>

        {/* Formations */}
        <div>
          <h3 className="text-white font-bold mb-4">Formations</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/examen-vtc-theorique" className="hover:text-[var(--cab-gold)] transition-colors">
                Formation VTC Théorique
              </Link>
            </li>
            <li>
              <Link href="/examen-vtc-pratique" className="hover:text-[var(--cab-gold)] transition-colors">
                Formation VTC Pratique
              </Link>
            </li>
            <li>
              <Link href="/formation-vtc-continue-obligatoire" className="hover:text-[var(--cab-gold)] transition-colors">
                Formation Continue VTC
              </Link>
            </li>
            <li>
              <Link href="/formation-taxi-initial" className="hover:text-[var(--cab-gold)] transition-colors">
                Formation Taxi Initial
              </Link>
            </li>
            <li>
              <Link href="/la-formation-tpmr" className="hover:text-[var(--cab-gold)] transition-colors">
                Formation TPMR
              </Link>
            </li>
          </ul>
        </div>

        {/* Informations */}
        <div>
          <h3 className="text-white font-bold mb-4">Informations</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/centres-de-formation" className="hover:text-[var(--cab-gold)] transition-colors">
                Nos Centres
              </Link>
            </li>
            <li>
              <Link href="/devenir-vtc" className="hover:text-[var(--cab-gold)] transition-colors">
                Devenir VTC
              </Link>
            </li>
            <li>
              <Link href="/calendrier-examen-vtc" className="hover:text-[var(--cab-gold)] transition-colors">
                Calendrier des Examens
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[var(--cab-gold)] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--cab-gold)] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="text-gray-400">Téléphone</div>
              <a href="tel:+33176380017" className="text-[var(--cab-gold)] font-semibold hover:underline">
                01 76 38 00 17
              </a>
            </div>
            <div>
              <div className="text-gray-400">Email</div>
              <a href="mailto:contact@cab-formations.fr" className="hover:text-[var(--cab-gold)] transition-colors">
                contact@cab-formations.fr
              </a>
            </div>
            <div>
              <div className="text-gray-400">Siège social</div>
              <address className="not-italic">
                151, avenue Gallieni, Bât C
                <br />
                93170 Bagnolet
              </address>
            </div>
            <div className="pt-2">
              <div className="inline-block bg-green-800/30 border border-green-700/50 rounded px-3 py-1 text-xs text-green-400">
                Certifié QUALIOPI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} CAB Formations. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">
              Mentions Légales
            </Link>
            <Link href="/conditions-generales-de-vente" className="hover:text-gray-300 transition-colors">
              CGV
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-gray-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
