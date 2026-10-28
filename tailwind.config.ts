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
        coral: "var(--color-coral)",
        raspberry: "var(--color-raspberry)",
        aubergine: "var(--color-aubergine)",
        yellow: "var(--color-yellow)",
        turquoise: "var(--color-turquoise)",
        cream: "var(--color-cream)",
        "soft-coral": "var(--color-soft-coral)",
        "soft-pink": "var(--color-soft-pink)",
        "soft-yellow": "var(--color-soft-yellow)",
        "soft-turquoise": "var(--color-soft-turquoise)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 20px 52px -34px rgb(50 23 37 / 28%)",
        card: "0 16px 38px -28px rgb(50 23 37 / 25%)",
      },
    },
  },
  plugins: [],
};

export default config;
