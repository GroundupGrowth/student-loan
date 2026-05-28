import Link from "next/link";

import { CtaBand } from "@/components/site/cta-band";
import { StickerTag } from "@/components/site/sticker-tag";
import { WikiCard } from "@/components/site/wiki-card";
import {
  getEntriesByCategory,
  wikiCategories,
  wikiEntries,
} from "@/lib/content/wiki";

export const metadata = {
  title: "Student loan wiki — plans, programs, and key terms",
  description:
    "Plain-English explainers for every federal student loan program, repayment plan, and term you'll encounter. IDR plans, PSLF, Borrower's Defense, NSLDS, and more.",
};

export default function WikiIndexPage() {
  return (
    <>
      <section className="bg-[var(--surface)] pt-12 pb-10 md:pt-20 md:pb-14">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <StickerTag>Reference</StickerTag>
            <h1 className="mt-5">
              The federal student loan wiki.
            </h1>
            <p className="mt-6 text-lead">
              Plain-English explainers for every plan, program, and key term —
              from <Link href="/wiki/save-plan" className="font-semibold text-[var(--ink)] underline-gold">SAVE</Link>{" "}
              and <Link href="/wiki/pslf" className="font-semibold text-[var(--ink)] underline-gold">PSLF</Link>{" "}
              to <Link href="/wiki/discretionary-income" className="font-semibold text-[var(--ink)] underline-gold">discretionary income</Link>{" "}
              and the <Link href="/wiki/nslds" className="font-semibold text-[var(--ink)] underline-gold">NSLDS</Link>.
              Updated regularly. Written by the same people who run our consultations.
            </p>
            <p className="mt-3 text-[14px] text-[var(--ink-soft)]">
              {wikiEntries.length} entries · last updated {wikiEntries[0]?.updated ?? "2026"}
            </p>
          </div>
        </div>
      </section>

      {wikiCategories.map((cat) => {
        const entries = getEntriesByCategory(cat.key);
        if (entries.length === 0) return null;
        return (
          <section
            key={cat.key}
            className="bg-[var(--surface)] pb-16 md:pb-20 last:bg-[var(--surface-deep)] last:pb-20 last:pt-20 md:last:pt-24 md:last:pb-28 odd:bg-[var(--surface-deep)] odd:py-16 md:odd:py-20"
          >
            <div className="container max-w-content">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-[26px] md:text-[32px]">{cat.title}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-[var(--ink-soft)]">
                  {cat.description}
                </p>
              </div>
              <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {entries.map((entry) => (
                  <WikiCard key={entry.slug} entry={entry} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        heading="Reading the wiki is a start. We do the rest."
        subheading="Book a free 30-minute consultation. We'll pull your federal loan record, model every program from this wiki against your actual numbers, and tell you the next step."
      />
    </>
  );
}
