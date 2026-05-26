import Link from "next/link";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { StickerTag } from "@/components/site/sticker-tag";
import { PaymentCalculator } from "@/components/calculator/payment-calculator";

export const metadata = {
  title: "Student loan payment calculator",
  description:
    "Compare your monthly payment under the Standard, SAVE, PAYE, and IBR federal student loan plans. Free, no signup, takes 30 seconds.",
};

export default function CalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--surface)] pt-12 pb-10 md:pt-20 md:pb-14">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <StickerTag>Free tool</StickerTag>
            <h1 className="mt-5">
              Compare your federal student loan payments.
            </h1>
            <p className="mt-6 text-lead">
              Five inputs. We&rsquo;ll estimate your monthly payment under the
              Standard 10-year plan and the three main income-driven plans —
              SAVE, PAYE, and IBR.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-md border border-[var(--coral-soft)] bg-[var(--coral-soft)] p-4 text-left md:p-5">
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--coral)] text-white">
              <Info className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <p className="text-[14px] leading-relaxed text-[var(--ink)]">
              <span className="font-semibold">Estimates only.</span> Based on
              2025 HHS Federal Poverty Guidelines and current federal
              repayment-plan formulas for the 48 contiguous states and DC.
              Not financial advice. Real numbers depend on your loan types,
              filing status, PSLF eligibility, and other factors a licensed
              strategist can review with you on a{" "}
              <Link
                href="/book-a-consultation"
                className="font-semibold text-[var(--coral-deep)] underline-offset-4 hover:underline"
              >
                free consultation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[var(--surface)] pb-20 md:pb-28">
        <div className="container max-w-content">
          <PaymentCalculator />
        </div>
      </section>

      {/* How the math works */}
      <section className="section bg-[var(--surface-deep)]">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl">
            <StickerTag>How the math works</StickerTag>
            <h2 className="mt-5">What this calculator does (and doesn&rsquo;t).</h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-md bg-white p-6 shadow-card">
                <h3 className="text-[18px] font-semibold">What we model</h3>
                <ul className="mt-3 space-y-2 text-[15px] text-[var(--ink-soft)]">
                  <li>Standard 10-year amortized payment</li>
                  <li>SAVE plan (5% undergrad / 10% grad of discretionary, above 225% poverty line)</li>
                  <li>PAYE (10% of discretionary, above 150% poverty, capped at Standard)</li>
                  <li>IBR for new borrowers (10% of discretionary, capped at Standard)</li>
                </ul>
              </div>
              <div className="rounded-md bg-white p-6 shadow-card">
                <h3 className="text-[18px] font-semibold">What we skip</h3>
                <ul className="mt-3 space-y-2 text-[15px] text-[var(--ink-soft)]">
                  <li>Loan-by-loan input (weighted average is enough for an estimate)</li>
                  <li>Filing-status election (married filing separately changes IDR math)</li>
                  <li>PSLF qualifying-payment count (case-by-case)</li>
                  <li>Capitalized interest, deferment / forbearance windows</li>
                  <li>Older-borrower IBR (15% rate, 25-year forgiveness)</li>
                  <li>SAVE litigation freeze and recent rule changes</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-[15px] leading-relaxed text-[var(--ink-soft)]">
              For your real numbers — across every program you qualify for,
              including PSLF, Borrower&rsquo;s Defense, and Disability Discharge
              — a licensed ClearPath strategist will pull your full NSLDS
              record on a free 30-minute consultation and model every option
              against your actual situation.
            </p>

            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/book-a-consultation">Book a free consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
