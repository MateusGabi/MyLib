'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
var hasKeyObject = function hasKeyObject (attr) {
  return function (obj) {
    if (obj) {
      if (obj[attr]) return true
      else if (obj[attr] === 0) return true
    }

    return false
  }
}

var has = function has (attr) {
  return function (obj) {
    if (attr instanceof Array) {
      return attr.reduce(function (acc, act) {
        return acc && hasKeyObject(act)(obj)
      }, attr.length > 0)
    }

    return hasKeyObject(attr)(obj)
  }
}
exports.default = has
