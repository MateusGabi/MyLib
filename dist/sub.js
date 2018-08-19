'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./../types');

var sub = function sub(x) {
  return function (y) {
    return y - x;
  };
};
exports.default = sub;