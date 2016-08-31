'use strict';
var FormData = require('form-data');

module.exports = function (data) {
  var fd = new FormData();
  Object.keys(data).forEach((k) => {
      fd.append(k, data[k]);
  });
  return fd;
};
