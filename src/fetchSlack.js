'use strict';
var fetch  = require('isomorphic-fetch');
var form   = require('./form');
var config = require('../secret');

function fetchSlack (endpoint, data) {
  return fetch(`https://slack.com/api/${endpoint}`, {
    method : 'POST',
    body   : form(Object.assign({}, config, data)),
  });
};

module.exports = fetchSlack;
