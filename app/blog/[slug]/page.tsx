import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { BlogCard } from "@/components/site/blog-card";
import { CtaBand } from "@/components/site/cta-band";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { blogPosts, getPost } from "@/lib/content/blog-posts";

type Params = { slug: string };

// Required for `output: 'export'` static export.
export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="section">
        <div className="container max-w-content">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--slate)] hover:text-[var(--navy)]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>

          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-[13px] uppercase tracking-[0.16em] text-[var(--slate)]">
              {post.dateDisplay} · {post.author}
            </p>
            <h1 className="mt-3 text-balance">{post.title}</h1>
            <p className="mt-5 font-serif text-[20px] leading-snug text-[var(--slate)]">
              {post.excerpt}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <PlaceholderImage
              label={`Hero image for: ${post.title}`}
              aspect="landscape"
            />
          </div>

          <div
            className="prose-clearpath mx-auto mt-12 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <style>{`
            .prose-clearpath p {
              font-size: 17px;
              line-height: 1.7;
              color: var(--ink);
              margin-bottom: 1.25rem;
            }
            .prose-clearpath h2 {
              font-family: var(--font-serif);
              color: var(--navy);
              font-size: 1.75rem;
              line-height: 1.2;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
            }
            .prose-clearpath h3 {
              font-family: var(--font-serif);
              color: var(--navy);
              font-size: 1.25rem;
              line-height: 1.3;
              margin-top: 2rem;
              margin-bottom: 0.75rem;
            }
            .prose-clearpath a {
              color: var(--navy);
              text-decoration: underline;
              text-decoration-color: var(--gold);
              text-underline-offset: 3px;
            }
          `}</style>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section surface-cream">
          <div className="container max-w-content">
            <h2 className="text-balance">Keep reading.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
