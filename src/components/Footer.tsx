import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--cab-dark)] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <Image src="/images/logos/logo-original.png" alt="CAB Formations" width={140} height={45} className="mb-4 brightness-200" />
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            151, avenue Gallieni, Bât C, 93170 Bagnolet
          </p>
          <div className="space-y-1 text-sm">
            <div><a href="tel:+33176380017" className="text-[var(--cab-primary)] hover:underline font-semibold">01 76 38 00 17</a></div>
            <div><a href="mailto:contact@cab-formations.fr" className="hover:text-[var(--cab-primary)]">contact@cab-formations.fr</a></div>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <span className="text-[var(--cab-primary)] font-bold">4.7/5</span>
            <span className="text-gray-500 text-xs">sur 1216 avis Google My Business</span>
          </div>
          <div className="flex gap-3 mt-4 items-center">
            <Image src="/images/partners/uber-original.png" alt="Uber" width={50} height={20} className="object-contain opacity-60" />
            <Image src="/images/partners/cabloc-original.png" alt="CabLoc" width={50} height={20} className="object-contain opacity-60" />
          </div>
        </div>

        {/* Centre de Formation VTC */}
        <div>
          <h3 className="text-white font-bold mb-3 text-sm uppercase">Centre de Formation VTC</h3>
          <ul className="space-y-1.5 text-sm text-gray-400">
            <li><Link href="/centres-de-formation" className="hover:text-[var(--cab-primary)]">Bagnolet (Paris)</Link></li>
            <li><Link href="/centres-de-formation" className="hover:text-[var(--cab-primary)]">Herblay</Link></li>
            <li><Link href="/centres-de-formation" className="hover:text-[var(--cab-primary)]">Villabé</Link></li>
            <li><Link href="/centres-de-formation" className="hover:text-[var(--cab-primary)]">Bois-d&apos;Arcy</Link></li>
            <li><Link href="/centres-de-formation" className="hover:text-[var(--cab-primary)]">Seclin (Lille)</Link></li>
            <li><Link href="/centres-de-formation" className="hover:text-[var(--cab-primary)]">Vénissieux (Lyon)</Link></li>
          </ul>
        </div>

        {/* Devenir Chauffeur VTC */}
        <div>
          <h3 className="text-white font-bold mb-3 text-sm uppercase">Devenir Chauffeur VTC</h3>
          <ul className="space-y-1.5 text-sm text-gray-400">
            <li><Link href="/devenir-vtc" className="hover:text-[var(--cab-primary)]">Comment devenir VTC</Link></li>
            <li><Link href="/reglement-examen-vtc" className="hover:text-[var(--cab-primary)]">L&apos;examen VTC</Link></li>
            <li><Link href="/calendrier-examen-vtc" className="hover:text-[var(--cab-primary)]">Calendrier des examens</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--cab-primary)]">L&apos;actualité VTC</Link></li>
          </ul>
        </div>

        {/* Toutes les Formations */}
        <div>
          <h3 className="text-white font-bold mb-3 text-sm uppercase">Toutes les Formations VTC</h3>
          <ul className="space-y-1.5 text-sm text-gray-400">
            <li><Link href="/examen-vtc-theorique" className="hover:text-[var(--cab-primary)]">Formation VTC Théorique</Link></li>
            <li><Link href="/examen-vtc-pratique" className="hover:text-[var(--cab-primary)]">Formation VTC Pratique</Link></li>
            <li><Link href="/formation-vtc-continue-obligatoire" className="hover:text-[var(--cab-primary)]">Formation Continue VTC</Link></li>
            <li><Link href="/formation-taxi-initial" className="hover:text-[var(--cab-primary)]">Formation Taxi</Link></li>
          </ul>
        </div>

        {/* Location de Véhicule */}
        <div>
          <h3 className="text-white font-bold mb-3 text-sm uppercase">Location de Véhicule</h3>
          <ul className="space-y-1.5 text-sm text-gray-400">
            <li><Link href="/class/formation-pratique-vtc" className="hover:text-[var(--cab-primary)]">Véhicule double commande</Link></li>
            <li><Link href="/examen-vtc-pratique" className="hover:text-[var(--cab-primary)]">Formation pratique + Location</Link></li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="https://twitter.com/cabformations/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-600 hover:bg-[#1da1f2] rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
            </a>
            <a href="https://www.facebook.com/cabformations.fr/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-600 hover:bg-[#3b5998] rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} CAB Formations. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300">Mentions Légales</Link>
            <Link href="/conditions-generales-de-vente" className="hover:text-gray-300">CGV</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-gray-300">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
