"use strict";

/** @format */

var log = function log(x) {
  return function (y) {
    console.log(x + ": " + y);
    return y;
  };
};

module.exports = log;