/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      colors: {
        blackCustom: "#1d2123",
        grayCustom: "#262a2d",
        yellowCustom: "#facd66",
        pinkCustom: "#F3E8F3",
        gray: {
          DEFAULT: "#33373B",
        },
      },
    },
  },
  plugins: [],
};
