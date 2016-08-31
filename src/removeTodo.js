'use strict';
var fetchSlack = require('./fetchSlack');

function removeTodo (title) {
  fetchSlack('files.list')
  .then(r => r.json())
  .then((res) => {
    return res.files.filter((f) => f.title.match(title))[0];
  })
  .then((file) => {
    if (!file) { throw `No files matched "${title}"`; }
    return fetchSlack('files.delete', {
      file:  file.id,
    }).then(r => r.json());
  })
  .then(r => console.log(r))
  .catch((e) => {
      console.error(e);
  });
}

module.exports = removeTodo;
