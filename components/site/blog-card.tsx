import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PlaceholderImage } from "@/components/site/placeholder-image";
import type { BlogPost } from "@/lib/content/blog-posts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-base card-hover group flex h-full flex-col overflow-hidden p-0">
      <PlaceholderImage
        label={`Hero image for: ${post.title}`}
        aspect="landscape"
        src={post.image}
        className="rounded-b-none border-0 border-b border-[var(--line)]"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-[13px] uppercase tracking-[0.16em] text-[var(--slate)]">
          {post.dateDisplay}
        </p>
        <h3 className="font-serif text-[20px] leading-snug text-[var(--navy)]">
          <Link href={`/blog/${post.slug}`} className="hover:text-[var(--gold)]">
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-[15px] leading-relaxed text-[var(--slate)]">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--navy)] underline-gold"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
