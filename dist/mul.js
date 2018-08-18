"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mul = function mul(x) {
  return function (y) {
    return y * x;
  };
};

exports.default = mul;