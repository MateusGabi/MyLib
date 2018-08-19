'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./../types');

var mul = function mul(x) {
  return function (y) {
    return y * x;
  };
};
exports.default = mul;