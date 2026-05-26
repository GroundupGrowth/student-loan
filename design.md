# ClearPath — Design System v2

A finance-adapted reinterpretation of the Passionfroot landing page. Keeps
the warmth, rounded shapes, sticker-card feel, and friendly typography of
the reference. Skips the pastel rainbow and cartoon mascot — both undercut
trust for a regulated-financial-services audience.

The goal: differentiate hard from buttoned-up navy/serif competitor sites,
while still reading as a real firm a 40-year-old borrower will hand their
NSLDS record to.

---

## 1. Visual reference

- Primary inspiration: passionfroot.com (warm cream surfaces, coral
  accents, rounded sticker cards, hand-drawn touches, friendly grotesque
  typography)
- Adjacent: stripe.com (typographic confidence, generous whitespace),
  mercury.com (warm professionalism), maven.com (editorial pacing)

One-liner: **warm editorial firm**. Confident, friendly, professional.
Reads as a small modern boutique advisory, not a bank, not a SaaS.

---

## 2. Color palette

Six tokens. One accent. The palette is intentionally tight — discipline
beats variety here.

| Token             | Hex       | Use                                                  |
| ----------------- | --------- | ---------------------------------------------------- |
| `--surface`       | `#FBF5EC` | Page background. Warm cream.                         |
| `--surface-card`  | `#FFFFFF` | White cards floating on cream.                       |
| `--surface-deep`  | `#F2E9D7` | Alternating section background.                      |
| `--ink`           | `#1B1B1F` | Body text, headlines.                                |
| `--ink-soft`      | `#5A5A60` | Secondary text, captions.                            |
| `--ink-deep`      | `#14141A` | Dark CTA band and footer surfaces.                   |
| `--line`          | `#E8DFCB` | Borders, dividers (warm tone, not gray).             |
| `--coral`         | `#FF6B4A` | Primary CTA, sticker tags, underlines, links.        |
| `--coral-deep`    | `#E5532E` | Coral hover / pressed.                               |
| `--coral-soft`    | `#FFE2D6` | Soft coral fill — sticker labels, focus halos, tags. |

Status colors (only when needed in forms):
- Error: `#B42318`
- Success: `#0E7A4F`

**No** secondary accents. No blues, greens, purples. If a section needs
variety, the variety comes from surface (cream / deep cream / ink) and
sticker placement, not from a new hue.

---

## 3. Typography

One typeface: **Plus Jakarta Sans** via `next/font/google`. Friendly
grotesque, wide weight range, looks great big and small.

| Role        | Weight | Size                           | Line-height | Tracking   |
| ----------- | ------ | ------------------------------ | ----------- | ---------- |
| Display H1  | 700    | `clamp(2.5rem, 5vw, 4.25rem)`  | 1.04        | -0.028em   |
| H2          | 700    | `clamp(1.875rem, 3.5vw, 3rem)` | 1.1         | -0.02em    |
| H3          | 600    | `clamp(1.25rem, 2vw, 1.5rem)`  | 1.25        | -0.01em    |
| Body        | 400    | 17px                           | 1.6         | normal     |
| Lead body   | 500    | 20px                           | 1.45        | -0.005em   |
| Small / UI  | 500    | 14px                           | 1.5         | normal     |
| Eyebrow     | 600    | 12px                           | 1.4         | 0.18em uc  |

Sentence case for everything except eyebrows. No ALL-CAPS headlines.
Italic Plus Jakarta is acceptable for emphasis inside body copy.

A signature treatment: one or two key words per hero / section H1 get a
**hand-drawn coral underline** (inline SVG component) — this is the only
"hand-drawn" element we borrow from the reference.

---

## 4. Shape & feel

### Radius scale

| Token         | Value | Use                                       |
| ------------- | ----- | ----------------------------------------- |
| `--r-xs`      | 6px   | Inputs, small tags                        |
| `--r-sm`      | 10px  | Small cards                               |
| `--r-md`      | 16px  | Default card, image frames                |
| `--r-lg`      | 22px  | Large sticker cards, section panels       |
| `--r-xl`      | 28px  | Hero panels, big visuals                  |
| `--r-pill`    | 999px | Buttons, tags, sticker labels             |

### Shadow scale

| Token           | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| `--shadow-sm`   | `0 1px 2px rgba(20,20,26,0.04)`                              |
| `--shadow-card` | `0 8px 22px -10px rgba(20,20,26,0.08), 0 2px 6px rgba(20,20,26,0.04)` |
| `--shadow-lift` | `0 18px 38px -16px rgba(20,20,26,0.16)`                      |
| `--shadow-stamp`| `0 4px 0 var(--ink)` (sticker-stamp style, used on key CTAs) |

### Borders

