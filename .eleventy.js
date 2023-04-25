const siteConfig = require("./site.config.js");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownLib = require("./11ty/markdown-it");
const classesImage = require("./11ty/classesImage.js")(
  siteConfig.classesImage,
  siteConfig.breakpoints
);
const classesCTA = require("./11ty/classesCTA.js")(siteConfig.classesCTA);
const shortCodeImage = require("./11ty/shortCodes/image.js");
const shortCodeCTA = require("./11ty/shortCodes/cta.js");

module.exports = (eleventyConfig) => {
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection("services", (collection) => {
    return collection.getFilteredByGlob("./src/services/*.md");
  });

  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    function (src, alt, cls, css) {
      const { widths, formats, sizes } =
        classesImage.getWidthsFormatsAndSizes(cls);
      return shortCodeImage(src, alt, css, widths, formats, sizes);
    }
  );

  eleventyConfig.addNunjucksAsyncShortcode("cta", function (cta, css) {
    const { text, href } = classesCTA.getctaData(cta);
    return shortCodeCTA(text, href, css);
  });

  eleventyConfig.addFilter("numberGsm", function (value) {
    const parts = []
    parts.push(value.substring(0, 4))
    parts.push(value.substring(4, 6))
    parts.push(value.substring(6, 8))
    parts.push(value.substring(8, 10))
    return parts.join(' ')
  });

  eleventyConfig.addPassthroughCopy("./src/assets/images/leading/**/*");
  eleventyConfig.addPassthroughCopy("./src/assets/images/Serrurier-Logo.jpg");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/css/reveal.css");
  eleventyConfig.addPassthroughCopy("./src/assets/js/");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
