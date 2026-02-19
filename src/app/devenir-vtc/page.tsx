import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment Devenir Chauffeur VTC en 2026 ? Guide Complet",
  description:
    "Comment devenir chauffeur VTC en 2026 ? Guide complet : conditions, inscription examen CMA, formation, examen théorique et pratique, carte professionnelle, création entreprise. Salaire VTC : 2 000€ à 4 000€ net/mois.",
  alternates: { canonical: "https://cab-formations.fr/devenir-vtc" },
  openGraph: {
    title: "Comment Devenir Chauffeur VTC en 2026 ? Guide Complet",
    description:
      "Guide complet pour devenir chauffeur VTC en 2026. Conditions, formation, examen, carte pro, création entreprise. Salaire : 2 000€ à 4 000€ net/mois.",
    url: "https://cab-formations.fr/devenir-vtc",
  },
};

const etapes = [
  {
    num: "1",
    title: "Vérifier les conditions d'accès",
    desc: "Pour devenir chauffeur VTC, vous devez remplir plusieurs conditions : être titulaire du permis de conduire catégorie B depuis au moins 3 ans, avoir un casier judiciaire vierge (bulletin n°2), être apte physiquement (visite médicale) et être titulaire d'une attestation de premiers secours (PSC1).",
    details: [
      "Permis B de plus de 3 ans",
      "Casier judiciaire vierge (bulletin n°2)",
      "Visite médicale favorable",
      "Attestation PSC1 (premiers secours)",
    ],
  },
  {
    num: "2",
    title: "S'inscrire à l'examen auprès de la CMA",
    desc: "L'examen VTC est organisé par les Chambres des Métiers et de l'Artisanat (CMA). L'inscription se fait en ligne sur le site de la CMA de votre département. Vous devrez fournir : une pièce d'identité, votre permis de conduire, un justificatif de domicile, une photo d'identité et le bulletin n°2 du casier judiciaire.",
    details: [
      "Inscription en ligne sur le site de la CMA",
      "Pièce d'identité + permis de conduire",
      "Justificatif de domicile récent",
      "Photo d'identité et bulletin n°2",
    ],
  },
  {
    num: "3",
    title: "Suivre une formation VTC",
    desc: "Bien que non obligatoire, la formation VTC est très fortement recommandée pour réussir l'examen. CAB Formations propose des formations de 35h, 70h et 105h en classe, ainsi qu'une formule e-learning. Nos formations couvrent l'ensemble des matières de l'examen : réglementation, gestion, sécurité routière, français, anglais et développement commercial.",
    details: [
      "Formation 35h : 499€ (intensive 1 semaine)",
      "Formation 70h : 1 690€ (complète 2 semaines)",
      "Formation 105h : 2 490€ (premium 3 semaines)",
      "E-learning : 499€ (à votre rythme)",
    ],
  },
  {
    num: "4",
    title: "Passer l'examen VTC théorique",
    desc: "L'examen théorique VTC comprend 7 épreuves portant sur le tronc commun (réglementation T3P, gestion, sécurité routière, français, anglais) et les épreuves spécifiques VTC (réglementation VTC, développement commercial). La note minimale est de 10/20 à chaque épreuve.",
    details: [
      "7 épreuves écrites (QCM et rédactionnel)",
      "Note minimale : 10/20 par épreuve",
      "Durée totale : environ 3h30",
      "Résultats sous 1 mois",
    ],
  },
  {
    num: "5",
    title: "Passer l'examen VTC pratique",
    desc: "L'épreuve pratique consiste en une mise en situation professionnelle de conduite d'environ 20 minutes. Vous serez évalué par deux examinateurs sur votre conduite, votre relation client, votre connaissance de l'itinéraire et votre maîtrise du véhicule.",
    details: [
      "Mise en situation de conduite (20 min)",
      "2 examinateurs présents",
      "Note minimale : 12/20",
      "Véhicule double commande fourni par le centre",
    ],
  },
  {
    num: "6",
    title: "Obtenir la carte professionnelle VTC",
    desc: "Après la réussite de l'examen (théorique et pratique), vous pouvez demander votre carte professionnelle VTC auprès de la préfecture de votre département. La carte est valable 5 ans et renouvelable sous condition de formation continue (14h tous les 5 ans).",
    details: [
      "Demande en préfecture après réussite",
      "Carte valable 5 ans",
      "Renouvellement avec formation continue (14h)",
      "Délai d'obtention : environ 3 mois",
    ],
  },
  {
    num: "7",
    title: "Créer votre entreprise VTC",
    desc: "Pour exercer en tant que chauffeur VTC, vous devez créer une entreprise. Plusieurs statuts sont possibles : micro-entreprise, SASU, EURL. Vous devrez également immatriculer votre entreprise au registre VTC et souscrire une assurance responsabilité civile professionnelle.",
    details: [
      "Choix du statut juridique (micro, SASU, EURL)",
      "Inscription au registre VTC",
      "Assurance RC professionnelle obligatoire",
      "Immatriculation au registre du commerce",
    ],
  },
];

