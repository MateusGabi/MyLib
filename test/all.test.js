const { all } = require('../index')

test('all method should not be undefined', () => {
  expect(all).toBeTruthy()
})

test('all should be a function', () => {
  expect(all instanceof Function).toBe(true)
})

test('all method has params: Function and Array', () => {
  const fooFunction = () => {}
  const fooArray = []

  expect(() => all(null)(null)).toThrowError(TypeError)
  expect(() => all(fooFunction)(null)).toThrowError(TypeError)
  expect(() => all(null)(fooArray)).toThrowError(TypeError)
  expect(() => all(fooFunction)(fooArray)).not.toThrowError(TypeError)
})

test('check if all items are even', () => {
  const isEven = i => i % 2 !== 0
  const isOdd = i => i % 2 == 0

  expect(all(isEven)([0, 1, 2])).toBe(false)
  expect(all(isEven)([1])).toBe(true)
  expect(all(isOdd)([1])).toBe(false)
  expect(all(isEven)([1, 3, 23])).toBe(true)
  expect(all(isEven)([])).toBe(false)

  expect(all(isOdd)([])).toBe(false)
  expect(all(isOdd)([2])).toBe(true)
  expect(all(isEven)([2])).toBe(false)
  expect(all(isOdd)([2, 4, 8])).toBe(true)
  expect(all(isOdd)([0, 1, 2])).toBe(false)

  expect(all(isEven)([null])).toBe(false)
  expect(all(isOdd)([null, 4, undefined])).toBe(false)
  expect(all(isOdd)([undefined])).toBe(false)
})
