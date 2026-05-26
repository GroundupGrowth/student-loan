import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * The single playful concession of the v2 design: three hand-drawn-looking
 * SVG accents in coral. Use sparingly per design.md.
 */

/** A hand-drawn underline swoosh — sits beneath one key phrase in a headline. */
export function UnderlineSwoosh({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -bottom-1.5 left-0 right-0 h-3 w-full text-[var(--coral)]",
        className,
      )}
      {...rest}
    >
      <path d="M3 7 C 38 1, 78 11, 128 5 S 186 9, 197 3" />
    </svg>
  );
}

/** A small curved arrow doodle, used to connect "How it works" cards. */
export function ArrowDoodle({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("text-[var(--coral)]", className)}
      {...rest}
    >
      <path d="M3 15 C 14 4, 32 4, 48 15" />
      <path d="M40 8 L 48 15 L 42 22" />
    </svg>
  );
}

/** A small coral starburst — used as a "featured" / "new" sticker stamp. */
export function StarBurst({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      aria-hidden="true"
      className={cn("text-[var(--coral)]", className)}
      {...rest}
    >
      <path d="M20 0 L23 13 L36 8 L26 18 L40 20 L26 22 L36 32 L23 27 L20 40 L17 27 L4 32 L14 22 L0 20 L14 18 L4 8 L17 13 Z" />
    </svg>
  );
}
