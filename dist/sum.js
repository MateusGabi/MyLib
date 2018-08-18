"use strict";

/** @format */

var sum = function sum(x) {
  return function (y) {
    return y + x;
  };
};

module.exports = sum;