import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        brand: "hsl(278, 100%, 4%)",
        primary: "hsl(273, 71%, 32%)",
        secondary: "hsl(44, 66%, 7%)",
        accent: "hsl(73, 64%, 47%)",
      },
      colors: {
        brand: "hsl(224, 65%, 90%)",
        primary: "hsl(273, 71%, 32%)",
        secondary: "hsl(44, 66%, 7%)",
        accent: "hsl(73, 64%, 47%)",
      },
      borderColor: {
        brand: "hsl(224, 65%, 90%)",
        primary: "hsl(273, 71%, 32%)",
        secondary: "hsl(44, 66%, 7%)",
        accent: "hsl(73, 64%, 47%)",
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
