/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Hind", "sans-serif"],
        tenor: ['"Tenor Sans"', "serif"],
      },
    },
  },
  plugins: [],
};
