import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5BA42",
        secondary: "#3E3E3E",
        black: "#000",
        white: "#FFF",
      },
      fontFamily: {
        jost: 'var(--font-jost)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
  darkMode: 'class',
} satisfies Config;
