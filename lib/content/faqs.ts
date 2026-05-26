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
      q: "Do you handle private loans or just federal?",
      a: "Our consulting focus is federal student loans, because that's where the programs — IDR, PSLF, Borrower's Defense, Disability Discharge — actually exist. We'll review your private loan picture as part of your free consultation and give you honest direction, but we won't pretend a private loan has options it doesn't.",
    },
    {
      q: "What are your fees?",
      a: "We quote a flat fee on your free consultation once we see your loan picture and know exactly what work is involved. There are no monthly recurring fees, no percentage-of-savings fees, and no charges for re-certification once you're a client. If a strategy doesn't make sense for you, we'll say so on the call and you'll owe nothing.",
    },
  ],
};
