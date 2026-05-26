/**
 * Team data. All entries are explicitly PLACEHOLDER — replace before launch
 * with real first/last initial names, real roles, and real bios. Do not ship
 * the site with these as-is.
 *
 * `photo` is a placeholder Unsplash portrait — swap with a real headshot.
 */

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  photo: string;
  isPlaceholder: true;
};

export const team: TeamMember[] = [
  {
    initials: "AM",
    name: "PLACEHOLDER — Alex M.",
    role: "Founder & Lead Financial Strategist",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=70",
    isPlaceholder: true,
  },
  {
    initials: "JR",
    name: "PLACEHOLDER — Jordan R.",
    role: "Student Loan Specialist",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=70",
    isPlaceholder: true,
  },
  {
    initials: "SK",
    name: "PLACEHOLDER — Sam K.",
    role: "Credit Strategist",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=70",
    isPlaceholder: true,
  },
  {
    initials: "TP",
    name: "PLACEHOLDER — Taylor P.",
    role: "Credit Repair Expert",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=70",
    isPlaceholder: true,
  },
];
