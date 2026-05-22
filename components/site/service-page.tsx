import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { faqs } from "@/lib/content/faqs";
import type { Service } from "@/lib/content/services";

export function ServicePage({ service }: { service: Service }) {
  const serviceFaqs = faqs[service.key];

  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container max-w-content">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-[13px] text-[var(--slate)]"
          >
            <Link href="/" className="hover:text-[var(--navy)]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link href="/#services" className="hover:text-[var(--navy)]">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-[var(--ink)]">{service.name}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <span className="eyebrow-gold">{service.name}</span>
              <h1 className="mt-4 text-balance">{service.outcomeHeadline}</h1>
              <p className="mt-5 max-w-xl font-serif text-[20px] leading-snug text-[var(--slate)]">
                {service.outcomeSub}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/book-a-consultation">Book Your Call</Link>
                </Button>
                <Link
                  href="#faq"
                  className="text-[15px] font-medium text-[var(--navy)] underline-gold"
                >
                  Read FAQs →
                </Link>
              </div>
            </div>
            <div>
              <PlaceholderImage
                label={`${service.name} hero — replace with a real photo (consultation, document review, or relevant scene)`}
                aspect="landscape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section surface-cream">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-3 text-balance">Exactly what&apos;s included</h2>
            <p className="mt-4 text-body text-[var(--slate)]">
              No upsells, no surprise add-ons. Here&apos;s the work, line by line.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {service.whatYouGet.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white p-5"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Who this is for</span>
            <h2 className="mt-3 text-balance">Three people we help most often</h2>
            <p className="mt-4 text-body text-[var(--slate)]">
              If one of these sounds like you, the consultation will be useful
              even if you don&apos;t end up working with us.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.whoItsFor.map((persona) => (
              <div key={persona.title} className="card-base card-hover h-full p-7">
                <h3 className="font-serif text-[20px] text-[var(--navy)]">
                  {persona.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section surface-cream">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 text-balance">Three steps from call to clarity</h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {service.howItWorks.map((step, i) => (
              <li
                key={step.title}
                className="card-base h-full bg-white p-7"
              >
                <span className="font-serif text-[14px] tracking-[0.16em] text-[var(--gold)]">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-[22px] text-[var(--navy)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="mt-3 text-balance">Questions we get on every call</h2>
            <p className="mt-4 text-body text-[var(--slate)]">
              If your question isn&apos;t here, bring it to the consultation.
              We&apos;d rather answer it once for you than have you guess.
            </p>
            <div className="mt-10">
              <FaqAccordion items={serviceFaqs} idPrefix={service.slug} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
