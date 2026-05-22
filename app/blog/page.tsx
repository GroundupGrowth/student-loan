import { BlogCard } from "@/components/site/blog-card";
import { CtaBand } from "@/components/site/cta-band";
import { blogPosts } from "@/lib/content/blog-posts";

export const metadata = {
  title: "Insights on debt, credit, and building wealth",
  description:
    "Plain-English writing on student loan strategy, credit repair, Infinite Banking, and tax planning, from the ClearPath team.",
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Blog</span>
            <h1 className="mt-4 text-balance">
              Insights on debt, credit, and building wealth.
            </h1>
            <p className="mt-5 text-body text-[var(--slate)]">
              The kind of finance writing we wish existed when we started — no
              hype, no jargon, no affiliate links to questionable products.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
