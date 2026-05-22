# Image placeholders

This directory exists so the `/public/placeholders/` URL space is reserved.
It is intentionally empty — every image slot on the site is rendered through
the `<PlaceholderImage />` or `<PlaceholderAvatar />` React components in
`components/site/`, which display a labeled visual placeholder until real
assets are dropped in.

## Where placeholders live, and what to swap them with

When the photography arrives, replace each `<PlaceholderImage />` call site
with a `next/image` reference. The `label` prop on each placeholder already
describes what the photo should be.

| Page                                  | What's needed                              | Recommended size |
| ------------------------------------- | ------------------------------------------ | ---------------- |
| `/` hero                              | Founder portrait or consultation scene     | 1200×1500        |
| `/` service deep-dives (×4)           | Service-relevant scene                     | 1200×800         |
| `/` blog teaser cards (×3)            | Article hero images                        | 1200×800         |
| `/about` hero                         | Founder portrait                           | 1200×1500        |
| `/services/*` hero (×4)               | Service-relevant scene                     | 1200×800         |
| `/blog/[slug]` hero                   | Article hero image                         | 1600×900         |
| Team avatars (×4)                     | Headshots                                  | 400×400          |

## Tone

- Warm tones, slightly desaturated.
- Real people in real situations — no stock photos of handshakes,
  diverse-team-laughing-at-laptop, or abstract gradient blobs.
- Document review, office context, real client scenes only.
