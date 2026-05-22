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
import { services } from "@/lib/content/services";

const usefulLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] surface-cream">
      <div className="container max-w-content py-14 md:py-20">
        {/* Trust strip */}
        <div className="mb-12 flex flex-col items-center gap-3 border-b border-[var(--line)] pb-10 text-center md:flex-row md:justify-center md:gap-4">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]"
              />
            ))}
          </div>
          <p className="text-[14px] text-[var(--slate)]">
            <span className="font-medium text-[var(--ink)]">Rated {STATS.averageRating}</span>{" "}
            based on {STATS.reviewCount} client reviews
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + newsletter */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight text-[var(--navy)]"
            >
              {SITE_SHORT_NAME}
            </Link>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--slate)]">
              Debt relief and personal-finance consulting for U.S. households
              who want a real plan, not a sales pitch.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--slate)]">
                Stay in the loop
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--slate)]">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-[15px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[var(--ink)] underline-gold"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--slate)]">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-2 text-[15px]">
              {usefulLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[var(--ink)] underline-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--slate)]">
              Contact
            </h3>
            <address className="mt-4 not-italic text-[15px] leading-relaxed text-[var(--ink)]">
              {/* PLACEHOLDER — replace with real office address */}
              <span className="block text-[var(--slate)]">{OFFICE_ADDRESS}</span>
              <a href={`tel:${PHONE}`} className="mt-3 block underline-gold">
                Call {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="block underline-gold">
                {EMAIL}
              </a>
            </address>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                aria-label={`${SITE_NAME} on Facebook`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] text-[var(--navy)] hover:bg-white"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                aria-label={`${SITE_NAME} on Instagram`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] text-[var(--navy)] hover:bg-white"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                aria-label={`${SITE_NAME} on LinkedIn`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] text-[var(--navy)] hover:bg-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] pt-6 text-[13px] text-[var(--slate)] md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>
            {/* PLACEHOLDER — replace with required regulatory disclaimers and licensing language */}
            Licensed financial strategists. Consultation does not create a
            client relationship until engagement is signed.
          </p>
        </div>
      </div>
    </footer>
  );
}
