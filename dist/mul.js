"use strict";

/** @format */
var mul = function mul(x) {
  return function (y) {
    return y * x;
  };
};

module.exports = mul;