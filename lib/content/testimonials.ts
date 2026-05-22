/**
 * Testimonials are intentionally placeholder strings. The brief explicitly
 * forbids invented client names or quotes. Replace each entry with a real
 * client review before launch.
 */

export type Testimonial = {
  quote: string;
  attribution: string;
  isPlaceholder: true;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — paste a real, written-permission client quote here. Keep it to 3–4 sentences and end with a specific outcome rather than a generic compliment.",
    attribution: "PLACEHOLDER — Client first name, last initial, city, state",
    isPlaceholder: true,
  },
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — paste a real, written-permission client quote here. Pick a story that names a specific service (e.g., student loan relief or credit cleanup) so prospects can see themselves in it.",
    attribution: "PLACEHOLDER — Client first name, last initial, city, state",
    isPlaceholder: true,
  },
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — paste a real, written-permission client quote here. Where possible, include a concrete number — months saved, score raised, payment lowered — that the client has agreed to share publicly.",
    attribution: "PLACEHOLDER — Client first name, last initial, city, state",
    isPlaceholder: true,
  },
];

// Used on the Reviews page (a larger grid). All entries are placeholders.
export const allReviews: Testimonial[] = [
  ...testimonials,
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — replace with real review #4.",
    attribution: "PLACEHOLDER — Client name, city",
    isPlaceholder: true,
  },
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — replace with real review #5.",
    attribution: "PLACEHOLDER — Client name, city",
    isPlaceholder: true,
  },
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — replace with real review #6.",
    attribution: "PLACEHOLDER — Client name, city",
    isPlaceholder: true,
  },
];
