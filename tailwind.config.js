/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      Roboto: ['"Roboto"', "serif"],
    },
    extend: {
      colors: {
        "primary": "#074CA1",
        "red": "#C4141B",
        "green": "#166834",
        "black": "#221E1F",
        "blue": "#00396E",
        "lightblue": "#1D92D1",
      }

    },
  },
  plugins: [],
}

