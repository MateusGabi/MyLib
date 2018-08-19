'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var has = function has(attr) {
  return function (obj) {
    if (obj) {
      if (obj[attr]) return true;else if (obj[attr] === '') return true;else if (obj[attr] === 0) return true;
    }

    return false;
  };
};
exports.default = has;