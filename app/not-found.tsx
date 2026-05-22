import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-content text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-4 text-balance">We couldn&apos;t find that page.</h1>
        <p className="mx-auto mt-5 max-w-xl text-body text-[var(--slate)]">
          The link may be broken, or the page may have moved. Head back home or
          book a consultation — we&apos;ll point you in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/book-a-consultation">Book Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
