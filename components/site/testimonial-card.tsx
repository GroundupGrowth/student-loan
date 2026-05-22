import { Quote, Star } from "lucide-react";

import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card-base flex h-full flex-col gap-5 p-7">
      <Quote
        className="h-6 w-6 text-[var(--gold)]"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <blockquote className="flex-1 text-[16px] leading-relaxed text-[var(--ink)]">
        “{testimonial.quote}”
      </blockquote>
      <div className="flex items-center justify-between border-t border-[var(--line)] pt-4">
        <figcaption className="text-[13px] uppercase tracking-[0.16em] text-[var(--slate)]">
          {testimonial.attribution}
        </figcaption>
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
