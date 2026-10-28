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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
      },
      boxShadow: {
        editorial: "0 18px 56px -40px rgb(50 23 37 / 32%)",
      },
    },
  },
  plugins: [],
};

export default config;
