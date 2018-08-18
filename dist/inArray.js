"use strict";

/** @format */
var inArray = function inArray(f) {
  return function (arr) {
    return arr.map(f);
  };
};

module.exports = inArray;