const faqItems = [
  {
    question: "Combien de temps faut-il pour devenir VTC ?",
    answer:
      "Le parcours complet pour devenir chauffeur VTC prend en moyenne 3 à 6 mois. Cela comprend la formation (1 à 3 semaines), l'inscription et le passage de l'examen (1 à 2 mois d'attente), l'obtention de la carte professionnelle (environ 3 mois) et la création de l'entreprise (1 à 2 semaines).",
  },
  {
    question: "Quel est le salaire d'un chauffeur VTC ?",
    answer:
      "Le salaire moyen d'un chauffeur VTC est entre 2 000€ et 4 000€ net par mois. Ce montant varie en fonction de votre zone géographique, du nombre d'heures travaillées, des plateformes utilisées (Uber, Bolt, Marcel, etc.) et de votre capacité à fidéliser une clientèle directe.",
  },
  {
    question: "Peut-on devenir VTC sans formation ?",
    answer:
      "Techniquement, la formation n'est pas obligatoire pour se présenter à l'examen VTC. Cependant, le taux de réussite sans préparation est très faible. Chez CAB Formations, nous recommandons fortement de suivre une formation pour maximiser vos chances de réussite dès la première tentative.",
  },
  {
    question: "Quelles sont les aides pour financer la formation VTC ?",
    answer:
      "Plusieurs dispositifs de financement existent : le CPF (Compte Personnel de Formation), Pôle Emploi (AIF), le DIF (Droit Individuel à la Formation), la Mission Locale (pour les moins de 26 ans), le Conseil Régional, et le règlement en 3 fois sans frais proposé par CAB Formations.",
  },
  {
    question: "Quel véhicule choisir pour être VTC ?",
    answer:
      "Le véhicule VTC doit répondre à certains critères : moins de 6 ans, au moins 4 portes, puissance minimale de 84 kW, longueur minimale de 4,50 m et largeur minimale de 1,70 m. Les modèles populaires incluent la Tesla Model 3, la Mercedes Classe E, la BMW Série 5 et la Toyota Camry Hybride.",
  },
];

