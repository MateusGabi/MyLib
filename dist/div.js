"use strict";

/** @format */

var div = function div(x) {
  return function (y) {
    return y / x;
  };
};

module.exports = div;