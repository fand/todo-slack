'use strict';
var fetchSlack = require('./fetchSlack');

function addTodo (title, content) {
  fetchSlack('files.upload', {
    filetype : 'space',
    filename : title,
    content  : content,
  })
  .then(r => r.json())
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
      console.error(e);
  });
}

module.exports = addTodo;
