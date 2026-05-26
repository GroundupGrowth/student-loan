export type ServiceKey =
  | "student-loan-relief"
  | "credit-wellness"
  | "be-your-own-bank"
  | "tax-trust-asset-protection";

export type Service = {
  key: ServiceKey;
  slug: string;
  number: string;
  name: string;
  navLabel: string;
  icon:
    | "GraduationCap"
    | "ShieldCheck"
    | "Landmark"
    | "Scale";
  // Placeholder Unsplash image — replace with real photography before launch.
  image: string;
  // Used on home page cards
  shortDescription: string;
  // Outcome-focused H1 for the service page
  outcomeHeadline: string;
  // Sub-headline (one sentence) on the service page hero
  outcomeSub: string;
  // 3–4 sentence paragraph for the home page deep-dive section
  deepDiveParagraph: string;
  // Bullet list for the home page deep-dive
  deepDiveBullets: string[];
  // "What you get" checklist on the service page
  whatYouGet: string[];
  // "Who this is for" — short personas
  whoItsFor: { title: string; description: string }[];
  // 3 numbered steps
  howItWorks: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    key: "student-loan-relief",
    slug: "student-loan-relief",
    number: "01",
    name: "Student Loan Relief",
    navLabel: "Student Loan Relief",
    icon: "GraduationCap",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=70",
    shortDescription:
      "Lower your monthly payment, qualify for forgiveness programs, and stop guessing which plan is right.",
    outcomeHeadline: "Lower your student loan payment. Find your path to forgiveness.",
    outcomeSub:
      "We handle the paperwork and walk you through every option — income-driven repayment, PSLF, Borrower's Defense, and Disability Discharge.",
    deepDiveParagraph:
      "Federal student loan rules change often, and the wrong repayment plan can cost you tens of thousands over the life of your loan. We start by pulling your full federal loan picture, then we map every program you actually qualify for — not the ones a call center is incentivized to push. If you have private loans, we'll tell you that too, plainly, and show you what's realistic. The goal is a lower payment now and a clear timeline to zero.",
    deepDiveBullets: [
      "Full income-driven repayment (IDR) qualification and re-certification",
      "Public Service Loan Forgiveness (PSLF) employment review and tracking",
      "Borrower's Defense and Total & Permanent Disability discharge filings",
      "Consolidation strategy when (and only when) it actually helps",
    ],
    whatYouGet: [
      "A full review of your federal loans across every servicer",
      "A side-by-side comparison of every IDR plan you qualify for",
      "PSLF employment certification and progress audit",
      "Borrower's Defense or Disability Discharge filing if you qualify",
      "Annual re-certification handled on your behalf",
      "A direct line to your strategist — no call-center queues",
    ],
    whoItsFor: [
      {
        title: "Teachers, nurses, and public-service workers",
        description:
          "If you've worked at a nonprofit, school, or government job for any length of time, you may be closer to PSLF forgiveness than you think.",
      },
      {
        title: "High-balance grad-school borrowers",
        description:
          "If your balance is six figures and your payment feels impossible, the right IDR plan plus loan-design strategy often cuts the monthly number by hundreds.",
      },
      {
        title: "Borrowers who were misled or whose school closed",
        description:
          "If your school misrepresented job placement, accreditation, or transferability, you may qualify for full discharge through Borrower's Defense.",
      },
    ],
    howItWorks: [
      {
        title: "Pull the full picture",
        description:
          "On your free call, we collect the basics, then we pull your NSLDS record to see every federal loan and servicer. No guessing.",
      },
      {
        title: "Match you to the right program",
        description:
          "We compare every IDR plan, PSLF eligibility, and discharge program you might qualify for, then explain the tradeoffs in plain English.",
      },
      {
        title: "File the paperwork and track it",
        description:
          "We complete the forms, submit them, and follow up with servicers. You get yearly re-certification handled and a strategist you can actually reach.",
      },
    ],
  },
  {
    key: "credit-wellness",
    slug: "credit-wellness",
    number: "02",
    name: "Credit Wellness",
    navLabel: "Credit Wellness",
    icon: "ShieldCheck",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=70",
    shortDescription:
      "Remove inaccurate items, raise your score, and qualify for the rates everyone else seems to get.",
    outcomeHeadline: "Clean up your credit. Qualify for the rates you deserve.",
    outcomeSub:
      "We dispute and remove inaccurate items under the Fair Credit Reporting Act, coach you on the habits that move your score, and build a 6–12 month plan to lender-ready credit.",
    deepDiveParagraph:
      "Most people's credit reports contain at least one error — a wrong balance, a debt that was paid, a collection that's already past the legal reporting window. Federal law gives you the right to challenge those, and the credit bureaus have to investigate. We do the heavy lifting: pull all three reports, identify what's disputable, file the disputes correctly, and follow up until it's resolved. Alongside the cleanup, we coach you on the handful of habits that actually move scores so you don't slide backward.",
    deepDiveBullets: [
      "Three-bureau report pull and line-by-line review",
      "Disputes filed under the Fair Credit Reporting Act",
      "Utilization, payment-history, and account-mix coaching",
      "A 6–12 month plan to qualify for better mortgage, auto, and card rates",
    ],
    whatYouGet: [
      "A pull of your Experian, Equifax, and TransUnion reports",
      "A written report of every item that may be disputable, with reasons",
      "Disputes drafted and filed under the FCRA on your behalf",
      "One-on-one coaching on the habits that actually move scores",
      "A timeline to your target score (and what it unlocks)",
      "Re-checks every 30 days for the duration of your plan",
    ],
    whoItsFor: [
      {
        title: "Future homebuyers in the next 6–18 months",
        description:
          "A 40-point score bump can move you from a sub-prime mortgage rate to a conventional one, which is tens of thousands over the life of the loan.",
      },
      {
        title: "Recovering from a hard year",
        description:
          "Medical bills, a divorce, or a layoff often leave a trail of collections. Many of them shouldn't still be on your report.",
      },
      {
        title: "Anyone who pays cash because nobody approves them",
        description:
          "If you've been declined for cards or a car loan and don't know why, we start by getting you the actual reason, in writing.",
      },
    ],
    howItWorks: [
      {
        title: "Pull all three reports",
        description:
          "We pull Experian, Equifax, and TransUnion together, then walk through every line item with you on a recorded call.",
      },
      {
        title: "Dispute what's wrong, coach the rest",
        description:
          "We draft and file disputes under the FCRA. While those run, we coach you on utilization, payment timing, and account mix.",
      },
      {
        title: "Re-pull and re-plan",
        description:
          "Every 30 days we re-pull and adjust. Most clients see meaningful movement inside 90 days; full plans run 6–12 months.",
      },
    ],
  },
  {
    key: "be-your-own-bank",
    slug: "be-your-own-bank",
    number: "03",
    name: "Be Your Own Bank",
    navLabel: "Be Your Own Bank",
    icon: "Landmark",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1600&q=70",
    shortDescription:
      "Build a personal banking system you control, with cash value you can borrow against tax-free.",
    outcomeHeadline: "Become your own bank. Finance your own future.",
    outcomeSub:
      "We design and fund a personal banking system using dividend-paying whole life insurance — the strategy popularized as Infinite Banking — so you can borrow against your own capital instead of someone else's.",
    deepDiveParagraph:
      "Be Your Own Bank — sometimes called the Infinite Banking Concept (IBC) — uses a properly-designed dividend-paying whole life insurance policy as a personal banking system. Premiums build guaranteed cash value you can borrow against at any age, for any reason, without a credit check. While the loan is out, the underlying cash value keeps earning. Used correctly, it's a slow, steady way to recapture interest you'd otherwise pay to banks, lenders, and credit card companies. It's not a get-rich product, and it's not for everyone — we'll tell you honestly whether it fits your situation.",
    deepDiveBullets: [
      "Policy design specifically optimized for cash value (not death benefit)",
      "Carrier selection from mutually-owned, dividend-paying companies only",
      "A funding schedule that matches your real cash flow",
      "Ongoing guidance on how (and when) to use policy loans",
    ],
    whatYouGet: [
      "A plain-English education in how cash-value life insurance actually works",
      "A policy design optimized for cash value growth, not commission",
      "Quotes from multiple mutually-owned, dividend-paying carriers",
      "A funding schedule that respects your real budget",
      "A written plan for using policy loans on future purchases",
      "Annual policy reviews for the life of the policy",
    ],
    whoItsFor: [
      {
        title: "Business owners with lumpy cash flow",
        description:
          "If you regularly need short-term capital — inventory, equipment, payroll — a policy loan can be cheaper, faster, and more flexible than a line of credit.",
      },
      {
        title: "High earners maxing tax-advantaged accounts",
        description:
          "If you've already filled your 401(k) and IRA and you're looking for a tax-favored vehicle for the next dollar, this deserves a serious look.",
      },
      {
        title: "Families thinking in generations",
        description:
          "Cash value is liquid for you, and the death benefit transfers to heirs income-tax-free. It's a foundation you can borrow from and pass down.",
      },
    ],
    howItWorks: [
      {
        title: "Education first",
        description:
          "Before any policy talk, we make sure you understand the mechanics — premium, paid-up additions, dividends, loans — so you make the call with eyes open.",
      },
      {
        title: "Design for your goals",
        description:
          "We design a policy structure around cash-value growth and your real funding capacity. We're agnostic across the major mutually-owned carriers.",
      },
      {
        title: "Fund and use it",
        description:
          "Once it's in force, we walk you through using policy loans for real purchases — a car, a renovation, a business investment — and how to pay yourself back.",
      },
    ],
  },
  {
    key: "tax-trust-asset-protection",
    slug: "tax-trust-asset-protection",
    number: "04",
    name: "Tax, Trust & Asset Protection",
    navLabel: "Tax, Trust & Asset Protection",
    icon: "Scale",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=70",
    shortDescription:
      "Reduce your tax bill, protect what you've built, and pass it down on your terms.",
    outcomeHeadline: "Keep more of what you earn. Protect what you build.",
    outcomeSub:
      "We coordinate legal tax-reduction strategies, trust formation, and asset-protection planning so your wealth survives lawsuits, probate, and the IRS.",
    deepDiveParagraph:
      "The tax code rewards people who plan and punishes people who don't. We coordinate with attorneys and CPAs to put structures in place — the right trust, the right entity, the right retirement vehicle — that legally reduce what you owe and protect what you have. This isn't about loopholes or aggressive positions; it's about using rules that have been on the books for decades and that most high-net-worth families already use. We'll tell you what's worth doing, what's a lawyer's job, and what isn't worth the paperwork.",
    deepDiveBullets: [
      "Tax-reduction strategy review with your CPA",
      "Revocable and irrevocable trust design through partner attorneys",
      "LLC, S-corp, and family limited partnership structuring",
      "Beneficiary, titling, and asset-protection audits",
    ],
    whatYouGet: [
      "A full review of your current tax exposure and structure",
      "A written plan coordinated with your CPA and attorney",
      "Trust recommendation (revocable, irrevocable, or none) with reasons",
      "Entity-structure review for business owners and landlords",
      "A beneficiary and titling audit across every account and property",
      "An annual check-in to keep the plan aligned with your life",
    ],
    whoItsFor: [
      {
        title: "Business owners and 1099 earners",
        description:
          "If you run a business or earn 1099 income, the right entity structure and retirement plan can move tens of thousands a year off your tax bill — legally.",
      },
      {
        title: "Homeowners and small landlords",
        description:
          "If you own real estate, even a single rental, you need to think about titling, liability, and the difference between a will and a trust.",
      },
      {
        title: "Families with kids, parents, or both",
        description:
          "If anyone depends on you — children, aging parents, a partner — a basic trust and beneficiary review protects them from probate and surprise outcomes.",
      },
    ],
    howItWorks: [
      {
        title: "Audit what's in place",
        description:
          "We start with your tax return, business structure, accounts, deeds, and beneficiary designations. Most people have at least one expensive gap.",
      },
      {
        title: "Build the plan with the right pros",
        description:
          "We coordinate with our partner attorneys and your CPA to recommend the trusts, entities, and titling changes that fit your situation.",
      },
      {
        title: "Execute and revisit",
        description:
          "We help you get the documents signed, accounts re-titled, and beneficiaries updated. Then we revisit annually — life changes, the plan changes.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
