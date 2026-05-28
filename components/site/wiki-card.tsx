import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { WikiEntry } from "@/lib/content/wiki";

export function WikiCard({ entry }: { entry: WikiEntry }) {
  return (
    <Link
      href={`/wiki/${entry.slug}`}
      className="group flex h-full flex-col gap-3 rounded-md border border-[var(--line)] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <h3 className="text-[17px] font-semibold leading-snug text-[var(--ink)] group-hover:text-[var(--coral)]">
        {entry.title}
      </h3>
      <p className="line-clamp-3 text-[14px] leading-relaxed text-[var(--ink-soft)]">
        {entry.excerpt}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--coral)]">
        Read
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
