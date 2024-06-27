import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bkg: "rgb(var(--color-bkg) / 1)",
        "span-purple": "rgb(var(--color-span-purple) / 1)",
        "span-green": "rgb(var(--color-span-green) / <alpha-value>)",
        text: "rgb(var(--color-text) / 1)",
        "menu-btn": "rgb(var(--color-menu-btn) /1)",
        "select-bkg": "rgb(var(--color-select-bkg)  /1)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
