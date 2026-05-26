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
    slug: "fastest-ways-to-raise-your-credit-score",
    title: "The 4 fastest ways to raise your credit score (and the 2 that don't work)",
    date: "2026-03-14",
    dateDisplay: "March 14, 2026",
    author: "ClearPath Strategy Team",
    excerpt:
      "Most credit advice on the internet is either obvious or wrong. Here are the four moves that actually shift your score quickly, in the order we use them with clients — and two popular tactics you can skip.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=70",
    body: `
      <p>Most credit advice on the internet is either obvious ("pay your bills on time") or just wrong ("close old cards to look responsible"). After running credit cleanup for thousands of clients, we've found that four moves do most of the work, and a couple of popular tactics are a waste of time.</p>
      <h2>What actually moves a score quickly</h2>
      <h3>1. Drop your utilization on revolving accounts</h3>
      <p>Credit utilization — what percentage of your available credit you're using — is one of the largest scoring factors. Getting any single card under 30% utilization, and your overall under 10%, can move a score by 20–60 points within a single statement cycle. This is the single fastest legitimate move available.</p>
      <h3>2. Dispute inaccurate items</h3>
      <p>Federal law gives you the right to dispute anything you believe is inaccurate. The bureau has 30 days to investigate. If the furnisher can't verify the item, it has to come off. We routinely find 3–7 disputable items on a first review.</p>
      <h3>3. Become an authorized user on a healthy account</h3>
      <p>If you have a parent, spouse, or close family member with a long-running card in good standing, being added as an authorized user can import some of that history into your file. It's slow but reliable for thin-file clients.</p>
      <h3>4. Pay down recent balances before the statement closes</h3>
      <p>Your score reflects the balance reported on your statement date, not your due date. Paying before the statement closes lowers the reported balance and lowers utilization without changing anything else.</p>
      <h2>Two things people try that don't work</h2>
      <p>Closing old credit cards "to look more responsible." This usually raises your utilization (less available credit) and shortens your average account age. It almost always lowers the score.</p>
      <p>Paying for a "credit booster" subscription that just reports your rent or utilities. These can help a thin file get a score at all, but for an established file the effect is minor and usually not worth the monthly fee.</p>
    `,
  },
  {
    slug: "be-your-own-bank-what-infinite-banking-is-and-isnt",
    title: "Be Your Own Bank: what 'Infinite Banking' is, and what it isn't",
    date: "2026-02-05",
    dateDisplay: "February 5, 2026",
    author: "ClearPath Strategy Team",
    excerpt:
      "Infinite Banking gets sold as a miracle and dismissed as a scam, and both takes miss the point. Here's a plain-English walk-through of what the strategy actually is, what it does well, and where it doesn't fit.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=70",
    body: `
      <p>Infinite Banking — sometimes called "Be Your Own Bank" or the Infinite Banking Concept (IBC) — gets sold as a miracle product and dismissed as a scam, often in the same week. Both takes miss the point. The strategy is older than most of the people pitching it, and it's neither magic nor fraud. It's a specific use of a specific kind of life insurance policy. Whether it fits you depends on your situation.</p>
      <h2>What it actually is</h2>
      <p>You buy a dividend-paying whole life insurance policy from a mutually-owned carrier. The policy is designed (deliberately, with extra paid-up additions) to grow cash value efficiently. Once cash value is built up, you can borrow against the policy at any age, for any reason, without a credit check. While the loan is out, the underlying cash value keeps earning. You pay yourself back on your own schedule.</p>
      <h2>What it does well</h2>
      <p>Three things, mostly. First, it builds a pool of tax-deferred capital that you can access tax-free through loans. Second, it lets you recapture interest you'd otherwise pay to banks, lenders, and credit card companies — when you buy a car with a policy loan, the interest is going back into a system you own. Third, it transfers a death benefit to your heirs income-tax-free.</p>
      <h2>Where it doesn't fit</h2>
      <p>If you don't have steady cash flow you can commit to for years, it's the wrong tool. If you're behind on retirement contributions and haven't filled your 401(k) match or your Roth IRA, fill those first. If you're being told a policy will return 8–10% annually, you're being misled — that's a conflation of dividend rates and net returns and it almost never holds up.</p>
      <h2>The bottom line</h2>
      <p>Used as a banking system for people with stable cash flow and a long time horizon, this strategy works. Used as a retirement-investment substitute, it underperforms. The right question isn't "is this good or bad," it's "is this the right tool for what I'm trying to do." That's the conversation we have on every consultation.</p>
    `,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
