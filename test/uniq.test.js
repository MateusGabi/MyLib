const { uniq } = require('../index')

test('Uniq should be defined', () => {
  expect(uniq).toBeTruthy()
})

test('Uniq should be a function', () => {
  expect(uniq instanceof Function).toBe(true)
})

test('should returns only uniques numbers', () => {
  const arr = [0, 1, 2, 2, 3]
  expect(uniq(arr)).toEqual([0, 1, 2, 3])
})

test('should returns only uniques strings', () => {
  const arr = ['a', 'b', 'ab', 'b', 'cd']
  expect(uniq(arr)).toEqual(['a', 'b', 'ab', 'cd'])
})
