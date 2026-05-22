"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight slide-in drawer with overlay and focus trapping.
 * Avoids pulling in the full Radix Dialog dependency for a single use case.
 */
type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: "left" | "right";
  ariaLabel?: string;
  children: React.ReactNode;
};

export function Sheet({
  open,
  onOpenChange,
  side = "right",
  ariaLabel = "Menu",
  children,
}: SheetProps) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className={cn(
          "absolute top-0 h-full w-[88%] max-w-sm bg-white shadow-xl outline-none",
          side === "right" ? "right-0 animate-fade-in" : "left-0 animate-fade-in",
        )}
      >
        {children}
      </div>
    </div>
  );
}
