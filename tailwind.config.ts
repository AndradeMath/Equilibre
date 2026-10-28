import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        forest: "var(--color-forest)",
        sage: "var(--color-sage)",
        cream: "var(--color-cream)",
        clay: "var(--color-clay)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      boxShadow: {
        card: "0 24px 70px -38px rgb(34 47 39 / 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
