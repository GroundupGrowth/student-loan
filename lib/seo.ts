import {
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE,
  SITE_NAME,
  SITE_SHORT_NAME,
} from "@/lib/config";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.studentloanclarity.com";

/** Absolute URL helper. Always use this for canonicals + JSON-LD URLs. */
export function absoluteUrl(path = "/"): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}

/** Site-wide Organization schema. Emitted once in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/og-default.png"),
    email: EMAIL,
    telephone: PHONE,
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL].filter(
      (u) => u && !u.startsWith("{{"),
    ),
    description:
      "Federal student loan consulting for U.S. borrowers. We pull your full loan picture, model every program you qualify for, and handle the paperwork.",
  };
}

/** Site-wide WebSite schema with a SearchAction so Google can render the sitelinks search box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

/** BreadcrumbList helper. Items in left→right order; last item is the current page. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/** Article schema for blog posts and wiki entries. */
export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(opts.url)}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(opts.url) },
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      "@type": "Organization",
      name: opts.author ?? SITE_NAME,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: opts.image ? [opts.image] : undefined,
  };
}

/** FAQPage schema — used on service / FAQ pages so Google can render FAQ-rich-result snippets. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
