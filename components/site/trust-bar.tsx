import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { PlaceholderAvatar } from "@/components/site/placeholder-avatar";
import { STATS } from "@/lib/config";

const avatars = ["CM", "DL", "RP", "JS"];

export function TrustBar() {
  return (
    <section className="border-y border-[var(--line)] surface-cream">
      <div className="container max-w-content flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-6">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3" aria-hidden="true">
            {avatars.map((initials) => (
              <PlaceholderAvatar
                key={initials}
                initials={initials}
                size="sm"
                className="ring-2 ring-[var(--cream)]"
              />
            ))}
          </div>
          <div>
            <p className="font-serif text-[20px] text-[var(--navy)]">
              {STATS.satisfiedClients} Satisfied Clients
            </p>
            <p className="text-[13px] text-[var(--slate)]">
              Real people, real plans, no scripts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1" aria-label={`Rated ${STATS.averageRating}`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]"
                aria-hidden="true"
              />
            ))}
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--navy)] underline-gold"
          >
            Read Reviews
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
