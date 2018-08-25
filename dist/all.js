'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var all = function all(rule) {
  return function (array) {
    // check if all elements in array match with the rule
    // console.log('regra', rule);
    // console.log('arr', array);

    if (!(rule instanceof Function)) {
      throw new TypeError('First param should be a Function');
    }

    if (!(array instanceof Array)) {
      throw new TypeError('Second param should be an Array');
    }

    if (array.length < 1) {
      return false;
    }

    var r = array.map(rule);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a = _step.value;

        if (!a) {
          return false;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  };
};

exports.default = all;