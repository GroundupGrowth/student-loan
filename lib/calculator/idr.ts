/**
 * Federal student loan repayment plan math.
 *
 * All figures here are estimates based on publicly available federal rules
 * as of 2025/2026. Edge cases (married-filing-separately, Parent PLUS
 * consolidations, partial financial hardship, capitalized interest, the
 * SAVE litigation freeze, etc.) are intentionally not modeled — the
 * marketing-site calculator gives ballparks and routes the user to a
 * licensed strategist for personalized analysis.
 *
 * Update the POVERTY_LINE table each January when HHS releases new
 * guidelines.
 */

// 2025 HHS Federal Poverty Guidelines for the 48 contiguous states + DC.
// Alaska and Hawaii have higher thresholds; we use the 48-state set as the
// most common case and disclaim it.
const POVERTY_LINE_BASE = 15_650; // 1 person
const POVERTY_LINE_INCREMENT = 5_500; // each additional person

/** Poverty line for a household of the given size (whole-dollar). */
export function povertyLine(familySize: number): number {
  const size = Math.max(1, Math.floor(familySize));
  return POVERTY_LINE_BASE + (size - 1) * POVERTY_LINE_INCREMENT;
}

/**
 * Discretionary income used by IDR formulas.
 * @param agi          Annual adjusted gross income (household)
 * @param familySize   Household size
 * @param multiple     1.5 for PAYE/IBR/Standard-IDR; 2.25 for SAVE
 */
export function discretionaryIncome(
  agi: number,
  familySize: number,
  multiple: 1.5 | 2.25,
): number {
  return Math.max(0, agi - povertyLine(familySize) * multiple);
}

/**
 * Standard 10-year amortized monthly payment.
 * Returns 0 if balance is 0; uses simple amortization otherwise.
 */
export function standardPayment(balance: number, ratePercent: number): number {
  if (balance <= 0) return 0;
  const n = 120; // 10 years × 12 months
  const r = ratePercent / 100 / 12;
  if (r === 0) return balance / n;
  return (balance * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

/** Cap an IDR estimate so it never exceeds Standard 10-year (PAYE/IBR rule). */
function capAtStandard(idr: number, standard: number): number {
  return Math.min(idr, standard);
}

export type PlanKey = "standard" | "save" | "paye" | "ibr";

export type PlanEstimate = {
  key: PlanKey;
  name: string;
  shortName: string;
  description: string;
  monthlyPayment: number;
  forgivenessYears: number | null;
  note?: string;
};

export type CalcInput = {
  balance: number;
  ratePercent: number;
  annualIncome: number;
  familySize: number;
  hasGradLoans: boolean;
};

export type CalcResult = {
  plans: PlanEstimate[];
  standardPayment: number;
  warnings: string[];
};

export function calculate(input: CalcInput): CalcResult {
  const warnings: string[] = [];

  const standard = standardPayment(input.balance, input.ratePercent);

  // SAVE uses 225% of poverty + 5% (undergrad) or 10% (grad) of discretionary
  const disc225 = discretionaryIncome(input.annualIncome, input.familySize, 2.25);
  const savePct = input.hasGradLoans ? 0.1 : 0.05;
  const saveRaw = (disc225 * savePct) / 12;
  // SAVE notably does NOT cap at Standard (that's part of its appeal)
  const save = saveRaw;

  // PAYE and IBR use 150% of poverty + 10% of discretionary, capped at Standard
  const disc150 = discretionaryIncome(input.annualIncome, input.familySize, 1.5);
  const payeRaw = (disc150 * 0.1) / 12;
  const paye = capAtStandard(payeRaw, standard);
  const ibrRaw = (disc150 * 0.1) / 12;
  const ibr = capAtStandard(ibrRaw, standard);

  if (disc150 === 0) {
    warnings.push(
      "Your income is at or below 150% of the federal poverty line for your family size, so PAYE/IBR estimate $0 monthly. Talk to a strategist to make sure that holds up in practice.",
    );
  }

  if (input.balance <= 0) {
    warnings.push("Enter your federal loan balance to see plan estimates.");
  }
  if (input.ratePercent <= 0) {
    warnings.push(
      "Enter your weighted average interest rate (a typical range is 4%–8%).",
    );
  }

  const plans: PlanEstimate[] = [
    {
      key: "standard",
      name: "Standard 10-Year Plan",
      shortName: "Standard",
      description:
        "Equal fixed payments over 10 years. The default plan if you don't choose anything else.",
      monthlyPayment: standard,
      forgivenessYears: null,
      note: "No forgiveness — pays the loan off entirely in 10 years.",
    },
    {
      key: "save",
      name: "SAVE Plan",
      shortName: "SAVE",
      description: input.hasGradLoans
        ? "Income-driven plan. 10% of discretionary income (above 225% of poverty)."
        : "Income-driven plan. 5% of discretionary income (above 225% of poverty) for undergraduate-only borrowers.",
      monthlyPayment: save,
      forgivenessYears: input.hasGradLoans ? 25 : 20,
      note: "SAVE is currently subject to ongoing federal litigation — payment terms may change. Verify before relying on this estimate.",
    },
    {
      key: "paye",
      name: "Pay As You Earn (PAYE)",
      shortName: "PAYE",
      description:
        "Income-driven plan. 10% of discretionary income (above 150% of poverty). Capped at Standard.",
      monthlyPayment: paye,
      forgivenessYears: 20,
    },
    {
      key: "ibr",
      name: "Income-Based Repayment (IBR)",
      shortName: "IBR",
      description:
        "Income-driven plan for new borrowers (loans since July 2014). 10% of discretionary, capped at Standard. Older-borrower IBR is 15%.",
      monthlyPayment: ibr,
      forgivenessYears: 20,
    },
  ];

  return { plans, standardPayment: standard, warnings };
}

/** Format a payment as USD with no cents for display. */
export function formatCurrency(amount: number): string {
  if (!Number.isFinite(amount)) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(amount)));
}
