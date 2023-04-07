const breakpoints = require("./site.config").breakpoints;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, njk}"],
  theme: {
    screens: breakpoints,
    fontFamily: {
      sans: ["Open Sans", "Helvetica", "Arial", "Lucida", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      serif: ["Merriweather", "serif"],
      josefin: ['"Josefin Sans"', "sans-serif"],
      icones: ["icomoon"],
    },
    extend: {
      colors: {
        primary: "#f97316",
        secondary: "#475569",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          margin: "0 auto",
          maxWidth: "90%",
          "@screen sm": {
            maxWidth: "80%",
          },
          "@screen xl": {
            maxWidth: "1080px",
          },
        },
      });
    },
  ],
};

// coleur texte menu #546180
