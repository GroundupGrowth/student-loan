import { Plus_Jakarta_Sans } from "next/font/google";

/**
 * v2 design system: a single typeface, Plus Jakarta Sans. Friendly
 * grotesque, wide weight range, looks confident at display sizes and clean
 * at body sizes. Replace this single import to swap fonts site-wide.
 */
export const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});
