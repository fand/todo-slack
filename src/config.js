'use strict';
var config = require('rc')('todo');

if (!config.token) {
  console.error('Please create `~/.todorc` first!');
  process.exit(-1);
}

module.exports = {
  token    : config.token,
  user     : config.user,
  channels : config.channels,
};
