import type { ServiceKey } from "./services";

export type FAQ = { q: string; a: string };

export const faqs: Record<ServiceKey, FAQ[]> = {
  "student-loan-relief": [
    {
      q: "Who qualifies for Public Service Loan Forgiveness (PSLF)?",
      a: "PSLF forgives the remaining balance on Direct Loans after 120 qualifying monthly payments while you work full-time for a U.S. federal, state, local, or tribal government, or for most 501(c)(3) nonprofits. Qualifying payments must be made under an income-driven repayment plan or the 10-year Standard plan. Time spent at a qualifying employer counts even if you didn't certify it at the time — that's one of the most common things we recover for clients.",
    },
    {
      q: "Which income-driven repayment (IDR) plan is right for me?",
      a: "It depends on your loan types, family size, marital filing status, and goals. SAVE, PAYE, IBR, and ICR each calculate your payment differently and forgive remaining balances on different timelines. We model your real numbers under every plan you qualify for and show you the side-by-side before you commit. There's no single 'best' plan — there's the best plan for your situation.",
    },
    {
      q: "What if I have private student loans?",
      a: "Private loans aren't eligible for federal forgiveness programs like PSLF or income-driven repayment. Your options are usually refinancing for a lower rate, negotiating with the lender, or in a small number of cases, a settlement. We'll tell you honestly what's realistic before you spend a dollar.",
    },
    {
      q: "How long does the process take?",
      a: "An IDR plan recalculation is usually 30–60 days from filing. A PSLF employment certification is typically 60–90 days once submitted. Borrower's Defense and Total & Permanent Disability discharges can take 6–24 months because they go through full federal review. We track everything and follow up with the servicers so you don't have to.",
    },
    {
      q: "What are your fees?",
      a: "We quote a flat fee on your free consultation once we see your loan picture and know exactly what work is involved. There are no monthly recurring fees, no percentage-of-savings fees, and no charges for re-certification once you're a client. If a strategy doesn't make sense for you, we'll say so on the call and you'll owe nothing.",
    },
  ],
  "credit-wellness": [
    {
      q: "How long before I see results?",
      a: "Most clients see meaningful movement within 60–90 days as the first round of disputes resolves. Full programs typically run 6–12 months because credit scoring rewards both clean reports and a track record of healthy behavior. We re-pull your reports every 30 days so you can see the change as it happens.",
    },
    {
      q: "Can you remove a late payment that's actually mine?",
      a: "If a late payment is accurate, properly reported, and within the legal reporting window (seven years for most negatives), it generally stays. Anyone promising to remove accurate, verified items is misleading you. What we can do is challenge inaccuracies, get past-window items removed, and coach you on the habits that outweigh an old late payment over time.",
    },
    {
      q: "Will disputing items hurt my score?",
      a: "No. Filing a dispute under the Fair Credit Reporting Act does not lower your score. When an inaccurate item is removed, your score usually goes up. If an item is verified and stays, the score doesn't change because of the dispute itself. The bureaus aren't allowed to penalize you for asserting a federal right.",
    },
    {
      q: "What's the legal basis for what you do?",
      a: "Primarily the Fair Credit Reporting Act (FCRA) and the Fair Debt Collection Practices Act (FDCPA). The FCRA gives you the right to dispute anything on your report and requires the bureaus to investigate within 30 days. If they can't verify it, it must be removed. We file every dispute through the bureaus' official channels and keep records of each one.",
    },
    {
      q: "What are your fees?",
      a: "We charge a one-time enrollment fee and a flat monthly fee while the program is active. There's no fee per item removed, no surprise upcharges, and no long-term contract — you can cancel at any time. The exact numbers depend on what your report actually needs and we share them on your free consultation.",
    },
  ],
  "be-your-own-bank": [
    {
      q: "Is this the same thing as Infinite Banking or IBC?",
      a: "Yes. 'Be Your Own Bank,' Infinite Banking, and IBC all describe the same underlying strategy: using a properly-designed dividend-paying whole life insurance policy as a personal banking system. The labels are marketing; the mechanics are identical. We use the version that's been practiced for decades by mutually-owned life insurance carriers.",
    },
    {
      q: "Do I need to be wealthy to do this?",
      a: "No, but you do need consistent cash flow you can commit to for the long term. A policy is designed around what you can fund every month for many years, so we don't recommend it if your budget is tight or unstable. For most clients the conversation starts when there's at least a few hundred dollars a month of capacity beyond essentials and tax-advantaged retirement contributions.",
    },
    {
      q: "What's the minimum funding?",
      a: "It varies by carrier and policy design, but practical minimums are usually a few hundred dollars per month. The more important number is the ratio between base premium and paid-up additions, because that ratio determines how much of your money becomes useable cash value in the early years. We design every policy around cash-value efficiency, not commission.",
    },
    {
      q: "Isn't whole life insurance a bad investment?",
      a: "Whole life is not an investment in the stock-market sense, and anyone comparing it to an S&P 500 index fund is comparing the wrong things. It's a contractual savings vehicle with guaranteed growth, tax-deferred accumulation, and a death benefit. Used as a banking system — borrowing against it instead of liquidating it — it does work that an index fund can't. Used as a retirement-investment substitute, it underperforms. We'll tell you which use case fits you.",
    },
    {
      q: "How is this different from a regular savings account?",
      a: "Three main differences. First, the cash value grows tax-deferred and can be accessed tax-free through policy loans, which a savings account can't match. Second, while you have a loan against your policy, the underlying cash value keeps earning — your money is doing two jobs at once. Third, the policy carries a death benefit that transfers to heirs income-tax-free. The tradeoff is liquidity in years one and two, which is why fit and timing matter.",
    },
  ],
  "tax-trust-asset-protection": [
    {
      q: "Do I need an estate to need a trust?",
      a: "No — and the word 'estate' confuses people. If you own a home, have retirement accounts, or have minor children, you have an estate. A revocable living trust avoids probate, keeps your affairs private, and makes things easier on your family if something happens to you. You don't have to be wealthy to benefit; you have to have anything worth protecting.",
    },
    {
      q: "Revocable vs. irrevocable trust — which do I need?",
      a: "A revocable trust is a control and probate-avoidance tool: you can change it, fund it, and unwind it during your life. An irrevocable trust trades control for protection — it generally removes assets from your taxable estate and shields them from creditors, but you can't easily reverse it. Most families need a revocable trust first and an irrevocable trust only for specific goals like estate-tax planning or Medicaid eligibility. We tell you honestly when an irrevocable trust is overkill.",
    },
    {
      q: "What do you do versus what's a lawyer's job?",
      a: "We do the planning and coordination: review your situation, identify the gaps, recommend the right structures, and run point on the project. The actual drafting and signing of trust documents is done by licensed attorneys we partner with, in your state. Tax filings stay with your CPA. We sit in the middle so you don't have to translate between four different professionals.",
    },
    {
      q: "Will I save on taxes immediately?",
      a: "Sometimes yes, sometimes no. Entity restructuring, retirement-plan changes, and certain deductions can show up on the very next return. Trust-based strategies are usually about protection and long-term transfer rather than this-year savings. We map both the short-term and the long-term math before you commit to anything.",
    },
    {
      q: "How confidential is this work?",
      a: "Everything you share with us is held in confidence. We sign engagement agreements that spell out scope, fees, and confidentiality, and we coordinate with your CPA and attorney only with your written authorization. We do not sell client information and we do not share case details outside the team working on your plan.",
    },
  ],
};
