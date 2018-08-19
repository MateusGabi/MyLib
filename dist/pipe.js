'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./../types');

var _inArray = require('./inArray');

var _inArray2 = _interopRequireDefault(_inArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pipe = function pipe() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  var variable = functions[0];
  for (var i = 1; i < functions.length; i++) {
    if (variable instanceof Array) {
      variable = (0, _inArray2.default)(functions[i])(variable);
    } else {
      variable = functions[i](variable);
    }
  }
  return variable;
};

exports.default = pipe;