/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      dropShadow: {
        flat: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        logo: "4px 4px 0px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
