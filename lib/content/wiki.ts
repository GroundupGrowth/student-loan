/**
 * Wiki entries — plain-English explainers for federal student loan terms,
 * plans, and programs. Each entry is keyword-targeted for SEO, written in
 * the brand voice, and cross-linked to related entries.
 *
 * Add new entries by appending to `wikiEntries`. Reference other entries
 * by slug in the `related` array. Inline links inside `body` should also
 * use absolute /wiki/<slug> paths so the linking graph stays consistent.
 */

export type WikiCategory =
  | "repayment-plans"
  | "forgiveness"
  | "concepts"
  | "loan-types"
  | "process";

export const wikiCategories: { key: WikiCategory; title: string; description: string }[] = [
  {
    key: "repayment-plans",
    title: "Repayment plans",
    description:
      "The federal repayment plans you can choose between, what makes each one different, and who they fit.",
  },
  {
    key: "forgiveness",
    title: "Forgiveness & discharge",
    description:
      "Federal programs that forgive or discharge your loans — who qualifies, and how the process actually works.",
  },
  {
    key: "concepts",
    title: "Concepts to understand",
    description:
      "The mechanics behind your federal loans — discretionary income, NSLDS, capitalized interest, and more.",
  },
  {
    key: "loan-types",
    title: "Types of loans",
    description:
      "The differences between Direct, Subsidized, Unsubsidized, PLUS, and private loans — and why those differences matter.",
  },
  {
    key: "process",
    title: "Process & paperwork",
    description:
      "What forbearance, deferment, consolidation, and re-certification actually do to your loans.",
  },
];

export type WikiEntry = {
  slug: string;
  title: string;
  /** Optional short label used in nav and link lists. */
  shortTitle?: string;
  category: WikiCategory;
  /** One-sentence summary for cards and meta description. */
  excerpt: string;
  /** HTML body. Internal links should point to /wiki/<slug>. */
  body: string;
  /** Slugs of related wiki entries. */
  related: string[];
  /** When the entry was last fact-checked (ISO date). */
  updated: string;
  /** Optional list of SEO keywords this entry targets. */
  keywords?: string[];
};

