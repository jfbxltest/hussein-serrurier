const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {

  const markdownIt = require('markdown-it')
  const markdownItAttrs = require('markdown-it-attrs')

  const markdownItOptions = {
    html: true,
    breaks: false,
    linkify: true
  }

  const markdownLib = markdownIt(markdownItOptions).disable("code")
  config.setLibrary('md', markdownLib)



  config.addPlugin(eleventyNavigationPlugin);
  config.addCollection('services', collection => {
    return collection
      .getFilteredByGlob('./src/services/*.md')
  });

  config.addPassthroughCopy('./src/assets/fonts/');
  config.addPassthroughCopy('./src/assets/css/reveal.css');
  config.addPassthroughCopy('./src/assets/js/');


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