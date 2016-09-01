'use strict';
var fetchSlack = require('./fetchSlack');
var dedent = require('dedent');

function addTodo (title, content) {
  if (!content) { content = ' '; }
  fetchSlack('files.upload', {
    filetype : 'space',
    filename : title,
    content  : content,
  })
  .then(r => r.json())
  .then((r) => {
    if (!r.ok) { throw r.error; }
    console.log(dedent`
      Added TODO:
      - ${title} (${content})
    `);
  })
  .catch((e) => {
      console.error(e);
  });
}

module.exports = addTodo;
