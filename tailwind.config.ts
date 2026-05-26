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
      padding: "1.5rem",
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
        // v2 tokens — see design.md
        surface: "var(--surface)",
        "surface-card": "var(--surface-card)",
        "surface-deep": "var(--surface-deep)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-deep": "var(--ink-deep)",
        line: "var(--line)",
        coral: "var(--coral)",
        "coral-deep": "var(--coral-deep)",
        "coral-soft": "var(--coral-soft)",

        // shadcn semantic mappings — map onto v2 tokens
        background: "var(--surface)",
        foreground: "var(--ink)",
        primary: {
          DEFAULT: "var(--coral)",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "var(--surface-deep)",
          foreground: "var(--ink)",
        },
        muted: {
          DEFAULT: "var(--surface-deep)",
          foreground: "var(--ink-soft)",
        },
        accent: {
          DEFAULT: "var(--coral)",
          foreground: "#FFFFFF",
        },
        border: "var(--line)",
        input: "var(--line)",
        ring: "var(--coral)",
        destructive: {
          DEFAULT: "#B42318",
          foreground: "#FFFFFF",
        },

        // legacy aliases — components that haven't been migrated to v2 yet
        // pick up sensible defaults. Remove once every component references
        // only v2 token names.
        navy: "var(--ink)",
        gold: "var(--coral)",
        cream: "var(--surface-deep)",
        slate: "var(--ink-soft)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Legacy alias — old components referenced font-serif; map to the
        // same Plus Jakarta Sans for now so existing headings keep looking
        // right.
        serif: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["17px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "16px",
        lg: "22px",
        xl: "28px",
      },
      boxShadow: {
        card: "0 8px 22px -10px rgba(20,20,26,0.08), 0 2px 6px rgba(20,20,26,0.04)",
        lift: "0 18px 38px -16px rgba(20,20,26,0.16)",
        stamp: "0 4px 0 var(--ink)",
        "stamp-coral": "0 4px 0 var(--coral-deep)",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
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
