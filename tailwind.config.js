const breakpoints = require("./site.config").breakpoints;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, md}", "./dist/**/*.{html}"],
  safelist: ["blue-section"],
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
      keyframes: {
        flowToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "leading-flow": "flowToLeft 15s linear ",
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
          maxWidth: "80%",
          "@screen sm": {
            maxWidth: "90%",
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
