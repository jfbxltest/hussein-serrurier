const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {

  config.addPlugin(eleventyNavigationPlugin);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};