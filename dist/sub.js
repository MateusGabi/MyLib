"use strict";

/** @format */
var sub = function sub(x) {
  return function (y) {
    return y - x;
  };
};

module.exports = sub;