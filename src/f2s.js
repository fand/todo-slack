'use strict';
module.exports = function fileToString (file) {
  var content = file.preview.replace(/.*p>(.*)<\/p.*/, '$1');
  return `- ${file.title} (${content})`;
};
