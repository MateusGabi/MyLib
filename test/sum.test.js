/** @format */

const { sum } = require('../src')

test('adds 0 + 0 should be equal 0', () => {
  expect(sum(0)(0)).toBe(0)
})

test('adds -1 + 2 should be equal 1', () => {
  expect(sum(-1)(2)).toBe(1)
})

test('adds 3 + 4 should be equal 7', () => {
  expect(sum(3)(4)).toBe(7)
})

test('adds 5 + (- 6) should be equal -1', () => {
  expect(sum(5)(-6)).toBe(-1)
})

test('adds (- 7) + (- 8) should be equal -15', () => {
  expect(sum(-7)(-8)).toBe(-15)
})
