'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _inArray = require('./inArray')

var _inArray2 = _interopRequireDefault(_inArray)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var compose = function compose (acc, act, index, array) {
  return acc instanceof Array ? (0, _inArray2.default)(act)(acc) : act(acc)
}

var pipe = function pipe () {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key]
  }

  var variable = functions.shift()
  if (functions.length < 1) {
    throw new TypeError('No function to be appllied')
  }
  return functions.reduce(compose, variable)
}
exports.default = pipe
