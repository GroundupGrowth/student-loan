import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/site/blog-card";
import { CtaBand } from "@/components/site/cta-band";
import { ServiceDeepDive } from "@/components/site/service-deep-dive";
import { StatsStrip } from "@/components/site/stats-strip";
import { TeamCard } from "@/components/site/team-card";
import { TestimonialCarousel } from "@/components/site/testimonial-carousel";
import { TrustBar } from "@/components/site/trust-bar";
import { VslPlaceholder } from "@/components/site/vsl-placeholder";
import {
  Database,
  FileCheck,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

import { blogPosts } from "@/lib/content/blog-posts";
import { studentLoanService } from "@/lib/content/services";
import { team } from "@/lib/content/team";
import { testimonials } from "@/lib/content/testimonials";

export const metadata = {
  title: "Federal student loans, finally explained.",
  description:
    "A licensed strategist reviews your federal student loans, models every repayment plan you qualify for, and handles the paperwork. No call centers. No scripts. No pressure.",
};

const whatWeHandle = [
  {
    icon: Database,
    title: "We pull your full federal loan record",
    description:
      "Every loan, every servicer, the whole NSLDS picture. No guessing about what you owe to whom or which rules apply to which balance.",
  },
  {
    icon: GraduationCap,
    title: "We model every program you qualify for",
    description:
      "IDR plans, PSLF, Borrower's Defense, Disability Discharge — your real numbers, side by side, with the tradeoffs in plain English.",
  },
  {
    icon: FileCheck,
    title: "We file the paperwork and track it",
    description:
      "Forms drafted, submitted, followed up. Annual re-certification handled on your behalf. One strategist, not a call-center queue.",
  },
];

const whyChoose = [
  {
    icon: Users,
    title: "Strategists, not call-center reps",
    description:
      "Your case is handled by a licensed strategist who knows the federal student loan rulebook cold. The person you meet on your consultation is the person who runs your plan.",
  },
  {
    icon: FileCheck,
    title: "Your numbers, your plan",
    description:
      "Every plan starts with your real NSLDS record, your income, and your family situation. We don't recommend anything we wouldn't put our own family in.",
  },
  {
    icon: ShieldCheck,
    title: "Flat fees, no hidden cuts",
    description:
      "Flat fee quoted up front on your free consultation. No percentage-of-savings tricks, no surprise charges, no charges for re-certification once you're a client.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="section pb-10 md:pb-20">
        <div className="container max-w-content">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="eyebrow">Federal student loan strategy</span>
              <h1 className="mt-4 text-balance">
                Lower your payment. Get a real plan. Sleep better.
              </h1>
              <p className="mt-5 max-w-xl font-serif text-[20px] leading-snug text-[var(--slate)] md:text-[22px]">
                A licensed strategist reviews your federal student loans,
                models every repayment plan you qualify for, and walks you
                through your options in plain English. No call centers. No
                scripts. No pressure.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/book-a-consultation">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/services/student-loan-relief">See how it works</Link>
                </Button>
              </div>
              <p className="mt-6 max-w-md text-[14px] text-[var(--slate)]">
                30-minute call. No obligation. Walk away with a written next
                step whether you hire us or not.
              </p>
            </div>

            <div className="lg:pl-6">
              {/*
                VSL slot. When the video embed URL is ready, replace
                <VslPlaceholder /> with the iframe (see the component's
                JSDoc for the exact pattern) and set VSL_EMBED_URL in
                lib/config.ts so other code can reference it.
              */}
              <VslPlaceholder caption="Watch the 90-second intro" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust bar */}
      <TrustBar />

      {/* 3. What we handle (replaces the old 4-card services overview) */}
      <section id="what-we-handle" className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 text-balance">
              We handle the paperwork. You get the lower payment.
            </h2>
            <p className="mt-4 text-body text-[var(--slate)]">
              We do one thing — federal student loans — and we do it
              thoroughly. Here&apos;s the three-part service you get on every
              engagement.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whatWeHandle.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-base h-full p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--cream)]">
                    <Icon
                      className="h-5 w-5 text-[var(--navy)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 font-serif text-[20px] text-[var(--navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Service deep-dive — single rich section for the student loan service */}
      <ServiceDeepDive service={studentLoanService} imageOnRight={true} surface="cream" />

      {/* 5. Meet the Team */}
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The team</span>
            <h2 className="mt-3 text-balance">
              Meet the people who&apos;ll handle your case.
            </h2>
            <p className="mt-4 text-body text-[var(--slate)]">
              You won&apos;t be routed through a call center. The strategist you
              meet on your consultation is the strategist who runs your plan.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why choose us */}
      <section className="section surface-cream">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why ClearPath</span>
            <h2 className="mt-3 text-balance">
              Why borrowers trust ClearPath with their federal student loans.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-base h-full p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-white">
                    <Icon
                      className="h-5 w-5 text-[var(--navy)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 font-serif text-[20px] text-[var(--navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Stats strip */}
      <StatsStrip />

      {/* 8. Featured testimonials */}
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Client stories</span>
            <h2 className="mt-3 text-balance">What our clients say.</h2>
            <p className="mt-4 text-body text-[var(--slate)]">
              {/* PLACEHOLDER — replace placeholder testimonial copy in lib/content/testimonials.ts with real, written-permission quotes before launch. */}
              Quotes are placeholders until real client reviews are added.
            </p>
          </div>
          <div className="mt-12">
            <TestimonialCarousel items={testimonials} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="text-[15px] font-medium text-[var(--navy)] underline-gold"
            >
              Read more reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Blog teaser */}
      <section className="section surface-cream">
        <div className="container max-w-content">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">Insights</span>
              <h2 className="mt-3 text-balance">Latest from the blog.</h2>
            </div>
            <Link
              href="/blog"
              className="text-[15px] font-medium text-[var(--navy)] underline-gold"
            >
              See all posts →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA band */}
      <CtaBand
        heading="Ready for a real student loan plan?"
        subheading="Book a free 30-minute consultation. We&rsquo;ll pull your federal loan record, model the math, and tell you the next step — whether you hire us or not."
      />
    </>
  );
}
