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

  const r = array.map(rule)
  for (let a of r) {
    if (!a) {
      return false
    }
  }

  return true
}

export default all
