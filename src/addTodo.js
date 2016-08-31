'use strict';
var fetchSlack = require('./fetchSlack');

function addTodo (title, content) {
  fetchSlack('files.upload', {
    filetype : 'space',
    filename : title,
    content  : content,
  })
  .then(r => r.json())
  .then((r) => {
    if (!r.ok) { throw r.error; }
    console.log(`Added TODO: ${title} (${content})`);
  })
  .catch((e) => {
      console.error(e);
  });
}

module.exports = addTodo;
