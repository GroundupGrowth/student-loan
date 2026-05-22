import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PHONE, PHONE_DISPLAY } from "@/lib/config";

type Props = {
  heading?: string;
  subheading?: string;
};

export function CtaBand({
  heading = "Ready for a clear plan?",
  subheading = "Book a free 30-minute consultation. No pressure, no obligation.",
}: Props) {
  return (
    <section className="surface-navy">
      <div className="container max-w-content py-14 text-center md:py-20">
        <h2 className="mx-auto max-w-3xl text-balance">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-white/80">
          {subheading}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="onNavy" size="lg">
            <Link href="/book-a-consultation">Book Free Consultation</Link>
          </Button>
          <Button asChild variant="onNavyOutline" size="lg">
            <a href={`tel:${PHONE}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
