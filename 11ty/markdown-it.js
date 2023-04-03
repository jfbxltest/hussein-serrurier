const markdownIt = require("markdown-it");

const markdownItOptions = {
  html: true,
  breaks: false,
  linkify: true,
};

module.exports = markdownIt(markdownItOptions)
  .disable("code")
  .use(require("markdown-it-container"), "jfl", {
    validate: function (params) {
      return true;
    },

    render: function (tokens, idx) {
      var m = tokens[idx].info.trim();

      if (tokens[idx].nesting === 1) {
        return '<div class="' + m + '">\n';
      } else {
        return "</div>\n";
      }
    },
  });
