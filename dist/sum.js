'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./../types');

var sum = function sum(x) {
  return function (y) {
    return y + x;
  };
};
exports.default = sum;