'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var capitalizeWord = function capitalizeWord(minimalStringLength) {
  return function (string) {
    var _string = string.toLowerCase();
    if (_string.length > minimalStringLength) {
      return _string.charAt(0).toUpperCase() + _string.substring(1);
    }
    return _string;
  };
};

var capitalize = function capitalize(string) {
  var minimalStringLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return string.split(' ').map(capitalizeWord(minimalStringLength)).join(' ');
};

exports.default = capitalize;