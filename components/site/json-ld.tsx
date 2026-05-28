/**
 * JSON-LD structured data helper.
 *
 * Renders a <script type="application/ld+json"> tag with the given schema
 * object. Google reads these to enrich search results with sitelinks,
 * FAQ snippets, breadcrumbs, and rich cards.
 *
 * Use one component instance per schema (Organization, Article, FAQPage,
 * BreadcrumbList, etc.). Multiple instances on the same page are fine and
 * recommended — Google parses each one independently.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
