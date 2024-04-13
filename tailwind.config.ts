/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "full-w-header": "calc(100vh - var(--header-height))",
      },
      spacing: {
        "mobile-nav-4": "calc(var(--mobile-nav-height) + 1rem)",
      },
      colors: {
        black: "#111111",
        gray: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#111111",
        },
        "kagu-green": {
          "50": "#f1fcfb",
          "100": "#d1f6f3",
          "200": "#a3ece8",
          "300": "#58d5d3",
          "400": "#40bfc1",
          "500": "#26a2a6",
          "600": "#1c7f85",
          "700": "#1a676b",
          "800": "#1a5055",
          "900": "#1a4447",
          "950": "#09262a",
        },
        brand: "#58d5d3",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
