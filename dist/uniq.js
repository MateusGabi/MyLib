"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var uniq = function uniq(arr) {
  return arr.reduce(function (acc, current) {
    if (acc.indexOf(current) < 0) {
      acc.push(current);
    }
    return acc;
  }, []);
};

exports.default = uniq;