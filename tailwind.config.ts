import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-saira)",
      },
      screens: {
        anyhover: { raw: "(any-hover: hover)" },
      },
      gridTemplateRows: {
        "root-layout": "auto 1fr auto",
        root: "1fr auto",
      },
      gridTemplateColumns: {
        root: "auto 1fr",
      },
      colors: {
        primary: {
          "50": "#f2fbf3",
          "100": "#e0f8e3",
          "200": "#c2f0c9",
          "300": "#93e2a0",
          "400": "#5ccc6e",
          "500": "#36b14a",
          "600": "#279239",
          "700": "#22732f",
          "800": "#205b2a",
          "900": "#1c4b25",
          "950": "#0a2911",
        },
        secondary: {
          "50": "#f4fbf2",
          "100": "#e6f6e2",
          "200": "#ceecc6",
          "300": "#a5dc99",
          "400": "#76c365",
          "500": "#4e9f3d",
          "600": "#3f8930",
          "700": "#346c29",
          "800": "#2d5625",
          "900": "#264720",
          "950": "#11260d",
        },
        neutral: {
          "50": "#f5f6f5",
          "100": "#e6e7e6",
          "200": "#d0d1d0",
          "300": "#afb2ae",
          "400": "#888a86",
          "500": "#656864",
          "600": "#5c5f5b",
          "700": "#4f504e",
          "800": "#454644",
          "900": "#3c3d3c",
          "950": "#252725",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
