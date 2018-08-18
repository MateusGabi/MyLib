'use strict';

/** @format */

var inArray = require('./inArray');

var pipe = function pipe() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  var variable = functions[0];
  for (var i = 1; i < functions.length; i++) {
    if (variable instanceof Array) {
      variable = inArray(functions[i])(variable);
    } else {
      variable = functions[i](variable);
    }
  }
  return variable;
};

module.exports = pipe;