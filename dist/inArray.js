"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var inArray = function inArray(f) {
  return function (arr) {
    return arr.map(f);
  };
};
exports.default = inArray;