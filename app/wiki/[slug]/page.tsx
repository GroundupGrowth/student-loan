import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { StickerTag } from "@/components/site/sticker-tag";
import { WikiCard } from "@/components/site/wiki-card";
import {
  getRelatedEntries,
  getWikiEntry,
  wikiCategories,
  wikiEntries,
} from "@/lib/content/wiki";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return wikiEntries.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const entry = getWikiEntry(params.slug);
  if (!entry) return { title: "Term not found" };
  return {
    title: `${entry.title} — Wiki`,
    description: entry.excerpt,
    keywords: entry.keywords,
  };
}

export default function WikiEntryPage({ params }: { params: Params }) {
  const entry = getWikiEntry(params.slug);
  if (!entry) notFound();

  const related = getRelatedEntries(entry.related);
  const category = wikiCategories.find((c) => c.key === entry.category);

  return (
    <>
      <article className="bg-[var(--surface)] pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="container max-w-content">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[13px] text-[var(--ink-soft)]"
          >
            <Link href="/" className="hover:text-[var(--ink)]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link href="/wiki" className="hover:text-[var(--ink)]">
              Wiki
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-[var(--ink)]">{entry.shortTitle ?? entry.title}</span>
          </nav>

          <div className="mx-auto mt-8 max-w-3xl">
            {category && (
              <StickerTag>{category.title}</StickerTag>
            )}
            <h1 className="mt-5 text-[clamp(2rem,4vw,3rem)]">{entry.title}</h1>
            <p className="mt-5 text-lead">{entry.excerpt}</p>
            <p className="mt-4 text-[13px] text-[var(--ink-soft)]">
              Last updated {entry.updated}
            </p>
          </div>

          <div
            className="wiki-body mx-auto mt-12 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: entry.body }}
          />

          {/* Inline CTA card */}
          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-[var(--coral-soft)] p-7 md:p-9">
            <h3 className="text-[22px] font-bold text-[var(--ink)]">
              Want a plan tailored to your situation?
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]">
              The wiki explains the rules. We apply them to your real
              numbers. A licensed strategist will pull your full federal
              loan record and walk you through every program you qualify
              for in plain English.
            </p>
            <div className="mt-5">
              <Button asChild>
                <Link href="/book-a-consultation">Book a free consultation</Link>
              </Button>
            </div>
          </div>

          {/* Related entries */}
          {related.length > 0 && (
            <div className="mx-auto mt-16 max-w-5xl">
              <h2 className="text-[24px]">Related terms</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <WikiCard key={r.slug} entry={r} />
                ))}
              </div>
            </div>
          )}

          <div className="mx-auto mt-12 max-w-3xl">
            <Link
              href="/wiki"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all terms
            </Link>
          </div>
        </div>

        {/* Inline body typography */}
        <style>{`
          .wiki-body p {
            font-size: 17px;
            line-height: 1.7;
            color: var(--ink);
            margin-bottom: 1.25rem;
          }
          .wiki-body h2 {
            font-size: 1.625rem;
            line-height: 1.2;
            color: var(--ink);
            margin-top: 2.5rem;
            margin-bottom: 0.75rem;
            font-weight: 700;
            letter-spacing: -0.015em;
          }
          .wiki-body h3 {
            font-size: 1.25rem;
            line-height: 1.3;
            color: var(--ink);
            margin-top: 1.75rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }
          .wiki-body ul, .wiki-body ol {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
            font-size: 17px;
            line-height: 1.7;
            color: var(--ink);
          }
          .wiki-body ul {
            list-style: disc;
          }
          .wiki-body ol {
            list-style: decimal;
          }
          .wiki-body li {
            margin-bottom: 0.5rem;
          }
          .wiki-body a {
            color: var(--coral-deep);
            font-weight: 600;
            text-underline-offset: 3px;
          }
          .wiki-body a:hover {
            text-decoration: underline;
            text-decoration-color: var(--coral);
          }
          .wiki-body strong {
            font-weight: 700;
            color: var(--ink);
          }
        `}</style>
      </article>

      <CtaBand
        heading="Reading is a start. We do the rest."
        subheading="Book a free 30-minute consultation. We'll pull your federal loan record, model the math, and tell you exactly what to do next."
      />
    </>
  );
}
