"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PHONE, PHONE_DISPLAY, SITE_SHORT_NAME } from "@/lib/config";

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services/student-loan-relief", label: "How It Works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const linkClass =
  "rounded-full px-4 py-2 text-[14px] font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--surface-deep)] hover:text-[var(--ink)]";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-[var(--surface)] transition-all",
        scrolled ? "shadow-[0_1px_0_var(--line)]" : "",
      )}
    >
      <div className="container max-w-content flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-[22px] font-extrabold tracking-tight text-[var(--ink)]"
          aria-label={`${SITE_SHORT_NAME} home`}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--coral)] text-white text-[14px] font-bold"
          >
            C
          </span>
          {SITE_SHORT_NAME}
        </Link>

        {/* Desktop nav — pill links */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--ink-soft)] hover:text-[var(--ink)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <Button asChild>
            <Link href="/book-a-consultation">Book Free Call</Link>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen} ariaLabel="Site menu">
        <div className="flex h-full flex-col bg-[var(--surface)]">
          <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
            <span className="flex items-center gap-2 text-[22px] font-extrabold text-[var(--ink)]">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--coral)] text-white text-[14px] font-bold"
              >
                C
              </span>
              {SITE_SHORT_NAME}
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-4 py-3 text-[16px] font-medium text-[var(--ink)] hover:bg-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-[var(--line)] px-5 py-4">
            <Button asChild className="w-full" size="lg">
              <Link href="/book-a-consultation" onClick={() => setMobileOpen(false)}>
                Book Free Consultation
              </Link>
            </Button>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[var(--ink)] py-3 text-[15px] font-semibold text-[var(--ink)]"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </Sheet>
    </header>
  );
}
