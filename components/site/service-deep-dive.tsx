import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { cn } from "@/lib/utils";
import { SITE_SHORT_NAME } from "@/lib/config";
import type { Service } from "@/lib/content/services";

type Props = {
  service: Service;
  imageOnRight?: boolean;
  surface?: "white" | "cream";
};

export function ServiceDeepDive({ service, imageOnRight = false, surface = "white" }: Props) {
  return (
    <section className={cn("section", surface === "cream" && "surface-cream")}>
      <div className="container max-w-content">
        <div
          className={cn(
            "grid items-center gap-10 md:gap-16 lg:grid-cols-2",
            imageOnRight ? "" : "lg:[&>div:first-child]:order-2",
          )}
        >
          <div>
            <span className="eyebrow-gold">{SITE_SHORT_NAME}</span>
            <h2 className="mt-3 text-balance">{service.name}</h2>
            <p className="mt-3 font-serif text-[20px] leading-snug text-[var(--slate)]">
              {service.outcomeSub}
            </p>
            <p className="mt-5 text-body">{service.deepDiveParagraph}</p>
            <ul className="mt-6 space-y-3">
              {service.deepDiveBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[16px]">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link href="/book-a-consultation">Book Your Call</Link>
              </Button>
              <Link
                href={`/services/${service.slug}`}
                className="text-[15px] font-medium text-[var(--navy)] underline-gold"
              >
                Read full service →
              </Link>
            </div>
          </div>

          <div>
            <PlaceholderImage
              label={`${service.name} — replace with a real photo (consultation scene, document review, or office context)`}
              aspect="landscape"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
