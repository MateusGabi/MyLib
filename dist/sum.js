"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(x) {
  return function (y) {
    return y + x;
  };
};

exports.default = sum;