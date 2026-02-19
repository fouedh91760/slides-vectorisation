import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Formation VTC | CAB Formations : Leader de la Formation VTC",
    template: "%s | CAB Formations",
  },
  description:
    "CAB Formations, leader de la formation VTC en France. Préparez votre examen VTC théorique et pratique. 12 centres, +50 000 stagiaires formés. Certifié QUALIOPI.",
  metadataBase: new URL("https://cab-formations.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cab-formations.fr",
    siteName: "CAB Formations",
    title: "Formation VTC | CAB Formations : Leader de la Formation VTC",
    description:
      "Préparez votre examen VTC avec le leader français. 12 centres de formation, +50 000 stagiaires formés, certifié QUALIOPI. À partir de 499€.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cabformations",
  },
  alternates: {
    canonical: "https://cab-formations.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
              logo: "https://cab-formations.fr/images/logo-cab-formations.png",
              description:
                "Leader de la formation VTC en France. +50 000 stagiaires formés depuis 2015.",
              foundingDate: "2015",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-1-76-38-00-17",
                contactType: "customer service",
                availableLanguage: "French",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "151, avenue Gallieni, Bât C",
                addressLocality: "Bagnolet",
                postalCode: "93170",
                addressCountry: "FR",
              },
              sameAs: [
                "https://www.facebook.com/cabformations.fr",
                "https://www.linkedin.com/company/cabformations",
                "https://www.youtube.com/channel/UCf3-UsEY-ulxXTXr0MIljWg",
                "https://www.instagram.com/cab_formations",
                "https://twitter.com/cabformations",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "1216",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
