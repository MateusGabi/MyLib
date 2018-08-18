"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var groupBy = function groupBy(attribute) {
  return function (collection) {
    var response = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        var group = item[attribute];
        if (!response[group]) {
          response[group] = [];
        }
        response[group].push(item);
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

    return response;
  };
};

exports.default = groupBy;