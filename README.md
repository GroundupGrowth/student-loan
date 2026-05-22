# ClearPath Financial Freedom — Marketing Site

Next.js 14 (App Router) marketing site for ClearPath Financial Freedom (working brand name).
Static export, mobile-first, AA accessible.

## Quick start

```bash
npm install
npm run dev
```

## Renaming the brand

The brand name "ClearPath Financial Freedom" / "ClearPath" appears in copy
across `app/` and `components/`. Use a project-wide find-and-replace before
launch.

## Things to swap before launch

All external values live in `lib/config.ts` — phone, Calendly URL, social
URLs, form endpoints, Google Maps embed. Nothing is hardcoded inline.

Photo placeholders, OG image, and testimonial/client-name placeholders are
flagged with `PLACEHOLDER` comments in JSX and copy. Grep the repo for
`PLACEHOLDER` to find every one.

## Analytics

`app/layout.tsx` has a marked comment block where the GA4 / Plausible tag
should be dropped.

## Build

```bash
npm run build    # outputs to /out as a static site
```
