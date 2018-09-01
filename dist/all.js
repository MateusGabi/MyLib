'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var all = function all(rule) {
  return function (array) {
    if (!(rule instanceof Function)) {
      throw new TypeError('First param should be a Function');
    }

    if (!(array instanceof Array)) {
      throw new TypeError('Second param should be an Array');
    }

    if (array.length < 1) {
      return false;
    }

    return array.map(rule).reduce(function (acc, act) {
      return acc && act;
    }, true);
  };
};

exports.default = all;