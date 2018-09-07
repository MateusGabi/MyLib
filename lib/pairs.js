const reducer = (acc, cur, index, arr) => {
  for (let i = index + 1; i < arr.length; ++i) {
    acc.push([cur, arr[i]])
  }
  return acc
}

const pairs = arr => arr.reduce(reducer, [])

export default pairs
