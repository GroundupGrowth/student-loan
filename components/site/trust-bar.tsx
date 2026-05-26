import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { PlaceholderAvatar } from "@/components/site/placeholder-avatar";
import { STATS } from "@/lib/config";

const avatars = ["CM", "DL", "RP", "JS"];

export function TrustBar() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface-deep)]">
      <div className="container max-w-content flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-6">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3" aria-hidden="true">
            {avatars.map((initials) => (
              <PlaceholderAvatar
                key={initials}
                initials={initials}
                size="sm"
                className="ring-[3px] ring-[var(--surface-deep)]"
              />
            ))}
          </div>
          <div>
            <p className="text-[18px] font-bold text-[var(--ink)]">
              {STATS.satisfiedClients} Satisfied Clients
            </p>
            <p className="text-[13px] text-[var(--ink-soft)]">
              Real people, real plans, no scripts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-1"
            aria-label={`Rated ${STATS.averageRating}`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[var(--coral)] text-[var(--coral)]"
                aria-hidden="true"
              />
            ))}
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--ink)] underline-gold"
          >
            Read Reviews
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
