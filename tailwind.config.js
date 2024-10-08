/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Marcellus", "sans-serif"],
        title: ['"Tenor Sans"', "serif"],
      },
      fontSize: {
        small: "12px",
        medium: "32px",
        mediumSubtitle: "25.6px",
        big: "45px",
        heading: "40px",
        subHeading: "14px",
      },
      colors: {
        primary: "#3d3d3d",
      },
      backgroundColor: {
        darkGreen: "#425A51",
        secondaryBodyBackground: "#EFEFEF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024",
          xl: "1200px",
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [],
};