Borders are present and warm. Default: `1px solid var(--line)`. We do
**not** use ghost borders or borderless cards — the border is a quiet but
deliberate frame.

### Motion

- Hover lifts: `translateY(-2px)` with shadow grow
- Buttons: 120ms color transition, 150ms transform
- No bouncy spring physics, no entrance animations on scroll, no reveal
  effects. Static feels confident.

---

## 5. Components

### Buttons

Pills. Three variants:

| Variant   | Shape | Fill                | Text        | Hover                                  |
| --------- | ----- | ------------------- | ----------- | -------------------------------------- |
| Primary   | Pill  | `--coral`           | white       | `--coral-deep`, lift 1px               |
| Secondary | Pill  | transparent + 1.5px `--ink` border | `--ink`     | `--ink` fill, white text               |
| Tertiary  | none  | underlined text     | `--ink`     | coral underline, color shifts to coral |

Size scale:
- `sm`: h-9, 14px x 16px padding, 14px text
- `md`: h-11, 14px x 22px padding, 15px text (default)
- `lg`: h-13, 16px x 28px padding, 16px text

A small number of "hero" primary buttons can opt into the **stamp shadow**
(`--shadow-stamp`, a hard 4px ink-colored shadow underneath) for extra
punch above-the-fold. Use sparingly — once per page max.

### Sticker tag

A new component. Used liberally throughout (instead of the navy/serif
eyebrows of the v1 design). Pill-shaped, `--coral-soft` background, `--coral`
text, 12px medium, 4px vertical / 10px horizontal padding. Sometimes
prefixed by a numbered orange circle (`01`, `02`, `03` indicators).

### Cards

White surface on cream sections. White-on-deep-cream sections for
secondary cards.

- Default card: `--surface-card` bg, `--r-md` radius, `--line` 1px border,
  `--shadow-card` shadow, 28px padding desktop / 24px mobile
- Sticker card (testimonials, "what we handle" items): same as default
  but `--r-lg` radius, no border, just shadow, slight tilt
  (`rotate(-0.5deg)` to `rotate(0.5deg)`) only on testimonial cards for
  the wall-of-love feel

### Accordion (FAQ)

White card stack. Each item: full white card with `--r-md` radius,
`--line` border, 22px padding. Closed state: title only. Open state:
title in `--ink`, body 16px in `--ink-soft`. A small coral plus icon on
the right, rotates to minus when open.

### Form fields

- Background: `--surface-card`
- Border: 1.5px `--line`, becomes `--ink` on focus
- Radius: `--r-sm`
- Focus halo: 4px `--coral-soft` ring (not blue, not navy)
- Labels: 14px medium, sit above the field with 6px gap
- Error: `--line` border becomes `#B42318`, helper text in error red

---

## 6. Layout & rhythm

| Token             | Value         | Use                                          |
| ----------------- | ------------- | -------------------------------------------- |
| Max content width | 1200px        | Container width across all sections          |
| Section padding   | 120px / 80px  | Top + bottom desktop / mobile                |
| Section gap       | None — sections butt directly using surface color contrast |
| Card grid gap     | 24px desktop / 16px mobile                                 |
| Gutter            | 24px          | Page edge padding                            |

Sections alternate surface colors (`--surface` ↔ `--surface-deep`) to
create rhythm without needing separators. Dark sections (CTA band,
footer) use `--ink-deep`.

---

## 7. Imagery & decoration

### Photos

