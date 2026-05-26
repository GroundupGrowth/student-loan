/**
 * Site-wide configuration. Every externally-visible URL, phone number, and
 * form endpoint lives here so it can be swapped in one place before launch.
 *
 * The `{{...}}` strings are intentional placeholders. They render visibly in
 * the UI so they are impossible to miss in QA. Replace each one with a real
 * value before the site goes live.
 */

export const SITE_NAME = "ClearPath Financial Freedom";
export const SITE_SHORT_NAME = "ClearPath";
export const SITE_TAGLINE =
  "Federal student loans, finally explained.";

// Contact — both raw (for tel:) and display formats.
export const PHONE = "{{PHONE}}"; // e.g. "+1-555-555-5555"
export const PHONE_DISPLAY = "{{PHONE}}"; // e.g. "(555) 555-5555"
export const EMAIL = "{{EMAIL}}"; // e.g. "hello@clearpath.com"
export const OFFICE_ADDRESS = "{{OFFICE_ADDRESS}}"; // multi-line allowed

// Booking & forms
export const CALENDLY_URL = "{{CALENDLY_URL}}";

// Home-hero VSL. Leave as the placeholder string until a real embed is
// ready; the home page renders <VslPlaceholder /> when this is unset.
// Example values once you have one:
//   YouTube: "https://www.youtube.com/embed/<VIDEO_ID>"
//   Vimeo:   "https://player.vimeo.com/video/<VIDEO_ID>"
//   Wistia:  "https://fast.wistia.net/embed/iframe/<VIDEO_ID>"
export const VSL_EMBED_URL = "{{VSL_EMBED_URL}}";
export const NEWSLETTER_ENDPOINT = "{{NEWSLETTER_ENDPOINT}}";
export const CONTACT_FORM_ENDPOINT = "{{CONTACT_FORM_ENDPOINT}}";
export const REVIEW_FORM_URL = "{{REVIEW_FORM_URL}}";

// Embeds
export const GOOGLE_MAPS_EMBED = "{{GOOGLE_MAPS_EMBED}}";

// Social
export const FACEBOOK_URL = "{{FACEBOOK_URL}}";
export const INSTAGRAM_URL = "{{INSTAGRAM_URL}}";
export const LINKEDIN_URL = "{{LINKEDIN_URL}}";

// Stats — only the four allowed by the brief, plus the rating count.
export const STATS = {
  yearsExperience: "10+",
  clientsServed: "5,000+",
  casesCompleted: "8,000+",
  averageRating: "5/5",
  reviewCount: "524+",
  satisfiedClients: "10K+",
} as const;
