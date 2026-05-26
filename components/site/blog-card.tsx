import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PlaceholderImage } from "@/components/site/placeholder-image";
import type { BlogPost } from "@/lib/content/blog-posts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="relative">
        <PlaceholderImage
          label={`Hero image for: ${post.title}`}
          aspect="landscape"
          src={post.image}
          className="rounded-none rounded-t-lg border-0"
        />
        <span className="absolute left-4 bottom-4 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] shadow-card">
          {post.dateDisplay}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="text-[20px] font-semibold leading-snug text-[var(--ink)]">
          <Link href={`/blog/${post.slug}`} className="hover:text-[var(--coral)]">
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--coral)] underline-gold"
        >
          Read More
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
