'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./../types');

var log = function log(x) {
  return function (y) {
    console.log(x + ':', y);
    return y;
  };
};
exports.default = log;