'use strict';
var fetchSlack = require('./fetchSlack');
var f2s = require('./f2s');
var dedent = require('dedent');

function listTodo (title) {
  if (!title) { title = ''; }
  fetchSlack('files.list', { types: 'spaces' })
  .then(r => r.json())
  .then((res) => {
    return res.files.filter((f) => f.title.match(title));
  })
  .then(files => {
    if (files.length === 0) {
      if (title) {
        return `No TODOs matched title: "${title}".`;
      }
      return `No TODOs yet.`;
    }
    return dedent`
      TODOs:
      ${files.map(f2s).join('\n')}
    `;
  })
  .then(r => console.log(r))
  .catch((e) => {
    console.error(e);
  });
}

module.exports = listTodo;
