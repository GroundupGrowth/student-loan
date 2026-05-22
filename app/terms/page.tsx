import { CtaBand } from "@/components/site/cta-band";
import { SITE_NAME } from "@/lib/config";

export const metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-4 text-balance">Terms of Use</h1>

            <div className="mt-6 rounded-md border border-dashed border-[var(--gold)]/60 bg-[var(--cream)] p-4 text-[14px] text-[var(--slate)]">
              PLACEHOLDER — replace this entire page with counsel-reviewed
              terms of use language before launch. The boilerplate below is for
              layout purposes only and is not legal advice.
            </div>

            <div className="mt-10 space-y-8 text-body">
              <section>
                <h2 className="font-serif text-[24px]">1. Acceptance of terms</h2>
                <p className="mt-3">
                  By accessing this site, you agree to these terms. If you do
                  not agree, do not use the site.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">2. Informational content</h2>
                <p className="mt-3">
                  Content on this site is for general informational purposes
                  only and is not personal financial, legal, or tax advice. A
                  consultation does not create a client relationship until a
                  written engagement is signed by both parties.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">3. No guarantees</h2>
                <p className="mt-3">
                  Outcomes vary based on individual circumstances. We do not
                  guarantee specific results such as a payment amount, score
                  change, or forgiveness eligibility.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">4. Intellectual property</h2>
                <p className="mt-3">
                  All content on this site is owned by {SITE_NAME} unless
                  otherwise indicated. Do not reproduce or redistribute
                  materials without written permission.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">5. Governing law</h2>
                <p className="mt-3">
                  These terms are governed by the laws of the state in which
                  the firm is registered, without regard to its conflict of
                  laws provisions.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
