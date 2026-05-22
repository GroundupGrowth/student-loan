import Link from "next/link";
import { ArrowRight, GraduationCap, Landmark, Scale, ShieldCheck } from "lucide-react";

import type { Service } from "@/lib/content/services";

const iconMap = {
  GraduationCap,
  ShieldCheck,
  Landmark,
  Scale,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-base card-hover group flex h-full flex-col gap-5 p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-serif text-[15px] tracking-wide text-[var(--gold)]">
          {service.number}
        </span>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--cream)]">
          <Icon
            className="h-5 w-5 text-[var(--navy)]"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </span>
      </div>
      <div>
        <h3 className="font-serif text-[22px] text-[var(--navy)]">{service.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
          {service.shortDescription}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-medium text-[var(--navy)] underline-gold">
        Learn More
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
