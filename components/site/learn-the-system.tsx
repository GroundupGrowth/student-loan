import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { StickerTag } from "@/components/site/sticker-tag";
import { WikiCard } from "@/components/site/wiki-card";
import { getRelatedEntries } from "@/lib/content/wiki";

/**
 * "Learn the system" — wiki teaser block. Used on the home page and the
 * service page to push internal link authority into the SEO-focused wiki
 * hub. Renders 6 popular entries by default.
 */

const DEFAULT_FEATURED = [
  "pslf",
  "save-plan",
  "paye-plan",
  "ibr-plan",
  "borrowers-defense",
  "nslds",
];

export function LearnTheSystem({
  featured = DEFAULT_FEATURED,
  surface = "white",
}: {
  featured?: string[];
  surface?: "white" | "cream";
}) {
  const entries = getRelatedEntries(featured);
  if (entries.length === 0) return null;

  return (
    <section
      className={
        "section " +
        (surface === "cream"
          ? "bg-[var(--surface-deep)]"
          : "bg-[var(--surface)]")
      }
    >
      <div className="container max-w-content">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-xl">
            <StickerTag>Learn the system</StickerTag>
            <h2 className="mt-5 text-balance">
              The federal student loan rulebook, explained.
            </h2>
            <p className="mt-5 text-lead">
              Short, plain-English explainers for every plan, program, and
              term you&rsquo;ll encounter. No jargon, no sales pitch.
            </p>
          </div>
          <Link
            href="/wiki"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--ink)] underline-gold"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Browse the full wiki
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <WikiCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
