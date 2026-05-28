import { CtaBand } from "@/components/site/cta-band";
import { SITE_NAME } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-4 text-balance">Privacy Policy</h1>

            <div className="mt-6 rounded-md border border-dashed border-[var(--gold)]/60 bg-[var(--cream)] p-4 text-[14px] text-[var(--slate)]">
              PLACEHOLDER — replace this entire page with counsel-reviewed
              privacy policy language before launch. The boilerplate below is
              for layout purposes only and is not legal advice.
            </div>

            <div className="mt-10 space-y-8 text-body">
              <section>
                <h2 className="font-serif text-[24px]">1. Information we collect</h2>
                <p className="mt-3">
                  We collect information you provide directly (name, email,
                  phone, message contents) and information collected
                  automatically (IP address, browser type, pages visited) via
                  standard analytics tools.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">2. How we use information</h2>
                <p className="mt-3">
                  We use your information to respond to inquiries, deliver the
                  services you&apos;ve engaged us for, and improve our website.
                  We do not sell personal information to third parties.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">3. Cookies</h2>
                <p className="mt-3">
                  We use cookies for site functionality and analytics. You can
                  disable cookies in your browser; some features may not work
                  as expected without them.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">4. Your rights</h2>
                <p className="mt-3">
                  Depending on your state of residence, you may have the right
                  to access, correct, or delete personal information we hold
                  about you. To exercise these rights, contact us via the
                  Contact page.
                </p>
              </section>
              <section>
                <h2 className="font-serif text-[24px]">5. Contact</h2>
                <p className="mt-3">
                  Questions about this policy? Reach us through the Contact
                  page. We respond within one business day.
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
