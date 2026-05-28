import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/content/blog-posts";
import { services } from "@/lib/content/services";
import { wikiEntries } from "@/lib/content/wiki";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.studentloanclarity.com";

/**
 * Sitemap generator. Run automatically by Next.js on every build and served
 * at /sitemap.xml. Update NEXT_PUBLIC_SITE_URL in Vercel env vars to your
 * real production domain before launch.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1.0, lastModified: now },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${baseUrl}/calculator`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${baseUrl}/wiki`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.7, lastModified: now },
    { url: `${baseUrl}/reviews`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5, lastModified: now },
    { url: `${baseUrl}/book-a-consultation`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: now,
  }));

  const wikiRoutes: MetadataRoute.Sitemap = wikiEntries.map((e) => ({
    url: `${baseUrl}/wiki/${e.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: new Date(e.updated),
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...wikiRoutes, ...blogRoutes];
}
