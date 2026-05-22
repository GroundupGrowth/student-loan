"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Dismissable cookie notice. Stores the dismissal in localStorage to avoid
 * re-showing it. Marked for legal review — the actual disclosure language,
 * cookie categories, and consent flow should be defined by counsel before
 * launch.
 */
export function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem("cp:cookies-dismissed");
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem("cp:cookies-dismissed", "1");
    } catch {
      // localStorage may be disabled; we still hide the banner for the session.
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-3xl rounded-xl border border-[var(--line)] bg-white p-4 shadow-[0_18px_40px_-22px_rgba(15,42,68,0.5)] md:p-5"
    >
      <div className="flex items-start gap-4">
        <p className="flex-1 text-[14px] leading-relaxed text-[var(--ink)]">
          {/* PLACEHOLDER — legal language for cookie disclosure goes here. */}
          We use cookies to keep this site running, remember your preferences,
          and understand how visitors use it. By continuing, you agree to our{" "}
          <a href="/privacy-policy" className="underline-gold font-medium text-[var(--navy)]">
            privacy policy
          </a>
          .
        </p>
        <Button size="sm" onClick={dismiss}>
          Got it
        </Button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss cookie notice"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[var(--slate)] hover:bg-[var(--cream)]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
