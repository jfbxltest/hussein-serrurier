module.exports = {
  main: {
    name: "Serrurier Hussein",
    phone: "0490586360",
    email: "info@serrurier-hussein.be",
    domain: "serrurier-hussein.be",
    url: "https://hussein-test-demo.netlify.app",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "980px",
    xl: "1280px",
    "2xl": "1536px",
  },
  classesImage: {
    image_3: {
      formats: ["avif", "webp", "jpeg"],
      widths: [400, 600],
      medias: {
        sizes: {
          sm: "480px",
          lg: "600px",
        },
        default: "1280px",
      },
    },
    image_mid: {
      formats: ["avif", "webp", "jpeg"],
      widths: [500, 900],
      medias: {
        sizes: {
          sm: "500px",
          lg: "900px",
        },
        default: "1280px",
      },
    },
  },
  classesCTA: {
    call: {
      text: "Appelez-nous",
      href: "",
    },
    meeting: {
      text: "Prendre un RDV",
      href: "",
    },
    tarif: {
      text: "Consuluter nos tarifs",
      href: "",
    },
  },
};
