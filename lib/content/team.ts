/**
 * Team data. All entries are explicitly PLACEHOLDER — replace before launch
 * with real first/last initial names, real roles, and real bios. Do not ship
 * the site with these as-is.
 */

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  isPlaceholder: true;
};

export const team: TeamMember[] = [
  {
    initials: "AM",
    name: "PLACEHOLDER — Alex M.",
    role: "Founder & Lead Financial Strategist",
    isPlaceholder: true,
  },
  {
    initials: "JR",
    name: "PLACEHOLDER — Jordan R.",
    role: "Student Loan Specialist",
    isPlaceholder: true,
  },
  {
    initials: "SK",
    name: "PLACEHOLDER — Sam K.",
    role: "Credit Strategist",
    isPlaceholder: true,
  },
  {
    initials: "TP",
    name: "PLACEHOLDER — Taylor P.",
    role: "Credit Repair Expert",
    isPlaceholder: true,
  },
];