- Same Unsplash placeholder approach as v1 (warm, slightly desaturated)
- Frame: `--r-lg` radius, no border, soft `--shadow-card` shadow
- Optional sticker tag overlaid bottom-left ("Real client" / "Strategy
  call" / etc.) for funnel-y warmth — use sparingly

### Icons

- Continue with lucide-react, but bigger (28–32px) and stroked in `--coral`
  (not navy) on key marketing surfaces
- Inside icon-circle cards: 48px circle in `--coral-soft`, 22px icon in
  `--coral`

### Hand-drawn elements (the single playful concession)

Three small SVG components, used very sparingly:
- `<UnderlineSwoosh />` — a hand-drawn coral underline placed under one
  key word per H1
- `<ArrowDoodle />` — a coral arrow doodle, used twice on the home page
  to connect sections
- `<StarBurst />` — a small coral starburst used as a "new" / "featured"
  sticker tag

**No mascot character. No fruit illustrations. No "stickers" of cartoon
bunnies.** The hand-drawn touch is restricted to underlines and arrows.

### Stamps / numbered indicators

For the "How it works" 3-step section: each step gets a coral filled
circle (`--coral` bg, white text, 36px diameter, weight 700) with the
step number. Same circles used for "1 / 2 / 3" labels in the blog teaser
and resource grids.

---

## 8. Section patterns (informs the home page rebuild)

A standardized vocabulary so all sections look like they're from the same
firm.

### Hero
- Two columns desktop / stacked mobile
- Left: eyebrow tag + H1 with coral underline on one word + lead-body
  subhead + primary/secondary buttons + trust line
- Right: VSL placeholder (16:9, `--r-lg` radius, `--shadow-card`)
- Optional: floating sticker callout overlapping the right edge of the
  VSL (a single client-quote excerpt or stat)

### Pain-point strip
- Single-column centered
- H2 + 3 short pain bullets, each prefixed by a coral check-cross icon
  ("That's not your fault — and it's fixable")

### "What we handle" 3-up
- Three white sticker cards on `--surface-deep` background
- Each card: numbered coral circle, H3 title, 2-sentence description
- Optional small arrow doodle between cards (desktop only)

### Deep-dive (single service)
- Two columns, image right, text left
- Sticker eyebrow + H2 + lead paragraph + checklist of 4 items
- Primary CTA at the bottom of the column

### Why-choose / values 3-up
- Three white cards on `--surface` background
- Icon circle + H3 + body
- No images

### Stats strip
- Dark `--ink-deep` band
- 4 stats in serif-y heavy weight, big numbers, small caption underneath
- Optional small coral underline on one stat

### Testimonial wall
- 4–6 sticker cards on `--surface-deep`
- Slight random rotation (`rotate(-0.6deg)` to `rotate(0.6deg)`)
- White cards with coral quote-mark icon at top

### Blog teaser
- Three blog cards on `--surface`
- Image top, sticker date tag bottom-left of image, title, two-line
  excerpt, "Read More" tertiary button

### Final CTA band
- Full-width `--ink-deep` background
- Centered H2, subhead, two CTAs (primary coral + secondary outline-white)

---

## 9. Anti-patterns

Things we do **not** do:
- No multi-pastel rainbow sections (pink → green → yellow → blue)
- No cartoon mascot character
- No fruit / animal / object illustrations beyond the three approved
  hand-drawn SVGs
- No purple, no indigo, no electric blue
- No gradients, no glassmorphism, no glow effects
- No serif headlines (this is a v2 change — the brand is now sans-only)
- No ALL CAPS HEADLINES
- No tilted-card grids (only testimonial cards get a tiny rotation; cards
  in services / blog / team grids stay aligned)
- No bouncy entrance animations
- No abstract gradient blobs in backgrounds
- No "as seen in" press logos until real ones exist (rule from v1 stands)

---

## 10. Implementation map

Files touched during the rebuild:

| File                                     | Change                                                  |
| ---------------------------------------- | ------------------------------------------------------- |
| `tailwind.config.ts`                     | Colors, radius scale, shadow scale, font, container     |
| `app/globals.css`                        | CSS variables, base type, component utilities           |
| `lib/fonts.ts`                           | Plus Jakarta Sans only (drop Source Serif + Inter)      |
| `components/ui/button.tsx`               | Pill shape, coral primary, stamp variant                |
| `components/ui/card.tsx`                 | New radius/shadow/padding                               |
| `components/ui/accordion.tsx`            | Plus-icon, white card stack                             |
| `components/ui/input.tsx` / `textarea`   | New focus halo, warm border                             |
| `components/site/sticker-tag.tsx` (new)  | Reusable sticker-tag component                          |
| `components/site/numbered-circle.tsx` (new) | Coral numbered circle for "How it works"             |
| `components/site/header.tsx`             | Pill nav buttons, coral primary CTA                     |
| `components/site/footer.tsx`             | `--ink-deep` background, new column layout              |
| `components/site/cta-band.tsx`           | `--ink-deep` background, pill CTAs                      |
| `components/site/trust-bar.tsx`          | Sticker-card style, coral stars                         |
| `components/site/service-deep-dive.tsx`  | New layout pattern                                      |
| `components/site/team-card.tsx`          | Sticker card                                            |
| `components/site/testimonial-card.tsx`   | Sticker card with rotation                              |
| `components/site/blog-card.tsx`          | New card style + date sticker                           |
| `components/site/stats-strip.tsx`        | Dark band, big numbers                                  |
| `components/site/placeholder-image.tsx`  | `--r-lg` radius, no border                              |
| `components/site/vsl-placeholder.tsx`    | Coral play button, sticker caption                      |
| `app/page.tsx`                           | Pain-point strip, sticker tags, hand-drawn underline    |
| `lib/svg/*` (new)                        | `<UnderlineSwoosh />`, `<ArrowDoodle />`, `<StarBurst />` |

The rest of the pages (about, service page, blog, contact, reviews,
legal) inherit automatically from the token + component changes but get
a polish pass in a follow-up commit.
