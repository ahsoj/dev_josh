import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ["var(--font-libre-text)"],
        clash: ["var(--font-clash-display)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundColor: {
        brand: "hsl(0, 0%, 100%)",
        primary: "hsl(294, 57%, 47%)",
        secondary: "hsl(232, 38%, 88%)",
        accent: "hsl(308, 48%, 50%)",
      },
      colors: {
        brand: "hsl(140, 60%, 1%)",
        primary: "hsl(294, 57%, 47%)",
        secondary: "hsl(232, 38%, 88%)",
        accent: "hsl(308, 48%, 50%)",
      },
      borderColor: {
        brand: "hsl(183, 43%, 9%)",
        primary: "hsl(294, 57%, 47%)",
        secondary: "hsl(232, 38%, 88%)",
        accent: "hsl(308, 48%, 50%)",
      },
      screens: {
        xs: "420px",
        xmd: "875px",
      },
    },
  },
  plugins: [],
};
export default config;
