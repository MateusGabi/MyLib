"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var div = function div(x) {
  return function (y) {
    return y / x;
  };
};

exports.default = div;