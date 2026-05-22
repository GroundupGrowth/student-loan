import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        navy: "var(--navy)",
        gold: "var(--gold)",
        cream: "var(--cream)",
        ink: "var(--ink)",
        slate: "var(--slate)",
        line: "var(--line)",
        // shadcn semantic mappings — kept minimal, mapped onto the brand tokens
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--navy)",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "var(--cream)",
          foreground: "var(--ink)",
        },
        muted: {
          DEFAULT: "var(--cream)",
          foreground: "var(--slate)",
        },
        accent: {
          DEFAULT: "var(--gold)",
          foreground: "var(--ink)",
        },
        border: "var(--line)",
        input: "var(--line)",
        ring: "var(--navy)",
        destructive: {
          DEFAULT: "#B42318",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["17px", { lineHeight: "1.65" }],
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "6px",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "96px",
        "section-sm": "56px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
