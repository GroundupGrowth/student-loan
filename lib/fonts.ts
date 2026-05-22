import { Inter, Source_Serif_4 } from "next/font/google";

export const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
});

export const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  preload: true,
  weight: ["400", "500", "600", "700"],
});
