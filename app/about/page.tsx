import Link from "next/link";
import { Award, BookOpen, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { TeamCard } from "@/components/site/team-card";
import { PHONE, PHONE_DISPLAY } from "@/lib/config";
import { team } from "@/lib/content/team";

export const metadata = {
  title: "About ClearPath",
  description:
    "ClearPath is a U.S. debt-relief and personal-finance consulting firm. We help families lower student loan payments, clean up credit, build wealth, and protect what they build.",
};

const values = [
  {
    icon: Compass,
    title: "Plain English, every time",
    description:
      "If a strategist can't explain a strategy to you without jargon, it's the wrong strategy. We translate the federal student loan rules, the tax code, and the insurance contract into the version that makes sense.",
  },
  {
    icon: BookOpen,
    title: "Education before action",
    description:
      "We won't ask you to sign anything until you understand the why. Most calls end with a clear next step you can take whether you hire us or not.",
  },
  {
    icon: Award,
    title: "Flat fees, no hidden cuts",
    description:
      "Every engagement is quoted up front, in writing. No percentage-of-savings, no contingency tricks, no surprise add-ons.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container max-w-content">
          <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="eyebrow">About ClearPath</span>
              <h1 className="mt-4 text-balance">
                The firm your accountant wishes existed.
              </h1>
              <p className="mt-5 max-w-xl font-serif text-[20px] leading-snug text-[var(--slate)]">
                We sit between you and the federal student loan system, the
                credit bureaus, the IRS, and the insurance industry — so you
                only have to deal with one team to get a plan that actually
                holds together.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/book-a-consultation">Book Free Consultation</Link>
                </Button>
                <a
                  href={`tel:${PHONE}`}
                  className="text-[15px] font-medium text-[var(--navy)] underline-gold"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <PlaceholderImage
              label="About hero — founder portrait or office scene. Warm, slightly desaturated."
              aspect="portrait"
            />
          </div>
        </div>
      </section>

      {/* Founder's story */}
      <section className="section surface-cream">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">The founder&apos;s story</span>
            <h2 className="mt-3 text-balance">Why this firm exists.</h2>
            <div className="mt-6 space-y-5 text-body text-[var(--ink)]">
              {/* PLACEHOLDER — replace the following paragraphs with the founder's real bio, in their own words. Keep the voice plainspoken. */}
              <p>
                <span className="rounded-md bg-white px-2 py-0.5 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">
                  Placeholder
                </span>{" "}
                — replace the paragraphs below with the founder&apos;s real
                story before launch. Keep it short, specific, and human. What
                made you start this firm? What did you see clients getting
                wrong? What kind of work didn&apos;t exist that you wanted to
                build?
              </p>
              <p>
                After years of watching friends and family get pushed into the
                wrong student loan plan, charged for credit fixes that never
                showed up, and sold insurance products they didn&apos;t
                understand, our founder built ClearPath as the firm they wished
                they could refer people to.
              </p>
              <p>
                The work is unglamorous: pulling records, modeling numbers,
                filing paperwork, following up with servicers. But the outcome
                — a lower payment, a higher score, a clear plan — is the kind
                of thing that quietly changes a family&apos;s trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Mission</span>
            <h2 className="mt-3 text-balance">
              Custom plans. Clear guidance. A stronger financial future.
            </h2>
            <p className="mt-5 text-body text-[var(--slate)]">
              We exist to give middle-class families and professionals access
              to the kind of integrated financial guidance that used to be
              reserved for high-net-worth clients — without the country-club
              membership.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-base h-full p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--cream)]">
                    <Icon
                      className="h-5 w-5 text-[var(--navy)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 font-serif text-[20px] text-[var(--navy)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section surface-cream">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our team</span>
            <h2 className="mt-3 text-balance">
              The people who&apos;ll actually work on your case.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Credentials & licensing</span>
            <h2 className="mt-3 text-balance">Who we are, on paper.</h2>
            <div className="mt-6 rounded-xl border border-dashed border-[var(--gold)]/60 bg-[var(--cream)] p-6 text-[15px] leading-relaxed text-[var(--ink)]">
              {/* PLACEHOLDER — replace with actual licenses, designations, BBB rating, state registrations, and E&O coverage before launch. */}
              <p className="font-medium text-[var(--navy)]">
                Placeholder — replace before launch.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[var(--slate)]">
                <li>State insurance licenses (list states served)</li>
                <li>FINRA / SEC registrations (if applicable)</li>
                <li>Designations such as CFP, ChFC, EA, or CPA on staff</li>
                <li>BBB rating and accreditation status</li>
                <li>Errors & Omissions insurance carrier</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
