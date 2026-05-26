import { Quote, Star } from "lucide-react";

import type { Testimonial } from "@/lib/content/testimonials";
import { cn } from "@/lib/utils";

type Props = {
  testimonial: Testimonial;
  /** Optional rotation for the wall-of-love sticker feel. */
  tilt?: "left" | "right" | "none";
};

export function TestimonialCard({ testimonial, tilt = "none" }: Props) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-5 rounded-lg bg-white p-7 shadow-card transition-transform duration-200 hover:rotate-0 hover:scale-[1.01]",
        tilt === "left" && "-rotate-[0.6deg]",
        tilt === "right" && "rotate-[0.6deg]",
      )}
    >
      <Quote
        className="h-6 w-6 text-[var(--coral)]"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <blockquote className="flex-1 text-[16px] leading-relaxed text-[var(--ink)]">
        “{testimonial.quote}”
      </blockquote>
      <div className="flex items-center justify-between border-t border-[var(--line)] pt-4">
        <figcaption className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          {testimonial.attribution}
        </figcaption>
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[var(--coral)] text-[var(--coral)]"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
