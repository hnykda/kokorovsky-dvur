import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b4513",
        "primary-dark": "#654321",
        accent: "#c9a84c",
        cream: "#faf7f2",
        parchment: "#fdf6e3",
        "text-dark": "#2c1810",
        "text-muted": "#5c4033",
      },
      fontFamily: {
        serif: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [typography],
};

export default config;
