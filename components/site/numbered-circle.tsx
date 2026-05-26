import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  n: number | string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * Coral filled circle with a step number inside. Used in "How it works"
 * cards and other numbered indicators per the v2 design.
 */
export function NumberedCircle({ n, size = "md", className }: Props) {
  const dim =
    size === "sm" ? "h-8 w-8 text-[14px]" : size === "lg" ? "h-12 w-12 text-[18px]" : "h-10 w-10 text-[15px]";
  return (
    <span
      aria-hidden="true"
      className={cn(
        dim,
        "inline-flex items-center justify-center rounded-full bg-[var(--coral)] font-bold text-white",
        className,
      )}
    >
      {n}
    </span>
  );
}
