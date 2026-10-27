import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  "https://github.com/JacobSeatlholo/St-BonifaceCatholic-Church-Galeshewe";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "St Boniface Catholic Church · Galeshewe, Kimberley — Est. 1925",
  description:
    "A Catholic parish in the heart of Galeshewe, Kimberley — one hundred years of worship, resilience and community (1925–2025). All are welcome. Join us for Mass.",
  keywords: [
    "St Boniface",
    "Catholic Church",
    "Galeshewe",
    "Kimberley",
    "Northern Cape",
    "parish",
    "Mass times",
    "Diocese of Kimberley",
  ],
  openGraph: {
    title: "St Boniface Catholic Church · Galeshewe, Kimberley",
    description:
      "One hundred years of grace in Galeshewe (1925–2025). A parish of the Roman Catholic Diocese of Kimberley. All are welcome.",
    url: SITE_URL,
    siteName: "St Boniface Catholic Church, Galeshewe",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "St Boniface Catholic Church · Galeshewe, Kimberley",
    description:
      "One hundred years of grace in Galeshewe (1925–2025). All are welcome.",
    images: ["/images/og-image.jpg"],
  },
};

/* Church schema for search engines */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "St Boniface Catholic Church",
  alternateName: "St Boniface Parish Kimberley",
  foundingDate: "1925",
  url: SITE_URL,
  telephone: "+27538314411",
  email: "stbonifacekim@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3–5 Caritas Road, Galeshewe",
    addressLocality: "Kimberley",
    addressRegion: "Northern Cape",
    postalCode: "8301",
    addressCountry: "ZA",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Roman Catholic Diocese of Kimberley",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-parchment font-sans text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
