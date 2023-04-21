const outdent = require("outdent");

const shortCodeCTA = (text, href, css = undefined) => {
  return outdent`<a class="${css} href="${href}">${text}</a>`;
};
module.exports = shortCodeCTA;
