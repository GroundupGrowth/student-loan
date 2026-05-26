"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TestimonialCard } from "@/components/site/testimonial-card";
import type { Testimonial } from "@/lib/content/testimonials";

const tilts: Array<"left" | "none" | "right"> = ["left", "none", "right"];

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = React.useState(0);
  const length = items.length;

  const goTo = (i: number) => setIndex(((i % length) + length) % length);

  return (
    <div className="relative">
      {/* Desktop / tablet: 3-up grid with subtle tilts */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6">
        {items.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} tilt={tilts[i % tilts.length]} />
        ))}
      </div>

      {/* Mobile: single card with controls */}
      <div className="md:hidden">
        <TestimonialCard testimonial={items[index]} />
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <ul className="flex items-center gap-2" aria-hidden="true">
            {items.map((_, i) => (
              <li
                key={i}
                className={
                  "h-2 w-2 rounded-full " +
                  (i === index ? "bg-[var(--coral)]" : "bg-[var(--line)]")
                }
              />
            ))}
          </ul>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
