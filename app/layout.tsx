import type { Metadata } from "next";

import "./globals.css";
import { sans } from "@/lib/fonts";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CookieBanner } from "@/components/site/cookie-banner";
import { JsonLd } from "@/components/site/json-ld";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/config";
import { organizationSchema, SITE_URL, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Federal student loan consulting for U.S. borrowers. We pull your full loan picture, model every program you qualify for, and handle the paperwork. No call centers, no scripts, no pressure.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        // PLACEHOLDER — replace /public/og-default.png with a real OG image (1200x630)
        // before launch. See /public/og-default.README.md for spec.
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        {/* Site-wide structured data (Organization + WebSite). */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="min-h-screen bg-white">
        {/*
          ANALYTICS PLACEHOLDER
          Drop your GA4 or Plausible snippet here before launch. Keep it in
          <head> via the Next.js `Script` component with `strategy="afterInteractive"`
          to avoid blocking the main thread. Example:

          <Script
            src="https://plausible.io/js/script.js"
            data-domain="studentloanclarity.com"
            strategy="afterInteractive"
          />
        */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-[var(--ink-deep)] focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
