'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./../types');

var div = function div(x) {
  return function (y) {
    return y / x;
  };
};
exports.default = div;