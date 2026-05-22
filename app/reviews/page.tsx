import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { REVIEW_FORM_URL, STATS } from "@/lib/config";
import { allReviews } from "@/lib/content/testimonials";

export const metadata = {
  title: "What our clients say",
  description:
    "Real client reviews of ClearPath Financial Freedom. Stories from people who lowered their student loan payments, cleaned up their credit, and built a real plan.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Reviews</span>
            <h1 className="mt-4 text-balance">What our clients say.</h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[15px] text-[var(--slate)]">
              <div className="flex items-center gap-1" aria-label={`Rated ${STATS.averageRating}`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span>
                <span className="font-medium text-[var(--ink)]">
                  {STATS.averageRating}
                </span>{" "}
                from {STATS.reviewCount} client reviews
              </span>
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-body text-[var(--slate)]">
              We&apos;ve replaced every quote on this page with a clearly-marked
              placeholder. Before launch, only quotes from real clients with
              written permission will be displayed.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allReviews.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--cream)] p-8 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-serif text-[24px] text-[var(--navy)]">
                Worked with us? Tell us how it went.
              </h2>
              <p className="mt-2 max-w-xl text-[15px] text-[var(--slate)]">
                Your honest review helps other families decide whether this is
                the right place for them.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href={REVIEW_FORM_URL}>
                Leave a Review
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
