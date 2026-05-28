import Link from "next/link";
import { Facebook, Instagram, Linkedin, Star } from "lucide-react";

import { NewsletterForm } from "./newsletter-form";
import {
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  OFFICE_ADDRESS,
  PHONE,
  PHONE_DISPLAY,
  SITE_NAME,
  SITE_SHORT_NAME,
  STATS,
} from "@/lib/config";

const exploreLinks = [
  { href: "/services/student-loan-relief", label: "How It Works" },
  { href: "/calculator", label: "Payment Calculator" },
  { href: "/wiki", label: "Student Loan Wiki" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/book-a-consultation", label: "Book a Consultation" },
];

const usefulLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--ink-deep)] text-white">
      <div className="container max-w-content py-16 md:py-24">
        {/* Trust strip */}
        <div className="mb-12 flex flex-col items-center gap-3 border-b border-white/10 pb-10 text-center md:flex-row md:justify-center md:gap-4">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[var(--coral)] text-[var(--coral)]"
              />
            ))}
          </div>
          <p className="text-[14px] text-white/70">
            <span className="font-medium text-white">
              Rated {STATS.averageRating}
            </span>{" "}
            based on {STATS.reviewCount} client reviews
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-[22px] font-extrabold text-white"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--coral)] text-white text-[14px] font-bold"
              >
                C
              </span>
              {SITE_SHORT_NAME}
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70">
              Federal student loan consulting for U.S. borrowers. We pull
              your full loan picture, model every program you qualify for,
              and handle the paperwork.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Stay in the loop
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-[15px]">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/85 transition-colors hover:text-[var(--coral)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-2 text-[15px]">
              {usefulLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/85 transition-colors hover:text-[var(--coral)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Contact
            </h3>
            <address className="mt-4 not-italic text-[15px] leading-relaxed text-white/85">
              <span className="block text-white/60">{OFFICE_ADDRESS}</span>
              <a
                href={`tel:${PHONE}`}
                className="mt-3 block transition-colors hover:text-[var(--coral)]"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block transition-colors hover:text-[var(--coral)]"
              >
                {EMAIL}
              </a>
            </address>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                aria-label={`${SITE_NAME} on Facebook`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                aria-label={`${SITE_NAME} on Instagram`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                aria-label={`${SITE_NAME} on LinkedIn`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-white/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>
            Licensed financial strategists. Consultation does not create a
            client relationship until engagement is signed.
          </p>
        </div>
      </div>
    </footer>
  );
}