export const wikiEntries: WikiEntry[] = [
  // ---------------- Repayment plans ----------------
  {
    slug: "save-plan",
    title: "SAVE Plan (Saving on a Valuable Education)",
    shortTitle: "SAVE Plan",
    category: "repayment-plans",
    excerpt:
      "The newest income-driven repayment plan, with the most generous formula for many undergraduate-only borrowers — but currently subject to ongoing federal litigation.",
    keywords: ["SAVE plan", "Saving on a Valuable Education", "REPAYE replacement"],
    updated: "2026-05-01",
    body: `
      <p>The SAVE Plan (Saving on a Valuable Education) is the newest federal <a href="/wiki/income-driven-repayment">income-driven repayment</a> plan. It replaced the REPAYE plan in 2023 and, as designed, calculates your monthly payment as a percentage of your <a href="/wiki/discretionary-income">discretionary income</a> using a more generous threshold than any other IDR plan.</p>
      <h2>How the math works</h2>
      <p>Under SAVE, discretionary income is your adjusted gross income minus <strong>225%</strong> of the federal poverty line for your family size — versus the 150% threshold used by PAYE and IBR. That means more of your income is excluded from the calculation, which usually produces a lower monthly payment.</p>
      <p>Your monthly payment under SAVE is:</p>
      <ul>
        <li><strong>5%</strong> of discretionary income if you only have undergraduate loans</li>
        <li><strong>10%</strong> of discretionary income if you have any graduate or professional loans</li>
        <li>A weighted average between 5% and 10% if you have both</li>
      </ul>
      <h2>Forgiveness timeline</h2>
      <p>SAVE forgives the remaining balance after 20 years of qualifying payments for borrowers whose loans were all for undergraduate study, and 25 years for borrowers with any graduate loans. Borrowers with original balances of $12,000 or less may qualify for forgiveness even sooner (after as few as 10 years).</p>
      <h2>Interest subsidy</h2>
      <p>SAVE includes a generous interest subsidy: if your monthly payment doesn't cover all the interest that accrues each month, the government waives the excess. That means your balance can't grow under SAVE the way it can under older IDR plans, even if your payment is $0.</p>
      <h2>Current legal status</h2>
      <p>Parts of the SAVE Plan have been challenged in federal court and certain provisions have been temporarily frozen. The payment calculation rules described here reflect the plan as originally designed; check the latest guidance at <a href="https://studentaid.gov" rel="noopener">studentaid.gov</a> or talk to a strategist before relying on a SAVE estimate.</p>
      <h2>Who SAVE tends to fit</h2>
      <p>Undergraduate-only borrowers with low to moderate incomes usually see the lowest payment under SAVE compared to PAYE or IBR. Borrowers chasing <a href="/wiki/pslf">PSLF</a> often use SAVE because the qualifying-payment count carries over, and the lower payments accelerate the forgiveness math.</p>
    `,
    related: ["paye-plan", "ibr-plan", "discretionary-income", "pslf"],
  },
  {
    slug: "paye-plan",
    title: "PAYE Plan (Pay As You Earn)",
    shortTitle: "PAYE",
    category: "repayment-plans",
    excerpt:
      "An income-driven plan that caps payments at 10% of discretionary income — and at the Standard 10-year payment. Forgives the balance after 20 years.",
    keywords: ["PAYE", "Pay As You Earn", "income-driven repayment"],
    updated: "2026-05-01",
    body: `
      <p>Pay As You Earn (PAYE) is one of four federal <a href="/wiki/income-driven-repayment">income-driven repayment</a> plans. It was designed for newer borrowers and caps your monthly payment at 10% of your <a href="/wiki/discretionary-income">discretionary income</a>, with a hard ceiling at what you'd pay under the <a href="/wiki/standard-repayment-plan">Standard 10-year Plan</a>.</p>
      <h2>How the math works</h2>
      <p>Under PAYE, discretionary income is your adjusted gross income minus 150% of the federal poverty line for your family size. Your monthly payment is 10% of that figure, divided by 12. Crucially, PAYE caps your payment at the Standard 10-year amount — your IDR payment can never go higher than the un-extended payment.</p>
      <h2>Who qualifies</h2>
      <p>You're eligible for PAYE if you're a "new borrower" as defined by the Department of Education — generally meaning you had no outstanding federal loans as of October 1, 2007, and received a Direct Loan disbursement on or after October 1, 2011. You also need to demonstrate a "partial financial hardship," which the application calculates automatically.</p>
      <h2>Forgiveness</h2>
      <p>PAYE forgives any remaining balance after 20 years of qualifying payments. The forgiven amount may be considered taxable income under federal law (though current federal policy excludes IDR forgiveness from tax through 2025; this is set to expire).</p>
      <h2>How PAYE compares</h2>
      <p>PAYE and the new-borrower version of <a href="/wiki/ibr-plan">IBR</a> use the same 10% rate, but PAYE only counts your spouse's income if you file taxes jointly. IBR uses the same rule. The newer <a href="/wiki/save-plan">SAVE Plan</a> usually beats PAYE for undergraduate-only borrowers because of its 225% poverty threshold; PAYE often wins for higher-income graduate borrowers.</p>
      <h2>Re-certification</h2>
      <p>Like every IDR plan, PAYE requires you to re-certify your income and family size every 12 months. Missing the re-certification deadline can default you out of PAYE and back into the Standard Plan, which can spike your monthly payment dramatically.</p>
    `,
    related: ["save-plan", "ibr-plan", "income-driven-repayment", "pslf"],
  },
  {
    slug: "ibr-plan",
    title: "IBR Plan (Income-Based Repayment)",
    shortTitle: "IBR",
    category: "repayment-plans",
    excerpt:
      "The longest-standing income-driven repayment plan. 10% of discretionary income for newer borrowers, 15% for older borrowers, with 20- or 25-year forgiveness.",
    keywords: ["IBR plan", "Income-Based Repayment", "income-driven plans"],
    updated: "2026-05-01",
    body: `
      <p>Income-Based Repayment (IBR) is the oldest federal <a href="/wiki/income-driven-repayment">income-driven repayment</a> plan and the most widely available. Unlike <a href="/wiki/paye-plan">PAYE</a> or <a href="/wiki/save-plan">SAVE</a>, IBR is open to almost any borrower with eligible federal loans, regardless of when you first borrowed.</p>
      <h2>Two versions: new borrower vs. older borrower</h2>
      <p>Federal regulations split IBR into two cohorts based on when you first took out federal loans:</p>
      <ul>
        <li><strong>New borrowers</strong> (no outstanding federal loans as of July 1, 2014): payment = 10% of <a href="/wiki/discretionary-income">discretionary income</a>, forgiveness after 20 years.</li>
        <li><strong>Older borrowers</strong>: payment = 15% of discretionary income, forgiveness after 25 years.</li>
      </ul>
      <p>The difference compounds: a borrower with $80,000 in loans on the older IBR rules will often pay significantly more than the same borrower on PAYE or new-borrower IBR.</p>
      <h2>Standard cap</h2>
      <p>Like PAYE, IBR caps your monthly payment at what you'd pay under the <a href="/wiki/standard-repayment-plan">Standard 10-year Plan</a>. Your payment can never exceed the un-extended amount.</p>
      <h2>Eligibility</h2>
      <p>Most federal loans qualify for IBR, including Direct Loans and most FFEL loans. Parent PLUS loans are not directly eligible, but a Parent PLUS loan that's been consolidated into a Direct Consolidation Loan can qualify for ICR (a different plan).</p>
      <h2>Re-certification</h2>
      <p>Like all IDR plans, IBR requires annual re-certification of income and family size. Missing it puts you back on the Standard Plan and capitalizes any unpaid interest into your principal — a costly mistake.</p>
      <h2>When IBR is the right choice</h2>
      <p>IBR is often the only option for older borrowers, borrowers with FFEL loans, or borrowers who don't qualify for PAYE or SAVE. For everyone else, the newer plans usually produce a lower monthly payment.</p>
    `,
    related: ["paye-plan", "save-plan", "income-driven-repayment", "loan-consolidation"],
  },
  {
    slug: "icr-plan",
    title: "ICR Plan (Income-Contingent Repayment)",
    shortTitle: "ICR",
    category: "repayment-plans",
    excerpt:
      "The oldest income-driven repayment plan and the only one currently available to Parent PLUS borrowers — usually after consolidation.",
    keywords: ["ICR", "Income-Contingent Repayment", "Parent PLUS"],
    updated: "2026-05-01",
    body: `
      <p>Income-Contingent Repayment (ICR) is the oldest federal <a href="/wiki/income-driven-repayment">income-driven repayment</a> plan, dating to 1994. It's rarely the best plan for borrowers who qualify for newer options like <a href="/wiki/save-plan">SAVE</a>, <a href="/wiki/paye-plan">PAYE</a>, or <a href="/wiki/ibr-plan">IBR</a> — but it's the only IDR plan currently available (after <a href="/wiki/loan-consolidation">consolidation</a>) to borrowers who have Parent PLUS loans.</p>
      <h2>How the math works</h2>
      <p>Under ICR, your monthly payment is the <em>lesser</em> of:</p>
      <ul>
        <li>20% of your <a href="/wiki/discretionary-income">discretionary income</a> (calculated using 100% of the poverty line — less generous than other IDR plans), or</li>
        <li>The fixed payment you'd make over a 12-year term, adjusted for income.</li>
      </ul>
      <p>That 20% rate is much higher than PAYE/IBR's 10% or SAVE's 5–10%, which is why ICR rarely wins on monthly payment.</p>
      <h2>Forgiveness</h2>
      <p>ICR forgives any remaining balance after 25 years of qualifying payments.</p>
      <h2>Why ICR still matters for Parent PLUS</h2>
      <p>Parent PLUS loans are not eligible for SAVE, PAYE, or new-borrower IBR. The standard workaround is to consolidate the Parent PLUS loan into a Direct Consolidation Loan, which then becomes eligible for ICR. It's not great, but for many Parent PLUS borrowers, ICR is the only path to a lower payment.</p>
      <h2>PSLF and ICR</h2>
      <p>ICR is a qualifying repayment plan for <a href="/wiki/pslf">PSLF</a>. Parent PLUS borrowers working in qualifying employment can pursue PSLF by consolidating into a Direct Consolidation Loan, switching to ICR, and certifying their employment.</p>
    `,
    related: ["save-plan", "paye-plan", "ibr-plan", "loan-consolidation", "pslf"],
  },
  {
    slug: "standard-repayment-plan",
    title: "Standard 10-Year Repayment Plan",
    shortTitle: "Standard Plan",
    category: "repayment-plans",
    excerpt:
      "The default federal repayment plan. Equal fixed payments over 10 years. Pays the loan off entirely — no forgiveness.",
    keywords: ["Standard repayment plan", "10-year repayment", "default plan"],
    updated: "2026-05-01",
    body: `
      <p>The Standard 10-Year Repayment Plan is the default federal repayment plan. If you don't actively choose another plan, you're placed on Standard automatically when your loans enter repayment.</p>
      <h2>How it works</h2>
      <p>Under Standard, your monthly payment is calculated as the equal fixed amount needed to pay off your balance over exactly 120 months (10 years). The payment never changes based on your income, family size, or anything else — it's pure amortization.</p>
      <h2>When Standard is the right plan</h2>
      <p>Standard pays the loan off fastest of any plan that doesn't require a lump sum. You'll pay less total interest than under any extended or income-driven option. If your income is high enough that you can afford the Standard payment without strain, Standard is usually the cheapest plan over the life of the loan.</p>
      <h2>When Standard hurts you</h2>
      <p>Standard is not a <a href="/wiki/pslf">PSLF</a>-friendly plan in practice. Technically, payments on Standard count toward PSLF — but because Standard pays the loan off in exactly 10 years (the same length as PSLF's 120-payment requirement), there's nothing left to forgive at the end. If you're pursuing PSLF, you generally want to be on an <a href="/wiki/income-driven-repayment">income-driven plan</a> instead so a balance remains to be forgiven.</p>
      <h2>Standard as a "cap"</h2>
      <p>The Standard payment matters even if you're not on it. <a href="/wiki/paye-plan">PAYE</a> and <a href="/wiki/ibr-plan">IBR</a> both cap your monthly payment at the Standard amount — you can't owe more under those plans than you would on Standard. <a href="/wiki/save-plan">SAVE</a> does not have this cap.</p>
    `,
    related: ["save-plan", "paye-plan", "ibr-plan", "income-driven-repayment"],
  },
  {
    slug: "income-driven-repayment",
    title: "Income-Driven Repayment (IDR)",
    shortTitle: "IDR",
    category: "repayment-plans",
    excerpt:
      "The umbrella term for federal repayment plans that tie your monthly payment to your income and family size. Currently includes SAVE, PAYE, IBR, and ICR.",
    keywords: ["IDR", "income-driven repayment", "income-based plans"],
    updated: "2026-05-01",
    body: `
      <p>Income-Driven Repayment (IDR) is the umbrella term for federal repayment plans that calculate your monthly payment based on your income and family size, instead of just your loan balance and interest rate. The four current IDR plans are <a href="/wiki/save-plan">SAVE</a>, <a href="/wiki/paye-plan">PAYE</a>, <a href="/wiki/ibr-plan">IBR</a>, and <a href="/wiki/icr-plan">ICR</a>.</p>
      <h2>The core mechanic</h2>
      <p>Every IDR plan starts with the same idea: take your <a href="/wiki/discretionary-income">discretionary income</a> (your adjusted gross income minus some multiple of the federal poverty line), multiply by a percentage (5–20% depending on the plan), and divide by 12. That's your monthly payment. The plans differ in which poverty multiple they use, what percentage they apply, whether they cap at the <a href="/wiki/standard-repayment-plan">Standard payment</a>, and how long until any remaining balance is forgiven.</p>
      <h2>Why IDR matters</h2>
      <p>For borrowers chasing <a href="/wiki/pslf">PSLF</a>, the IDR plan you choose directly affects how much you pay over the 10 years before forgiveness kicks in. For borrowers who'll be on IDR for the full 20 or 25 years until balance forgiveness, the plan choice can mean tens of thousands of dollars over the life of the loan.</p>
      <h2>Re-certification</h2>
      <p>Every IDR plan requires you to re-certify your income and family size every 12 months. The Department of Education uses your most recent tax return (with your permission) to recalculate your payment. Miss the re-certification deadline and you can be defaulted back to the <a href="/wiki/standard-repayment-plan">Standard Plan</a> — with any unpaid interest capitalized into your principal.</p>
      <h2>Forgiveness at the end</h2>
      <p>Each IDR plan forgives any remaining balance after a set number of years (20 or 25, depending on the plan and your loan types). The forgiven amount may be taxable federal income, depending on when the forgiveness happens and what tax rules are in effect at that time.</p>
    `,
    related: ["save-plan", "paye-plan", "ibr-plan", "icr-plan", "standard-repayment-plan", "discretionary-income"],
  },

  // ---------------- Forgiveness ----------------
  {
    slug: "pslf",
    title: "Public Service Loan Forgiveness (PSLF)",
    shortTitle: "PSLF",
    category: "forgiveness",
    excerpt:
      "Federal program that forgives the remaining balance on Direct Loans after 120 qualifying monthly payments while working full-time for a qualifying public-service employer.",
    keywords: ["PSLF", "Public Service Loan Forgiveness", "loan forgiveness"],
    updated: "2026-05-01",
    body: `
      <p>Public Service Loan Forgiveness (PSLF) is the federal program that forgives the remaining balance on your <a href="/wiki/direct-loans">Direct Loans</a> after 120 qualifying monthly payments, as long as you've been working full-time for a qualifying employer during those payments. Forgiveness under PSLF is currently not taxable as federal income.</p>
      <h2>Who qualifies as an employer</h2>
      <p>Qualifying employers include the federal government, state governments, local governments, tribal governments, and most U.S. 501(c)(3) nonprofits. Public schools, public hospitals, legal aid organizations, and government agencies typically all qualify. Independent contractors generally do not — even if you work full-time for a qualifying organization.</p>
      <h2>Qualifying payments</h2>
      <p>A "qualifying payment" is one made:</p>
      <ul>
        <li>On a Direct Loan (FFEL, Perkins, and private loans don't count)</li>
        <li>Under an <a href="/wiki/income-driven-repayment">income-driven repayment</a> plan or the <a href="/wiki/standard-repayment-plan">Standard 10-Year Plan</a></li>
        <li>While employed full-time by a qualifying employer</li>
      </ul>
      <p>You need 120 qualifying payments to be forgiven. They don't have to be consecutive — gaps don't disqualify you, they just don't count.</p>
      <h2>Why people miss out</h2>
      <p>The three most common mistakes that delay PSLF by years: not certifying employment annually (months become harder to document over time), having FFEL or Perkins loans you've never <a href="/wiki/loan-consolidation">consolidated</a> to Direct (the months before consolidation are usually lost), and being on a non-qualifying repayment plan without realizing it.</p>
      <h2>How to certify employment</h2>
      <p>You file a PSLF Employment Certification Form (also called a PSLF Form) listing every qualifying employer and the dates you worked there. The Department of Education reviews the form and confirms how many of your payments qualify. We recommend certifying every year, every year — not just at the 10-year mark.</p>
      <h2>Forgiveness and taxes</h2>
      <p>Under current law, PSLF forgiveness is not taxable as federal income. This is different from <a href="/wiki/income-driven-repayment">IDR</a> balance forgiveness, which is governed by separate tax rules.</p>
    `,
    related: ["save-plan", "paye-plan", "ibr-plan", "loan-consolidation", "direct-loans"],
  },
  {
    slug: "borrowers-defense",
    title: "Borrower's Defense to Repayment",
    shortTitle: "Borrower's Defense",
    category: "forgiveness",
    excerpt:
      "Federal program that can discharge your entire federal loan balance — and refund payments you've already made — if your school misled you about something material.",
    keywords: ["Borrower's Defense", "BDR", "loan discharge", "school misrepresentation"],
    updated: "2026-05-01",
    body: `
      <p>Borrower's Defense to Repayment (BDR) is the federal program that can discharge your entire federal student loan balance — and refund payments you've already made — if your school misled you in a way that affected your decision to enroll, pay, or take out loans. It's the most valuable single tool in federal student aid for people who have a legitimate claim.</p>
      <h2>What you have to show</h2>
      <p>To win a Borrower's Defense claim, you generally need to prove three things:</p>
      <ol>
        <li>Your school (or someone acting for it) made a substantial misrepresentation,</li>
        <li>You reasonably relied on that misrepresentation, and</li>
        <li>The misrepresentation caused you financial harm.</li>
      </ol>
      <h2>Classic examples</h2>
      <p>Schools have been found liable for misrepresentations about job-placement rates ("95% of our graduates find jobs in their field"), credit transferability ("your credits will transfer to any state university"), accreditation status, licensure pass rates, and the existence of programs that didn't actually exist when promised.</p>
      <h2>What's <em>not</em> a Borrower's Defense claim</h2>
      <p>Borrower's Defense isn't "I didn't get the education I expected" or "the program was harder than I thought." Disappointment isn't a claim. You need a specific, identifiable misrepresentation made by the school, that you can describe with reasonable detail.</p>
      <h2>Evidence you can use</h2>
      <p>Emails from recruiters or admissions, marketing materials, the school's website at the time you enrolled (often archived on the Wayback Machine), recorded calls, course catalogs, and your own contemporaneous notes all count. The more specific and dated the evidence, the better.</p>
      <h2>Special cases</h2>
      <p>If your school was the subject of a federal enforcement action, state attorney general lawsuit, or class-action settlement, you may have a stronger automatic claim. Several large for-profit chains have had borrowers receive automatic discharges as part of group settlements.</p>
      <h2>Timing</h2>
      <p>Borrower's Defense applications can take many months to over a year to process. During the review, you can request the Department of Education place your loans in forbearance — but be aware that <a href="/wiki/forbearance-vs-deferment">forbearance</a> still accrues interest.</p>
    `,
    related: ["tpd-discharge", "pslf", "direct-loans"],
  },
  {
    slug: "tpd-discharge",
    title: "Total and Permanent Disability (TPD) Discharge",
    shortTitle: "TPD Discharge",
    category: "forgiveness",
    excerpt:
      "Federal program that discharges your federal student loans entirely if you become totally and permanently disabled. Three qualifying paths: VA, SSA, or a physician.",
    keywords: ["TPD discharge", "disability discharge", "student loan discharge"],
    updated: "2026-05-01",
    body: `
      <p>Total and Permanent Disability (TPD) Discharge is the federal program that discharges your federal student loans — including Direct Loans, FFEL Loans, Perkins Loans, and TEACH Grant service obligations — if you have a total and permanent disability that prevents you from working.</p>
      <h2>Three qualifying paths</h2>
      <p>You can qualify for TPD discharge through any one of three routes:</p>
      <ol>
        <li><strong>Department of Veterans Affairs (VA):</strong> If you're a veteran with a service-connected disability rated 100% disabling, or if the VA has determined you're individually unemployable due to service-connected disabilities.</li>
        <li><strong>Social Security Administration (SSA):</strong> If you're receiving Social Security Disability Insurance (SSDI) or Supplemental Security Income (SSI) benefits and your medical reviewer determined your disability will last at least five years, or is permanent.</li>
        <li><strong>Licensed physician:</strong> A doctor of medicine or osteopathy certifies that you are unable to engage in substantial gainful activity due to a physical or mental impairment that has lasted (or is expected to last) at least 60 months or to result in death.</li>
      </ol>
      <h2>Automatic discharge for VA-100%</h2>
      <p>If you're a veteran with a 100% disability rating from the VA, the Department of Education now identifies you automatically and starts the discharge process without you having to apply. You'll receive a letter explaining your options.</p>
      <h2>What gets discharged</h2>
      <p>Your federal student loan balance is fully discharged. You're no longer responsible for the debt. The Department of Education also refunds payments you made on those loans during the period leading up to the discharge in some circumstances.</p>
      <h2>Three-year monitoring period</h2>
      <p>For physician-certified and SSA-certified TPD discharges, the Department of Education previously imposed a three-year monitoring period during which you had to verify your continued disability and income status. Recent regulatory changes have removed this monitoring period for most new TPD discharges.</p>
      <h2>How to apply</h2>
      <p>The TPD discharge application is filed with Nelnet, the servicer that handles all TPD applications for the Department of Education. You'll provide documentation from the VA, SSA, or your physician depending on which path you're using.</p>
    `,
    related: ["borrowers-defense", "direct-loans", "pslf"],
  },

  // ---------------- Concepts ----------------
  {
    slug: "discretionary-income",
    title: "Discretionary Income",
    category: "concepts",
    excerpt:
      "The portion of your income above a certain multiple of the federal poverty line. The base figure used to calculate every income-driven repayment plan.",
    keywords: ["discretionary income", "AGI", "federal poverty line"],
    updated: "2026-05-01",
    body: `
      <p>"Discretionary income" is a federally-defined term that determines your payment under every <a href="/wiki/income-driven-repayment">income-driven repayment</a> plan. It's not the same as your take-home pay or what you'd consider "extra money" in a household budget — it has a specific federal definition.</p>
      <h2>The formula</h2>
      <p>Discretionary income is your adjusted gross income (AGI, from line 11 of your federal tax return) minus a multiple of the <a href="/wiki/federal-poverty-line">federal poverty line</a> for your family size. The multiple depends on which IDR plan you're considering:</p>
      <ul>
        <li><strong>SAVE Plan:</strong> AGI − 225% of poverty line</li>
        <li><strong>PAYE Plan:</strong> AGI − 150% of poverty line</li>
        <li><strong>IBR Plan:</strong> AGI − 150% of poverty line</li>
        <li><strong>ICR Plan:</strong> AGI − 100% of poverty line (the least generous)</li>
      </ul>
      <h2>What this means in practice</h2>
      <p>Under SAVE, more of your income is excluded from the calculation, so your discretionary income is lower — and so is your monthly payment. Under ICR, less is excluded, so your discretionary income is higher and your payment is higher.</p>
      <h2>Family size matters</h2>
      <p>The federal poverty line increases with each additional household member. A family of four has a much higher poverty line than a single person. Counting your family size correctly on the IDR application can materially lower your payment.</p>
      <h2>Filing status matters</h2>
      <p>If you're married and file jointly, your spouse's income is generally included in the calculation. If you file separately, most IDR plans will only count your individual income. (SAVE has its own rules here — talk to a strategist if you're weighing the trade-offs.)</p>
      <h2>When discretionary income is zero</h2>
      <p>If your AGI is below the relevant poverty multiple, your discretionary income is zero — and your IDR payment is $0 per month. Months at $0 still count toward IDR forgiveness and (for borrowers in qualifying employment) toward <a href="/wiki/pslf">PSLF</a>.</p>
    `,
    related: ["save-plan", "paye-plan", "ibr-plan", "icr-plan", "income-driven-repayment"],
  },
  {
    slug: "federal-poverty-line",
    title: "Federal Poverty Line",
    category: "concepts",
    excerpt:
      "Annual income thresholds published by the U.S. Department of Health and Human Services. Used in IDR formulas to set the floor for what counts as 'discretionary' income.",
    keywords: ["federal poverty line", "poverty guidelines", "HHS"],
    updated: "2026-05-01",
    body: `
      <p>The federal poverty line is a set of income thresholds published every year by the U.S. Department of Health and Human Services (HHS). It's used to determine eligibility for many federal programs — Medicaid, SNAP, ACA subsidies — and to set the floor for <a href="/wiki/discretionary-income">discretionary income</a> in every <a href="/wiki/income-driven-repayment">IDR repayment</a> plan.</p>
      <h2>How it scales</h2>
      <p>The poverty line goes up with household size. As of the 2025 HHS Poverty Guidelines for the 48 contiguous states and DC: $15,650 for a household of one, with about $5,500 added for each additional person. Alaska and Hawaii have separate, higher thresholds.</p>
      <h2>How IDR plans use it</h2>
      <p>Every IDR plan starts by calculating a multiple of the poverty line for your household size. The SAVE Plan uses 225% (so $35,213 for one person, $47,588 for two, etc.). PAYE and IBR use 150%. ICR uses 100%. Any income above that multiple is "discretionary" and feeds into the payment formula.</p>
      <h2>Why the multiple matters</h2>
      <p>Doubling the poverty multiple (from 150% to a hypothetical 300%) would dramatically lower payments for most borrowers. This is why <a href="/wiki/save-plan">SAVE's 225%</a> threshold is more generous than the 150% used by older plans.</p>
      <h2>When it changes</h2>
      <p>HHS releases new poverty guidelines every January. IDR calculations typically use the guidelines that were in effect when you certified your income, so a January re-certification will reflect the new year's numbers.</p>
    `,
    related: ["discretionary-income", "save-plan", "income-driven-repayment"],
  },
  {
    slug: "nslds",
    title: "NSLDS (National Student Loan Data System)",
    category: "concepts",
    excerpt:
      "The federal government's central database of all federal student aid disbursements. The single source of truth for what you owe, to whom.",
    keywords: ["NSLDS", "National Student Loan Data System", "federal loan record"],
    updated: "2026-05-01",
    body: `
      <p>The National Student Loan Data System (NSLDS) is the U.S. Department of Education's central database for federal student aid. Every Direct Loan, FFEL Loan, Perkins Loan, and Pell Grant you've ever received is recorded there. If a loan isn't in NSLDS, it isn't a federal loan.</p>
      <h2>What's in your NSLDS file</h2>
      <p>For each loan, NSLDS records the original amount, current outstanding balance, interest rate, disbursement date, loan type, your current servicer, your loan status (in school, in grace, in repayment, in default, etc.), and the cumulative disbursements you've received.</p>
      <h2>How to pull your file</h2>
      <p>Log in to <a href="https://studentaid.gov" rel="noopener">studentaid.gov</a> with your FSA ID. Your full NSLDS picture is under "My Aid." You can also download a CSV-style file of every loan you've ever taken.</p>
      <h2>Why this matters</h2>
      <p>Before recommending any repayment strategy, a student loan strategist will pull your NSLDS record. It's the only way to know what kinds of loans you have (which determines plan eligibility), who currently services each one, and whether you have any FFEL or Perkins loans that need to be <a href="/wiki/loan-consolidation">consolidated</a> for <a href="/wiki/pslf">PSLF</a>.</p>
      <h2>What's <em>not</em> in NSLDS</h2>
      <p>Private student loans aren't in NSLDS. Sallie Mae's private loans, bank refinance loans, and private credit-union loans only show up on your credit report — not in the federal system. If a loan doesn't appear in your NSLDS file, it's not eligible for federal IDR plans, PSLF, or discharge programs.</p>
    `,
    related: ["direct-loans", "loan-consolidation", "federal-vs-private"],
  },
  {
    slug: "loan-consolidation",
    title: "Federal Direct Loan Consolidation",
    shortTitle: "Loan Consolidation",
    category: "process",
    excerpt:
      "Combining one or more federal loans into a single new Direct Consolidation Loan. The standard way to make non-Direct loans eligible for PSLF and modern IDR plans.",
    keywords: ["consolidation", "Direct Consolidation Loan", "FFEL", "Perkins"],
    updated: "2026-05-01",
    body: `
      <p>Federal Direct Loan Consolidation is the process of combining one or more federal student loans into a single new Direct Consolidation Loan. It's a tool, not a default decision — sometimes consolidating is essential, and sometimes it costs you progress.</p>
      <h2>When consolidation is required</h2>
      <p>If you have <a href="/wiki/direct-loans">FFEL Loans</a>, Perkins Loans, or Parent PLUS loans and you want to pursue <a href="/wiki/pslf">PSLF</a> or most modern <a href="/wiki/income-driven-repayment">IDR plans</a>, you generally need to consolidate first. PSLF requires Direct Loans. SAVE and PAYE require Direct Loans. The consolidation makes your loans eligible.</p>
      <h2>The catch: counting resets</h2>
      <p>Historically, when you consolidated, the PSLF qualifying-payment count on your old loans was reset to zero. The new Direct Consolidation Loan started fresh. Recent policy changes (the IDR Account Adjustment, expanded PSLF rules) have provided one-time credit for qualifying past payments — but the underlying default rule is still "consolidation can reset your count." Always certify your numbers before and after.</p>
      <h2>What you get</h2>
      <p>One loan, one monthly payment, one servicer. The interest rate is the weighted average of the loans you consolidated, rounded up to the nearest one-eighth of a percent. Consolidation doesn't lower your rate — it might raise it slightly because of the rounding.</p>
      <h2>What you might lose</h2>
      <p>If you had Perkins Loans with their own borrower benefits (cancellation provisions for certain professions), consolidating into a Direct Consolidation Loan can eliminate those benefits. Same for older FFEL loans with subsidized interest provisions. Read carefully before consolidating.</p>
      <h2>When not to consolidate</h2>
      <p>If all your loans are already Direct Loans and you're not pursuing a specific program that requires consolidation, there's usually no reason to consolidate. The "single payment" convenience isn't worth potentially losing borrower benefits.</p>
    `,
    related: ["pslf", "direct-loans", "ibr-plan", "icr-plan"],
  },
  {
    slug: "capitalized-interest",
    title: "Capitalized Interest",
    category: "concepts",
    excerpt:
      "When unpaid interest is added to your loan's principal balance. From that point on, you're paying interest on the interest.",
    keywords: ["capitalized interest", "interest capitalization", "loan growth"],
    updated: "2026-05-01",
    body: `
      <p>Interest "capitalization" happens when unpaid interest on your loan is added to your principal balance. From that moment on, you owe interest on the (now-larger) principal — interest on interest. It's one of the main reasons federal student loan balances grow over time.</p>
      <h2>When capitalization happens</h2>
      <p>Federal student loan interest can capitalize at several specific events:</p>
      <ul>
        <li>The end of a deferment period (on Unsubsidized loans)</li>
        <li>The end of a forbearance period</li>
        <li>The end of your grace period after leaving school</li>
        <li>When you change repayment plans (sometimes)</li>
        <li>When you consolidate your loans</li>
      </ul>
      <h2>Why it matters</h2>
      <p>Suppose you have $30,000 in Unsubsidized loans at 6%. After 12 months in deferment, about $1,800 in interest has accrued. If that $1,800 capitalizes, your new principal is $31,800 — and from then on, the 6% rate is applied to that larger number. Over the life of the loan, capitalization can add thousands of dollars to what you ultimately pay.</p>
      <h2>How to avoid it</h2>
      <p>The simplest way to avoid capitalization is to pay the interest as it accrues, even if you're in deferment or forbearance. Most servicers allow interest-only payments without affecting your repayment status.</p>
      <h2>How SAVE protects you</h2>
      <p>The <a href="/wiki/save-plan">SAVE Plan</a> includes a unique provision: if your monthly payment doesn't cover all the interest that accrues, the government waives the difference. This means your balance won't grow under SAVE even if your payment is $0 — a major change from older IDR plans.</p>
    `,
    related: ["save-plan", "forbearance-vs-deferment", "loan-consolidation"],
  },

  // ---------------- Loan types ----------------
  {
    slug: "direct-loans",
    title: "Direct Loans",
    category: "loan-types",
    excerpt:
      "Federal student loans issued directly by the U.S. Department of Education. The only loan type fully eligible for PSLF and every modern IDR plan.",
    keywords: ["Direct Loans", "Direct Stafford", "Direct PLUS"],
    updated: "2026-05-01",
    body: `
      <p>Direct Loans are federal student loans issued and held directly by the U.S. Department of Education (rather than by a bank or other lender under federal guarantee). Almost all new federal student loans since July 2010 are Direct Loans.</p>
      <h2>Types of Direct Loans</h2>
      <ul>
        <li><strong>Direct Subsidized Loan:</strong> For undergraduates with demonstrated financial need. The government pays interest during in-school periods and certain deferments.</li>
        <li><strong>Direct Unsubsidized Loan:</strong> For undergraduates and graduate students. Interest accrues from disbursement, including during school.</li>
        <li><strong>Direct PLUS Loan:</strong> For graduate students (Grad PLUS) or parents of undergraduates (Parent PLUS). Higher interest rates, no need-based determination.</li>
        <li><strong>Direct Consolidation Loan:</strong> Created when you <a href="/wiki/loan-consolidation">consolidate</a> existing federal loans into a single new Direct Loan.</li>
      </ul>
      <h2>Why Direct matters</h2>
      <p>The federal programs that matter most — <a href="/wiki/pslf">PSLF</a>, the <a href="/wiki/save-plan">SAVE Plan</a>, <a href="/wiki/paye-plan">PAYE</a>, <a href="/wiki/tpd-discharge">TPD discharge</a> — all require Direct Loans. FFEL and Perkins loans are not directly eligible, but they can become eligible after consolidation into a Direct Consolidation Loan.</p>
      <h2>How to confirm your loans are Direct</h2>
      <p>Log in to <a href="/wiki/nslds">NSLDS</a> at studentaid.gov. Each loan in your account is labeled by type. Anything starting with "Direct" is a Direct Loan. "FFEL" or "Perkins" loans are not Direct Loans and may need to be consolidated to access certain programs.</p>
    `,
    related: ["subsidized-vs-unsubsidized", "nslds", "loan-consolidation", "pslf"],
  },
  {
    slug: "subsidized-vs-unsubsidized",
    title: "Subsidized vs. Unsubsidized Loans",
    category: "loan-types",
    excerpt:
      "The main difference between the two most common federal undergraduate loans. Subsidized loans don't accrue interest while you're in school; Unsubsidized loans do.",
    keywords: ["subsidized loans", "unsubsidized loans", "Stafford loans"],
    updated: "2026-05-01",
    body: `
      <p>Subsidized and Unsubsidized are the two main types of federal <a href="/wiki/direct-loans">Direct Loans</a> for undergraduate students. They differ in one critical way: who pays the interest during in-school periods.</p>
      <h2>Subsidized loans</h2>
      <p>The U.S. Department of Education pays the interest on Subsidized loans during:</p>
      <ul>
        <li>The time you're enrolled in school at least half-time</li>
        <li>The six-month grace period after you leave school</li>
        <li>Certain authorized deferments</li>
      </ul>
      <p>That means a Subsidized loan doesn't grow during these periods — the balance stays the same as the amount you borrowed. Subsidized loans are need-based: you have to demonstrate financial need to receive them, and they're only available to undergraduates.</p>
      <h2>Unsubsidized loans</h2>
      <p>Interest on Unsubsidized loans accrues from the day the loan is disbursed, even while you're still in school. You can pay the interest as it accrues (most students don't), or let it accumulate. If you let it accumulate, the interest will <a href="/wiki/capitalized-interest">capitalize</a> (be added to your principal) at certain events — usually at the end of your grace period.</p>
      <h2>Why the distinction matters</h2>
      <p>A $20,000 Subsidized loan and a $20,000 Unsubsidized loan are quite different by the time you start repayment. The Subsidized loan is still $20,000. The Unsubsidized loan may be $22,000 or more, depending on the interest rate and how long you were in school.</p>
      <h2>Both are Direct Loans</h2>
      <p>For repayment purposes — IDR plans, PSLF eligibility, discharge programs — Subsidized and Unsubsidized are treated identically. Both are <a href="/wiki/direct-loans">Direct Loans</a>, both qualify for the same programs.</p>
    `,
    related: ["direct-loans", "capitalized-interest", "federal-vs-private"],
  },
  {
    slug: "federal-vs-private",
    title: "Federal vs. Private Student Loans",
    category: "loan-types",
    excerpt:
      "The single most important distinction in student lending. Federal loans get IDR, PSLF, and discharge programs. Private loans don't.",
    keywords: ["federal vs private", "private student loans", "Sallie Mae"],
    updated: "2026-05-01",
    body: `
      <p>The most important fact in student lending: federal loans and private loans are two completely different things, and they get treated completely differently by every program described elsewhere on this site.</p>
      <h2>Federal loans</h2>
      <p>Federal loans are issued or guaranteed by the U.S. Department of Education. They include <a href="/wiki/direct-loans">Direct Subsidized, Direct Unsubsidized, Direct PLUS</a>, and the older FFEL and Perkins programs. Federal loans are eligible for:</p>
      <ul>
        <li><a href="/wiki/income-driven-repayment">Income-driven repayment</a> plans (SAVE, PAYE, IBR, ICR)</li>
        <li><a href="/wiki/pslf">Public Service Loan Forgiveness</a></li>
        <li><a href="/wiki/borrowers-defense">Borrower's Defense to Repayment</a></li>
        <li><a href="/wiki/tpd-discharge">Total and Permanent Disability discharge</a></li>
        <li>Deferment and forbearance with federal protections</li>
      </ul>
      <p>Federal loans also have fixed interest rates set by Congress and are tracked in <a href="/wiki/nslds">NSLDS</a>.</p>
      <h2>Private loans</h2>
      <p>Private student loans are issued by banks, credit unions, and online lenders (Sallie Mae, Earnest, SoFi, Citizens, Discover, your local bank). They are <em>not</em> eligible for any of the federal programs above. Your only options on a private loan are typically:</p>
      <ul>
        <li>Paying as scheduled</li>
        <li>Refinancing for a lower rate (if your credit qualifies)</li>
        <li>Negotiating with the lender</li>
        <li>In rare cases, settlement</li>
      </ul>
      <p>Private loans have variable or fixed rates set by the lender, and are governed by your loan contract — not federal regulation.</p>
      <h2>How to tell which you have</h2>
      <p>Federal loans appear in <a href="https://studentaid.gov" rel="noopener">studentaid.gov</a> under your NSLDS record. Private loans appear on your credit report but not in NSLDS. If a loan doesn't show up at studentaid.gov, it's almost certainly private.</p>
      <h2>The realistic strategy split</h2>
      <p>For federal loans, the play is usually optimizing your IDR plan, pursuing forgiveness if eligible, and handling re-certification carefully. For private loans, the play is usually refinancing if you have strong credit, negotiating if you don't, and settling as a last resort.</p>
    `,
    related: ["direct-loans", "nslds", "subsidized-vs-unsubsidized"],
  },

  // ---------------- Process ----------------
  {
    slug: "forbearance-vs-deferment",
    title: "Forbearance vs. Deferment",
    category: "process",
    excerpt:
      "Two ways to temporarily pause federal student loan payments. The difference: who pays the interest while payments are paused.",
    keywords: ["forbearance", "deferment", "pause payments"],
    updated: "2026-05-01",
    body: `
      <p>Forbearance and deferment are two ways to temporarily stop or reduce your federal student loan payments. They look similar but have one important difference: who pays the interest during the pause.</p>
      <h2>Deferment</h2>
      <p>During a deferment, the U.S. Department of Education pays the interest on your <a href="/wiki/subsidized-vs-unsubsidized">Subsidized loans</a>. The interest on your Unsubsidized loans still accrues — but the principal is paused. Deferments are available for specific qualifying situations: re-enrollment in school at least half-time, unemployment, certain economic hardships, active-duty military service, cancer treatment, and others.</p>
      <h2>Forbearance</h2>
      <p>During a forbearance, interest continues to accrue on <em>all</em> your loans, both Subsidized and Unsubsidized. You owe the interest. If you don't pay it as it accrues, it can <a href="/wiki/capitalized-interest">capitalize</a> when the forbearance ends — meaning it's added to your principal and you start owing interest on the interest. Forbearance is available for a wider range of situations than deferment and is often what servicers offer as a default solution.</p>
      <h2>When to use each</h2>
      <p>If you qualify for deferment (especially if you have Subsidized loans), deferment is almost always better than forbearance — the government covers some of the interest. If you only qualify for forbearance, consider whether you can keep paying just the interest each month, even if you can't make full payments. Doing so prevents capitalization.</p>
      <h2>Effects on PSLF and IDR</h2>
      <p>Time spent in forbearance or deferment generally doesn't count toward <a href="/wiki/pslf">PSLF</a> or IDR forgiveness. There are narrow exceptions (some forbearances have been recharacterized as qualifying under recent Department guidance), but the safer assumption is that paused months don't count.</p>
      <h2>The strategist's view</h2>
      <p>Servicers often default to offering forbearance because it's easy. Before agreeing to a forbearance, ask: do I qualify for an IDR plan that would lower my payment to zero (or close to it)? On <a href="/wiki/save-plan">SAVE</a> or <a href="/wiki/paye-plan">PAYE</a>, low-income months can produce a $0 payment that <em>does</em> count toward forgiveness — much better than a forbearance.</p>
    `,
    related: ["save-plan", "capitalized-interest", "pslf"],
  },
];

export function getWikiEntry(slug: string): WikiEntry | undefined {
  return wikiEntries.find((e) => e.slug === slug);
}

export function getRelatedEntries(slugs: string[]): WikiEntry[] {
  return slugs
    .map((s) => wikiEntries.find((e) => e.slug === s))
    .filter((e): e is WikiEntry => e !== undefined);
}

export function getEntriesByCategory(category: WikiCategory): WikiEntry[] {
  return wikiEntries.filter((e) => e.category === category);
}
