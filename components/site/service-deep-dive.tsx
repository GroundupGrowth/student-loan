import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { StickerTag } from "@/components/site/sticker-tag";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/content/services";

type Props = {
  service: Service;
  imageOnRight?: boolean;
  surface?: "white" | "cream";
};

export function ServiceDeepDive({
  service,
  imageOnRight = false,
  surface = "white",
}: Props) {
  return (
    <section
      className={cn(
        "section",
        surface === "cream" ? "bg-[var(--surface-deep)]" : "bg-[var(--surface)]",
      )}
    >
      <div className="container max-w-content">
        <div
          className={cn(
            "grid items-center gap-10 md:gap-16 lg:grid-cols-2",
            imageOnRight ? "" : "lg:[&>div:first-child]:order-2",
          )}
        >
          <div>
            <StickerTag>The Service</StickerTag>
            <h2 className="mt-4 text-balance">{service.name}</h2>
            <p className="mt-3 text-lead">{service.outcomeSub}</p>
            <p className="mt-5 text-body">{service.deepDiveParagraph}</p>
            <ul className="mt-7 space-y-3">
              {service.deepDiveBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[16px]">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--coral-soft)] text-[var(--coral)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link href="/book-a-consultation">Book Your Call</Link>
              </Button>
              <Link
                href={`/services/${service.slug}`}
                className="text-[15px] font-semibold text-[var(--ink)] underline-gold"
              >
                See the full service →
              </Link>
            </div>
          </div>

          <div>
            <PlaceholderImage
              label={`Illustrative image for ${service.name}`}
              aspect="landscape"
              src={service.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
