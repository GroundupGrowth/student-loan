import type { Metadata } from "next";

import "./globals.css";
import { sans } from "@/lib/fonts";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CookieBanner } from "@/components/site/cookie-banner";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/config";

export const metadata: Metadata = {
  // PLACEHOLDER — set NEXT_PUBLIC_SITE_URL or replace the fallback URL before
  // launch so social-share previews resolve absolute URLs correctly.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.studentloanclarity.com",
  ),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Debt relief and personal-finance consulting for U.S. households. Lower your student loan payment, clean up your credit, and build real wealth — with a real human expert.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
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
      <body className="min-h-screen bg-white">
        {/*
          ANALYTICS PLACEHOLDER
          Drop your GA4 or Plausible snippet here before launch. Keep it in
          <head> via the Next.js `Script` component with `strategy="afterInteractive"`
          to avoid blocking the main thread. Example:

          <Script
            src="https://plausible.io/js/script.js"
            data-domain="clearpath.com"
            strategy="afterInteractive"
          />
        */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-[var(--navy)] focus:px-3 focus:py-2 focus:text-white"
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
