"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PHONE, PHONE_DISPLAY, SITE_SHORT_NAME } from "@/lib/config";
import { services } from "@/lib/content/services";

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Services is handled separately as a dropdown
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow",
        scrolled ? "shadow-[0_1px_0_var(--line),0_8px_20px_-18px_rgba(15,42,68,0.45)]" : "border-b border-[var(--line)]",
      )}
    >
      <div className="container max-w-content flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight text-[var(--navy)]"
          aria-label={`${SITE_SHORT_NAME} home`}
        >
          {SITE_SHORT_NAME}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-2" aria-label="Primary">
          <Link href="/" className={cn(navigationMenuTriggerStyle(), "text-[15px]")}>
            Home
          </Link>
          <Link href="/about" className={cn(navigationMenuTriggerStyle(), "text-[15px]")}>
            About
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-1 p-3">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block rounded-md p-3 transition-colors hover:bg-[var(--cream)]"
                          >
                            <div className="font-serif text-[16px] text-[var(--navy)]">
                              {s.name}
                            </div>
                            <p className="mt-1 text-[13px] leading-snug text-[var(--slate)]">
                              {s.shortDescription}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/reviews" className={cn(navigationMenuTriggerStyle(), "text-[15px]")}>
            Reviews
          </Link>
          <Link href="/blog" className={cn(navigationMenuTriggerStyle(), "text-[15px]")}>
            Blog
          </Link>
          <Link href="/contact" className={cn(navigationMenuTriggerStyle(), "text-[15px]")}>
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--ink)] underline-gold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <Button asChild>
            <Link href="/book-a-consultation">Book Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-[var(--navy)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-[var(--navy)]"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen} ariaLabel="Site menu">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
            <span className="font-serif text-xl text-[var(--navy)]">{SITE_SHORT_NAME}</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-[var(--navy)]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
            <ul className="space-y-1">
              {navLinks.slice(0, 2).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-3 text-[16px] font-medium text-[var(--ink)] hover:bg-[var(--cream)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[16px] font-medium text-[var(--ink)] hover:bg-[var(--cream)]"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      mobileServicesOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                {mobileServicesOpen && (
                  <ul className="mt-1 space-y-1 pl-3">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-[15px] text-[var(--slate)] hover:bg-[var(--cream)] hover:text-[var(--navy)]"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {navLinks.slice(2).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-3 text-[16px] font-medium text-[var(--ink)] hover:bg-[var(--cream)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-[var(--line)] px-5 py-4">
            <Button asChild className="w-full">
              <Link href="/book-a-consultation" onClick={() => setMobileOpen(false)}>
                Book Free Consultation
              </Link>
            </Button>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 rounded-md border border-[var(--navy)] py-3 text-[15px] font-medium text-[var(--navy)]"
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
