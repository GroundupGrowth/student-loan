export type ServiceKey = "student-loan-relief";

export type Service = {
  key: ServiceKey;
  slug: string;
  name: string;
  navLabel: string;
  icon: "GraduationCap";
  // Placeholder Unsplash image — replace with real photography before launch.
  image: string;
  // Used on home page cards (kept for backwards-compat in any future
  // service-card usage)
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
    name: "Student Loan Relief",
    navLabel: "Student Loan Relief",
    icon: "GraduationCap",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=70",
    shortDescription:
      "Lower your monthly payment, qualify for forgiveness programs, and stop guessing which plan is right.",
    outcomeHeadline: "Lower your student loan payment. Find your path to forgiveness.",
    outcomeSub:
      "We pull your full federal loan record, model every repayment plan you qualify for, and handle the paperwork — so you stop guessing and start paying down on terms that fit your life.",
    deepDiveParagraph:
      "Federal student loan rules change often, and the wrong repayment plan can cost you tens of thousands over the life of your loan. We start by pulling your full federal loan picture from NSLDS, then we map every program you actually qualify for — not the ones a call center is incentivized to push. If you have private loans, we'll tell you that too, plainly, and show you what's realistic. The goal is a lower payment now and a clear timeline to zero.",
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
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// Convenience: the firm has exactly one service.
export const studentLoanService = services[0];
