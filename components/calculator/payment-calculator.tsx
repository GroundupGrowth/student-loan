"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StickerTag } from "@/components/site/sticker-tag";
import { calculate, formatCurrency, type CalcInput, type CalcResult } from "@/lib/calculator/idr";

const defaultInput: CalcInput = {
  balance: 50000,
  ratePercent: 6.5,
  annualIncome: 65000,
  familySize: 1,
  hasGradLoans: false,
};

export function PaymentCalculator() {
  const [input, setInput] = React.useState<CalcInput>(defaultInput);
  const [result, setResult] = React.useState<CalcResult | null>(null);
  const [touched, setTouched] = React.useState(false);

  const onChange = <K extends keyof CalcInput>(key: K, value: CalcInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  const onCalculate = () => {
    setTouched(true);
    setResult(calculate(input));
    // Scroll to results on mobile
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("calc-results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 60);
    }
  };

  const lowestPayment = result
    ? Math.min(...result.plans.map((p) => p.monthlyPayment))
    : null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
      {/* Inputs */}
      <div className="rounded-lg bg-white p-7 shadow-card md:p-9">
        <StickerTag>Your numbers</StickerTag>
        <h2 className="mt-4 text-[26px] font-bold">Tell us about your loans.</h2>
        <p className="mt-3 text-[15px] text-[var(--ink-soft)]">
          Five inputs. We&rsquo;ll estimate your monthly payment under four
          federal plans.
        </p>

        <div className="mt-7 space-y-5">
          <Field
            id="calc-balance"
            label="Federal student loan balance"
            help="The total you owe across all federal loans."
            prefix="$"
            value={input.balance}
            onChange={(v) => onChange("balance", v)}
            min={0}
            step={500}
          />
          <Field
            id="calc-rate"
            label="Weighted average interest rate"
            help="If you have multiple loans, estimate the average. Typical: 4%–8%."
            suffix="%"
            value={input.ratePercent}
            onChange={(v) => onChange("ratePercent", v)}
            min={0}
            max={20}
            step={0.1}
          />
          <Field
            id="calc-income"
            label="Annual household income (AGI)"
            help="From line 11 of your federal tax return."
            prefix="$"
            value={input.annualIncome}
            onChange={(v) => onChange("annualIncome", v)}
            min={0}
            step={1000}
          />

          <div>
            <label
              htmlFor="calc-family"
              className="block text-[14px] font-semibold text-[var(--ink)]"
            >
              Family size
            </label>
            <p className="mt-1 text-[13px] text-[var(--ink-soft)]">
              You + dependents claimed on your tax return.
            </p>
            <select
              id="calc-family"
              className="field mt-2"
              value={input.familySize}
              onChange={(e) => onChange("familySize", Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n}
                  {n === 8 ? "+" : ""} {n === 1 ? "person" : "people"}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start gap-3 rounded-md border border-[var(--line)] bg-[var(--surface-deep)] p-4">
            <input
              id="calc-grad"
              type="checkbox"
              checked={input.hasGradLoans}
              onChange={(e) => onChange("hasGradLoans", e.target.checked)}
              className="mt-1 h-4 w-4 accent-[var(--coral)]"
            />
            <label htmlFor="calc-grad" className="text-[14px] leading-relaxed">
              <span className="font-semibold text-[var(--ink)]">
                I have graduate or professional school loans
              </span>
              <span className="block text-[13px] text-[var(--ink-soft)]">
                Affects the SAVE plan estimate (10% vs 5% of discretionary).
              </span>
            </label>
          </div>

          <Button onClick={onCalculate} variant="stamp" size="lg" className="w-full">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Calculate my payments
          </Button>
        </div>
      </div>

      {/* Results */}
      <div id="calc-results">
        {!touched || !result ? (
          <EmptyState />
        ) : (
          <ResultPanel input={input} result={result} lowestPayment={lowestPayment} />
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  help,
  prefix,
  suffix,
  value,
  onChange,
  min,
  max,
  step,
}: {
  id: string;
  label: string;
  help?: string;
  prefix?: string;
  suffix?: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[14px] font-semibold text-[var(--ink)]">
        {label}
      </label>
      {help && (
        <p className="mt-1 text-[13px] text-[var(--ink-soft)]">{help}</p>
      )}
      <div className="relative mt-2">
        {prefix && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] text-[var(--ink-soft)]">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          className={`field ${prefix ? "pl-7" : ""} ${suffix ? "pr-9" : ""}`}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[15px] text-[var(--ink-soft)]">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-[var(--line)] bg-white/60 p-10 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--coral-soft)]">
        <Sparkles
          className="h-6 w-6 text-[var(--coral)]"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </span>
      <h2 className="mt-5 text-[22px] font-bold">Your estimates appear here.</h2>
      <p className="mt-3 max-w-sm text-[15px] text-[var(--ink-soft)]">
        Fill in your numbers on the left and hit <span className="font-semibold text-[var(--ink)]">Calculate my payments</span> to compare
        the four main federal repayment plans.
      </p>
    </div>
  );
}

function ResultPanel({
  input,
  result,
  lowestPayment,
}: {
  input: CalcInput;
  result: CalcResult;
  lowestPayment: number | null;
}) {
  const lowestPlan = result.plans
    .slice()
    .sort((a, b) => a.monthlyPayment - b.monthlyPayment)[0];
  const standardPlan = result.plans.find((p) => p.key === "standard")!;
  const savings = Math.max(0, standardPlan.monthlyPayment - lowestPlan.monthlyPayment);

  return (
    <div className="space-y-6">
      {/* Headline result */}
      <div className="rounded-lg bg-[var(--ink-deep)] p-7 text-white shadow-card md:p-9">
        <StickerTag>Your lowest estimated payment</StickerTag>
        <div className="mt-4 flex items-baseline gap-3">
          <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none">
            {formatCurrency(lowestPlan.monthlyPayment)}
          </p>
          <p className="text-[15px] text-white/70">/ month</p>
        </div>
        <p className="mt-2 text-[15px] text-white/80">
          Under the <span className="font-semibold text-white">{lowestPlan.shortName}</span> plan.{" "}
          {savings > 0 && (
            <>
              That&rsquo;s{" "}
              <span className="font-semibold text-[var(--coral)]">
                {formatCurrency(savings)}/mo
              </span>{" "}
              less than Standard 10-year.
            </>
          )}
        </p>
      </div>

      {/* Plan comparison */}
      <div className="rounded-lg bg-white p-7 shadow-card md:p-9">
        <h3 className="text-[22px] font-bold">Plan-by-plan comparison</h3>
        <p className="mt-2 text-[14px] text-[var(--ink-soft)]">
          Based on a {formatCurrency(input.balance)} balance at {input.ratePercent}%, household
          income of {formatCurrency(input.annualIncome)}, family of {input.familySize}.
        </p>

        <ul className="mt-6 space-y-3">
          {result.plans.map((plan) => {
            const isLowest = plan.key === lowestPlan.key && savings > 0;
            return (
              <li
                key={plan.key}
                className={`rounded-md border p-5 ${
                  isLowest
                    ? "border-[var(--coral)] bg-[var(--coral-soft)]"
                    : "border-[var(--line)] bg-[var(--surface)]"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[16px] font-bold text-[var(--ink)]">
                    {plan.name}
                  </p>
                  <p className="text-[22px] font-extrabold text-[var(--ink)]">
                    {formatCurrency(plan.monthlyPayment)}
                    <span className="text-[12px] font-medium text-[var(--ink-soft)]">
                      /mo
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-[14px] text-[var(--ink-soft)]">
                  {plan.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[var(--ink-soft)]">
                  {plan.forgivenessYears && (
                    <span>
                      <span className="font-semibold text-[var(--ink)]">
                        Forgiveness
                      </span>{" "}
                      after {plan.forgivenessYears} years
                    </span>
                  )}
                  {plan.note && (
                    <span className="text-[var(--coral-deep)]">{plan.note}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {result.warnings.length > 0 && (
          <ul className="mt-5 space-y-2 rounded-md border border-[var(--line)] bg-[var(--surface-deep)] p-4 text-[13px] text-[var(--ink-soft)]">
            {result.warnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA */}
      <div className="rounded-lg bg-[var(--surface-deep)] p-7 shadow-card md:p-9">
        <h3 className="text-[22px] font-bold">
          These are estimates. Get your real numbers.
        </h3>
        <p className="mt-3 text-[15px] text-[var(--ink-soft)]">
          A licensed strategist will pull your full NSLDS record, model every
          plan against your actual loan types and PSLF eligibility, and tell
          you the right next step.
        </p>
        <div className="mt-5">
          <Button asChild size="lg">
            <Link href="/book-a-consultation">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
