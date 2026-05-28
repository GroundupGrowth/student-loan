import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.studentloanclarity.com";

/**
 * Robots config. Served at /robots.txt. Update NEXT_PUBLIC_SITE_URL in
 * Vercel env vars to your real domain so the sitemap reference resolves
 * correctly.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow internal Next.js artifacts; the api directory doesn't
        // exist yet but is listed pre-emptively in case it's added.
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
