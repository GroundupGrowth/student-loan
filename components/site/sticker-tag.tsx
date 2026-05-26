import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  /** Optional small numbered circle prefix ("01", "02", "03"). */
  number?: string;
};

/**
 * Sticker tag — replaces the v1 navy/serif eyebrow. Pill-shaped, coral-soft
 * fill, coral text. Optionally prefixed with a small numbered indicator.
 */
export function StickerTag({ className, children, number, ...props }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[var(--coral-soft)] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--coral-deep)]",
        className,
      )}
      {...props}
    >
      {number && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--coral)] px-1.5 text-[10px] font-bold tracking-normal text-white">
          {number}
        </span>
      )}
      {children}
    </span>
  );
}
