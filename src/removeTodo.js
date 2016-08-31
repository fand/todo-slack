'use strict';
var fetchSlack = require('./fetchSlack');
var f2s = require('./f2s');
var dedent = require('dedent');

function removeTodo (title) {
  fetchSlack('files.list', { types: 'spaces' })
  .then(r => r.json())
  .then(r => r.files)
  .then(files => {
    var matched = files.find(f => f.title === title);
    if (matched) { return [matched]; }
    return files.filter(f => f.title.match(title));
  })
  .then(files => {
    if (files.length === 0) {
      throw `No files matched title: "${title}".`;
    }
    if (files.length > 1) {
      throw dedent`
        Multiple TODOs matched title: "${title}".

        ${files.map(f2s).join('\n')}

        Please specify unique pattern.
      `;
    }
    return files[0];
  })
  .then((file) => {
    return fetchSlack('files.delete', {
      file:  file.id,
    })
    .then(r => r.json())
    .then(r => {
      if (!r.ok) { throw res.error; }
    })
    .then(() => {
      console.log(dedent`
        Removed TODO:
        ${f2s(file)}
      `);
    });
  })
  .catch((e) => {
    console.error(e);
  });
}

module.exports = removeTodo;
