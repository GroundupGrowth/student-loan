import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/site/blog-card";
import { CtaBand } from "@/components/site/cta-band";
import { ServiceCard } from "@/components/site/service-card";
import { ServiceDeepDive } from "@/components/site/service-deep-dive";
import { StatsStrip } from "@/components/site/stats-strip";
import { TeamCard } from "@/components/site/team-card";
import { TestimonialCarousel } from "@/components/site/testimonial-carousel";
import { TrustBar } from "@/components/site/trust-bar";
import { VslPlaceholder } from "@/components/site/vsl-placeholder";
import { ShieldCheck, Users, FileCheck } from "lucide-react";

import { blogPosts } from "@/lib/content/blog-posts";
import { services } from "@/lib/content/services";
import { team } from "@/lib/content/team";
import { testimonials } from "@/lib/content/testimonials";

export const metadata = {
  title: "Custom plans. Clear guidance. A stronger financial future.",
  description:
    "Lower your student loan payment, clean up your credit, build wealth on your terms, and protect what you build. Book a free 30-minute consultation with a licensed strategist.",
};

const whyChoose = [
  {
    icon: Users,
    title: "20 Years of Combined Experience",
    description:
      "Our strategists have spent careers inside the federal student loan system, credit reporting, and high-net-worth planning. You get all of it on one team.",
  },
  {
    icon: FileCheck,
    title: "Personalized Strategy, Not Scripts",
    description:
      "Every plan starts with your numbers — loans, credit reports, income, goals. We don't recommend anything we wouldn't put our own family in.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Transparent, No Hidden Fees",
    description:
      "Flat fees quoted up front, no percentage-of-savings tricks, no surprise charges. If a service doesn't fit you, we'll say so on the call.",
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
              <span className="eyebrow">Debt relief & financial strategy</span>
              <h1 className="mt-4 text-balance">
                Get out of debt. Build real wealth. Sleep better.
              </h1>
              <p className="mt-5 max-w-xl font-serif text-[20px] leading-snug text-[var(--slate)] md:text-[22px]">
                A licensed strategist reviews your student loans, credit, and
                long-term plan — then walks you through every option in plain
                English. No scripts. No pressure.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/book-a-consultation">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/about">Learn More</Link>
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

      {/* 3. Services overview */}
      <section id="services" className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Services</span>
            <h2 className="mt-3 text-balance">
              Solve every financial problem under one roof.
            </h2>
            <p className="mt-4 text-body text-[var(--slate)]">
              Four practices, one team. Most clients start in one area and add
              another within the first year — because every part of your
              financial life touches the others.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service deep-dives — alternating */}
      {services.map((s, i) => (
        <ServiceDeepDive
          key={s.slug}
          service={s}
          imageOnRight={i % 2 === 0}
          surface={i % 2 === 0 ? "white" : "cream"}
        />
      ))}

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
              Why families and professionals trust ClearPath.
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
      <CtaBand />
    </>
  );
}
