const siteConfig = require("./site.config.js");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownLib = require("./11ty/markdown-it");
const classesImage = require("./11ty/classesImage.js")(
  siteConfig.classesImage,
  siteConfig.breakpoints
);
const imageShortCode = require("./11ty/image.js");

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
      return imageShortCode(src, alt, css, widths, formats, sizes);
    }
  );

  eleventyConfig.addPassthroughCopy("./src/assets/images/leading/**/*");
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
