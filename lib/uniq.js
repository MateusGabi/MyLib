const uniq = arr => arr.reduce((acc, current) => {
  if (acc.indexOf(current) < 0) {
    acc.push(current)
  }
  return acc
}, [])

export default uniq
