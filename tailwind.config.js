/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },

      "spring-green": {
        50: "#eefff8",
        100: "#d7fff1",
        200: "#b1ffe4",
        300: "#75ffd0",
        400: "#32f6b3",
        500: "#08f0a2",
        600: "#00ba7b",
        700: "#049163",
        800: "#097250",
        900: "#0a5d44",
        950: "#003525",
      },
    },
  },
  plugins: [],
};
