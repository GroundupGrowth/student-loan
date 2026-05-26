import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/site/blog-card";
import { CtaBand } from "@/components/site/cta-band";
import { NumberedCircle } from "@/components/site/numbered-circle";
import { ServiceDeepDive } from "@/components/site/service-deep-dive";
import { StatsStrip } from "@/components/site/stats-strip";
import { StickerTag } from "@/components/site/sticker-tag";
import { TeamCard } from "@/components/site/team-card";
import { TestimonialCarousel } from "@/components/site/testimonial-carousel";
import { TrustBar } from "@/components/site/trust-bar";
import { VslPlaceholder } from "@/components/site/vsl-placeholder";
import { UnderlineSwoosh } from "@/components/site/svg-doodles";
import {
  Database,
  FileCheck,
  GraduationCap,
  HeadphoneOff,
  Layers,
  RefreshCcw,
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

const painPoints = [
  {
    icon: HeadphoneOff,
    title: "Servicer call centers can't help.",
    description:
      "They read scripts. They don't model your numbers. They have no incentive to put you in the cheapest plan.",
  },
  {
    icon: Layers,
    title: "The rules change every year.",
    description:
      "SAVE, PAYE, IBR, ICR, PSLF — the labels keep shifting and the wrong plan can cost you tens of thousands.",
  },
  {
    icon: RefreshCcw,
    title: "Re-certification quietly resets you.",
    description:
      "Miss a yearly form and your payment jumps. Switch plans wrong and your PSLF count resets to zero.",
  },
];

const whatWeHandle = [
  {
    icon: Database,
    title: "We pull your full federal loan record.",
    description:
      "Every loan, every servicer, the whole NSLDS picture. No guessing about what you owe to whom or which rules apply.",
  },
  {
    icon: GraduationCap,
    title: "We model every program you qualify for.",
    description:
      "IDR plans, PSLF, Borrower's Defense, Disability Discharge — your real numbers, side by side, in plain English.",
  },
  {
    icon: FileCheck,
    title: "We file the paperwork and track it.",
    description:
      "Forms drafted, submitted, followed up. Annual re-certification handled. One strategist, not a call-center queue.",
  },
];

const whyChoose = [
  {
    icon: Users,
    title: "Strategists, not call-center reps.",
    description:
      "Your case is handled by a licensed strategist who knows the federal student loan rulebook cold. The person you meet on your consultation is the person who runs your plan.",
  },
  {
    icon: FileCheck,
    title: "Your numbers, your plan.",
    description:
      "Every plan starts with your real NSLDS record, your income, and your family situation. We don't recommend anything we wouldn't put our own family in.",
  },
  {
    icon: ShieldCheck,
    title: "Flat fees. No hidden cuts.",
    description:
      "Flat fee quoted up front on your free consultation. No percentage-of-savings tricks, no surprise charges, no charges for re-certification once you're a client.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-[var(--surface)] pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container max-w-content">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <StickerTag>Federal student loan strategy</StickerTag>
              <h1 className="mt-5 text-balance">
                Lower your payment. Get a{" "}
                <span className="relative inline-block whitespace-nowrap">
                  real plan
                  <UnderlineSwoosh />
                </span>
                . Sleep better.
              </h1>
              <p className="mt-6 max-w-xl text-lead">
                A licensed strategist reviews your federal student loans,
                models every repayment plan you qualify for, and walks you
                through your options in plain English. No call centers. No
                scripts. No pressure.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild variant="stamp" size="lg">
                  <Link href="/book-a-consultation">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/services/student-loan-relief">See how it works</Link>
                </Button>
              </div>
              <p className="mt-6 max-w-md text-[14px] text-[var(--ink-soft)]">
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

      {/* 3. Pain-point strip */}
      <section className="section bg-[var(--surface)]">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <StickerTag>The trap most borrowers are stuck in</StickerTag>
            <h2 className="mt-5 text-balance">
              That&rsquo;s not your fault — and it&rsquo;s fixable.
            </h2>
            <p className="mt-5 text-lead">
              The federal student loan system is designed for the servicers,
              not for you. Three reasons most borrowers are in the wrong plan
              and don&rsquo;t know it.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {painPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-md bg-white p-7 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--coral-soft)]">
                    <Icon
                      className="h-5 w-5 text-[var(--coral)]"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 text-[18px] font-semibold text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. What we handle 3-up */}
      <section id="what-we-handle" className="section bg-[var(--surface-deep)]">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <StickerTag>What we do</StickerTag>
            <h2 className="mt-5 text-balance">
              We handle the paperwork. You get the lower payment.
            </h2>
            <p className="mt-5 text-lead">
              We do one thing — federal student loans — and we do it
              thoroughly. Here&rsquo;s the three-part service you get on
              every engagement.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {whatWeHandle.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative rounded-lg bg-white p-7 shadow-card"
                >
                  <NumberedCircle n={String(i + 1).padStart(2, "0")} />
                  <div className="mt-6 flex items-start gap-3">
                    <Icon
                      className="mt-1 h-6 w-6 shrink-0 text-[var(--coral)]"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <h3 className="text-[18px] font-semibold leading-tight text-[var(--ink)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Single service deep-dive */}
      <ServiceDeepDive
        service={studentLoanService}
        imageOnRight={true}
        surface="white"
      />

      {/* 6. Meet the Team */}
      <section className="section bg-[var(--surface-deep)]">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <StickerTag>The team</StickerTag>
            <h2 className="mt-5 text-balance">
              Meet the people who&rsquo;ll handle your case.
            </h2>
            <p className="mt-5 text-lead">
              You won&rsquo;t be routed through a call center. The strategist
              you meet on your consultation is the strategist who runs your
              plan.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why choose us */}
      <section className="section bg-[var(--surface)]">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <StickerTag>Why ClearPath</StickerTag>
            <h2 className="mt-5 text-balance">
              Why borrowers trust ClearPath with their federal student loans.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-md bg-white p-7 shadow-card"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--coral-soft)]">
                    <Icon
                      className="h-5 w-5 text-[var(--coral)]"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 text-[19px] font-semibold text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Stats strip */}
      <StatsStrip />

      {/* 9. Testimonials */}
      <section className="section bg-[var(--surface)]">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <StickerTag>Client stories</StickerTag>
            <h2 className="mt-5 text-balance">What our clients say.</h2>
            <p className="mt-5 text-lead">
              {/* PLACEHOLDER — replace placeholder testimonial copy in lib/content/testimonials.ts with real, written-permission quotes before launch. */}
              Quotes are placeholders until real client reviews are added.
            </p>
          </div>
          <div className="mt-14">
            <TestimonialCarousel items={testimonials} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="text-[15px] font-semibold text-[var(--coral)] underline-gold"
            >
              Read more reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Blog teaser */}
      <section className="section bg-[var(--surface-deep)]">
        <div className="container max-w-content">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <StickerTag>Insights</StickerTag>
              <h2 className="mt-5 text-balance">Latest from the blog.</h2>
            </div>
            <Link
              href="/blog"
              className="text-[15px] font-semibold text-[var(--ink)] underline-gold"
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

      {/* 11. Final CTA band */}
      <CtaBand
        heading="Ready for a real student loan plan?"
        subheading="Book a free 30-minute consultation. We'll pull your federal loan record, model the math, and tell you the next step — whether you hire us or not."
      />
    </>
  );
}
