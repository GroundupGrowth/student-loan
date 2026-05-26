export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  dateDisplay: string;
  author: string;
  excerpt: string;
  // Placeholder Unsplash image — replace with real photography before launch.
  image: string;
  // Real intro paragraphs in the brand voice, NOT lorem ipsum. The body field
  // is HTML so the [slug] page can dangerouslySetInnerHTML it. Production
  // content can later move to MDX without changing the route shape.
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-income-driven-repayment-actually-works-in-2026",
    title: "How Income-Driven Repayment actually works in 2026",
    date: "2026-04-22",
    dateDisplay: "April 22, 2026",
    author: "ClearPath Strategy Team",
    excerpt:
      "There are four federal income-driven repayment plans in play right now, and the math under each one is different. Here's how to actually tell which one fits your situation, without trusting the call center on the other end of the line.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=70",
    body: `
      <p>If you have federal student loans and a pulse, you've probably been told to "switch to an income-driven plan" by at least one person at your loan servicer. The advice isn't wrong — it's just incomplete. There are four federal income-driven repayment plans in play right now, and the math under each one is different. Picking the wrong one can cost you tens of thousands over the life of your loan.</p>
      <p>This post walks through what each plan actually does in 2026, who it tends to be the best fit for, and the questions to ask before you sign anything. None of this is legal or tax advice; if you want a personalized recommendation, you can <a href="/book-a-consultation">book a free consultation</a> and we'll model the numbers with you.</p>
      <h2>The four plans, in plain English</h2>
      <p>SAVE, PAYE, IBR, and ICR each compute your monthly payment as some percentage of your discretionary income, but they use different definitions of discretionary income, different percentage caps, and different forgiveness timelines. They also treat marriage, family size, and graduate loans differently.</p>
      <h2>Who tends to win under each one</h2>
      <p>As a rough heuristic: SAVE tends to win for undergraduate-only borrowers with lower incomes; PAYE and IBR often win for higher-income borrowers with mixed undergraduate and graduate loans; ICR is rarely the best plan unless you have Parent PLUS loans you've consolidated. But this is a heuristic, not a rule — the actual answer depends on your exact loan types, family size, filing status, and projected income.</p>
      <h2>Questions to ask before you switch</h2>
      <p>Three things people forget to check: whether their loan type is eligible for the plan they're considering, how the plan treats their spouse's income if they file jointly, and whether switching plans resets their PSLF qualifying-payment count. Get answers to those three before you submit a single form.</p>
    `,
  },
  {
    slug: "pslf-in-2026-who-actually-qualifies",
    title: "PSLF in 2026: who actually qualifies, and how to count your payments",
    date: "2026-03-14",
    dateDisplay: "March 14, 2026",
    author: "ClearPath Strategy Team",
    excerpt:
      "Public Service Loan Forgiveness is the most valuable program federal borrowers have access to — and the most misunderstood. Here's who actually qualifies, how the 120-payment count really works, and the three mistakes that delay people by years.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=70",
    body: `
      <p>Public Service Loan Forgiveness (PSLF) forgives the remaining balance on your Direct Loans after 120 qualifying monthly payments, as long as you've been working full-time for a qualifying employer the whole time. On paper that's clear. In practice, almost every borrower we talk to has at least one misunderstanding that's costing them months — sometimes years — of credit.</p>
      <h2>Who qualifies (and who doesn't)</h2>
      <p>You qualify if you work full-time for a U.S. federal, state, local, or tribal government agency, or for most 501(c)(3) nonprofits. Teachers in public schools, nurses in public hospitals, attorneys in legal aid, and most government employees qualify. Independent contractors usually do not. Religious work counts as long as the employer is a qualifying 501(c)(3) — the post-2021 rules clarified this.</p>
      <h2>How the 120-payment count really works</h2>
      <p>A "qualifying payment" is a payment made on a Direct Loan, on an income-driven repayment plan or the 10-year Standard plan, while you were employed full-time by a qualifying employer. Each calendar month with a payment counts as one. You don't have to make 120 consecutive payments. Months without a payment (forbearance, deferment, or just gaps) don't count — with a handful of narrow exceptions.</p>
      <h2>Three mistakes that delay people by years</h2>
      <p>First: never certifying employment until you think you're at 120. The certification process recovers past months, but only ones you can document — and documentation gets harder as years pass. Certify yearly, every year.</p>
      <p>Second: leaving FFEL or Perkins loans unconsolidated. Only Direct Loans count toward PSLF. If your loans are FFEL or Perkins, you need to consolidate to Direct first — and the months before consolidation are usually lost.</p>
      <p>Third: assuming any income-driven plan works. Some don't. Make sure your plan is one of the four qualifying ones (and that your loan types are eligible for that plan) before you spend a year paying on the wrong one.</p>
      <h2>What to do this week</h2>
      <p>Pull your <code>StudentAid.gov</code> account, look at your loan types, and submit a PSLF employment certification for every qualifying employer you've had since 2007. That single action recovers more PSLF credit for clients than anything else we do.</p>
    `,
  },
  {
    slug: "borrowers-defense-when-you-have-a-shot",
    title: "Borrower's Defense: when you have a shot at full discharge, and when you don't",
    date: "2026-02-05",
    dateDisplay: "February 5, 2026",
    author: "ClearPath Strategy Team",
    excerpt:
      "Borrower's Defense to Repayment can discharge your entire federal student loan balance if your school misled you. It's also the most misunderstood program in federal student aid. Here's a plain-English read on who actually has a shot.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=70",
    body: `
      <p>Borrower's Defense to Repayment (BDR) is the federal program that can discharge your entire federal student loan balance — and refund payments you've already made — if your school misled you in a way that affected your decision to enroll, pay, or take out loans. It's the most valuable single tool in federal student aid, and it's also the most misunderstood. Most people who could file don't, and most people who do file misunderstand what they're actually claiming.</p>
      <h2>The standard, in plain English</h2>
      <p>To win a Borrower's Defense claim, you generally need to show that your school (or someone acting on its behalf) made a substantial misrepresentation that you relied on, and that the misrepresentation caused you financial harm. The classic examples: a school promised a 95% job-placement rate that wasn't true, claimed credits would transfer when they wouldn't, lied about its accreditation, or guaranteed a certification it didn't actually deliver.</p>
      <h2>When you have a shot</h2>
      <p>You have a real shot if you attended a school that has been the subject of federal enforcement actions, state attorney general lawsuits, or class-action findings — there are dozens. You also have a shot even if your school hasn't been sued, as long as you can document the specific misrepresentation, when you encountered it, and how it affected your decision. Emails, marketing materials, recruiter conversations, and recorded calls are all evidence.</p>
      <h2>When you don't</h2>
      <p>Borrower's Defense is not "the school didn't deliver the education I expected." It's not "I didn't get a job." It's not "the program was harder than I thought." Disappointment isn't a claim. You need a concrete misrepresentation, made by the school, that you can describe specifically — and that affected your choice to enroll or pay.</p>
      <h2>What to do if you might have a case</h2>
      <p>First, write down everything you remember about how the school recruited you: ads, calls, in-person tours, promises made about credits, jobs, or accreditation. Date it as best you can. Second, search the school's name plus "Borrower's Defense" and "lawsuit" — class actions and state enforcement actions are public record. Third, talk to someone who's filed claims before. The forms are short; the strategy is everything.</p>
    `,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
