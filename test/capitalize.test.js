/** @format */

const { capitalize } = require('../index')

describe('capitalize', () => {
  test('capitalizes words longer than the minimal length and lowercases the rest', () => {
    expect(capitalize('javaScript nodeJS library')).toBe(
      'Javascript Nodejs Library'
    )
  })

  test('does not capitalize words with length equal to the minimal length', () => {
    expect(capitalize('HELLO WORLD')).toBe('hello world')
  })

  test('respects custom minimal length', () => {
    expect(capitalize('foo bar baz', 0)).toBe('Foo Bar Baz')
  })
})
