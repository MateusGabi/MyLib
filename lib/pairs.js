/**
 * Reducer is an iterable function that aims to create our pairs.
 * 
 * @author Mateus Gabi Moreira
 * @param {Object} acc interative object.
 * @param {*} cur current object in the interation.
 * @param {Integer} index current index of object in the interation.
 * @param {Array} arr original Array to interact.
 */
const reducer = (acc, cur, index, arr) => {
  for (let i = index + 1; i < arr.length; ++i) {
    acc.push([cur, arr[i]])
  }
  return acc
}

/**
 * Receive an array and returns pairs of this array.
 * 
 * @example
 * <code>
 * const { pairs } = require('mylibjs');
 * 
 * const arr = ['a', 'b', 'c'];
 * const _pairs = pairs(arr);
 * 
 * console.log(_pairs);
 * // [['a', 'b'], ['a', 'c'], ['b', 'c']]
 * </code>
 * 
 * @author Mateus Gabi Moreira
 * @param {Array} arr array to exec pairs function.
 */
const pairs = arr => arr.reduce(reducer, [])

export default pairs