export default function DevenirVtcPage() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Comment Devenir Chauffeur VTC en 2026 ? Guide Complet",
            description:
              "Guide complet et détaillé pour devenir chauffeur VTC en France en 2026. Conditions, formation, examen, carte professionnelle et création d'entreprise.",
            author: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
            publisher: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
            datePublished: "2024-01-15",
            dateModified: "2026-01-10",
            mainEntityOfPage: "https://cab-formations.fr/devenir-vtc",
          }),
        }}
      />

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
            COMMENT DEVENIR CHAUFFEUR VTC ?
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Le guide complet pour devenir VTC en 2026
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Toutes les &eacute;tapes pour obtenir votre carte professionnelle VTC et lancer votre activit&eacute;
            de chauffeur priv&eacute;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis" className="btn-gold text-lg">
              Demander un devis gratuit
            </Link>
            <a href="tel:+33176380017" className="btn-blue text-lg border border-white/20">
              Appeler le 01 76 38 00 17
            </a>
          </div>
        </div>
      </section>

      {/* Introduction GEO-optimized */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Comment devenir VTC en France ?</h2>
          <div className="bg-[var(--cab-gray)] rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Pour devenir chauffeur VTC</strong>, il faut remplir les conditions d&apos;acc&egrave;s
              (permis B de plus de 3 ans, casier judiciaire vierge), s&apos;inscrire &agrave; l&apos;examen VTC
              aupr&egrave;s de la Chambre des M&eacute;tiers et de l&apos;Artisanat (CMA), pr&eacute;parer et r&eacute;ussir
              l&apos;examen th&eacute;orique et pratique, obtenir sa carte professionnelle VTC en pr&eacute;fecture,
              puis cr&eacute;er son entreprise. Le parcours prend en moyenne 3 &agrave; 6 mois.
              <strong> Le salaire moyen d&apos;un chauffeur VTC est entre 2 000&euro; et 4 000&euro; net/mois</strong>,
              ce qui en fait un m&eacute;tier attractif et accessible.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-center">
            Depuis 2017, l&apos;exercice du m&eacute;tier de chauffeur VTC (V&eacute;hicule de Transport avec Chauffeur)
            est r&eacute;glement&eacute; et n&eacute;cessite la r&eacute;ussite d&apos;un examen professionnel. Voici les 7 &eacute;tapes
            d&eacute;taill&eacute;es pour vous lancer dans cette carri&egrave;re.
          </p>
        </div>
      </section>

      {/* 7 Steps */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title">Les 7 &eacute;tapes pour devenir chauffeur VTC</h2>
          <p className="section-subtitle">
            Un parcours structur&eacute; pour obtenir votre carte professionnelle et lancer votre activit&eacute;.
          </p>
          <div className="space-y-8">
            {etapes.map((etape) => (
              <div key={etape.num} className="card">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[var(--cab-gold)] text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                    {etape.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--cab-blue)] mb-3">
                      &Eacute;tape {etape.num} : {etape.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{etape.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {etape.details.map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-500 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-600">{d}</span>
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

      {/* Salaire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Combien gagne un chauffeur VTC ?</h2>
          <p className="section-subtitle">
            Le salaire d&apos;un chauffeur VTC d&eacute;pend de plusieurs facteurs : zone g&eacute;ographique, nombre
            d&apos;heures, plateformes utilis&eacute;es et client&egrave;le directe.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center border-2 border-gray-100">
              <div className="text-sm text-gray-500 mb-2">D&eacute;butant</div>
              <div className="price-tag">2 000&euro;</div>
              <div className="text-sm text-gray-500">net / mois</div>
              <p className="text-xs text-gray-400 mt-3">
                Premi&egrave;re ann&eacute;e d&apos;activit&eacute;, temps plein
              </p>
            </div>
            <div className="card text-center border-2 border-[var(--cab-gold)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--cab-gold)] text-white text-xs font-bold px-4 py-1 rounded-full">
                MOYENNE
              </div>
              <div className="text-sm text-gray-500 mb-2">Exp&eacute;riment&eacute;</div>
              <div className="price-tag">3 000&euro;</div>
              <div className="text-sm text-gray-500">net / mois</div>
              <p className="text-xs text-gray-400 mt-3">
                2 &agrave; 5 ans d&apos;exp&eacute;rience, client&egrave;le mixte
              </p>
            </div>
            <div className="card text-center border-2 border-gray-100">
              <div className="text-sm text-gray-500 mb-2">Confirm&eacute;</div>
              <div className="price-tag">4 000&euro;+</div>
              <div className="text-sm text-gray-500">net / mois</div>
              <p className="text-xs text-gray-400 mt-3">
                Client&egrave;le directe + plateformes, optimis&eacute;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--cab-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Questions fr&eacute;quentes sur le m&eacute;tier de VTC</h2>
          <p className="section-subtitle">
            Les r&eacute;ponses aux questions que vous vous posez sur le parcours pour devenir chauffeur VTC.
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            {faqItems.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.question}</summary>
                <div className="faq-content">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIOPI */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-green-700 font-semibold">Certifi&eacute; QUALIOPI</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            CAB Formations est certifi&eacute; QUALIOPI, attestant de la qualit&eacute; de nos formations.
            +50 000 stagiaires form&eacute;s depuis 2015 dans nos 12 centres en France.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pr&ecirc;t &agrave; devenir chauffeur VTC ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Rejoignez les +50 000 stagiaires qui nous ont fait confiance. Demandez votre devis
            gratuit et commencez votre formation VTC d&egrave;s maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis" className="btn-gold text-lg">
              Demander un devis gratuit
            </Link>
            <a href="tel:+33176380017" className="btn-blue text-lg border border-white/20">
              Appeler le 01 76 38 00 17
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Vous pouvez aussi nous &eacute;crire &agrave;{" "}
            <a href="mailto:contact@cab-formations.fr" className="text-[var(--cab-gold)] underline">
              contact@cab-formations.fr
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
