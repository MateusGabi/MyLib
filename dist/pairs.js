'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
var reducer = function reducer (acc, cur, index, arr) {
  for (var i = index + 1; i < arr.length; ++i) {
    acc.push([cur, arr[i]])
  }
  return acc
}

var pairs = function pairs (arr) {
  return arr.reduce(reducer, [])
}

exports.default = pairs
