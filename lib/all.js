const all = rule => array => {
  if (!(rule instanceof Function)) {
    throw new TypeError('First param should be a Function')
  }

  if (!(array instanceof Array)) {
    throw new TypeError('Second param should be an Array')
  }

  if (array.length < 1) {
    return false
  }

  return array.map(rule).reduce((acc, act) => acc && act, true)
}

export default all
