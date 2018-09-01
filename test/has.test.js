const { has } = require('./../index')

test(`no has attribute 'name' in a null variable`, () => {
  const v = null
  expect(has('name')(v)).toBeFalsy()
})

test(`no has attribute 'name' in a empty object`, () => {
  const v = {}
  expect(has('name')(v)).toBeFalsy()
})

test(`no has attribute 'name' if 'name' is undefined`, () => {
  const v = { name: undefined }
  expect(has('name')(v)).toBeFalsy()
})

test(`no has attribute 'name' if 'name' is null`, () => {
  const v = { name: null }
  expect(has('name')(v)).toBeFalsy()
})

test(`has no attribute 'name' if 'name' is a empty string`, () => {
  const v = { name: '' }
  expect(has('name')(v)).toBe(false)
})

test(`has attribute 'name' if 'name' has only one char`, () => {
  const v = { name: 'd' }
  expect(has('name')(v)).toBe(true)
})

test(`has attribute 'age' if 'age' is 0`, () => {
  const v = { age: 0 }
  expect(has('age')(v)).toBe(true)
})

test(`has attribute 'age' if 'age' is 10`, () => {
  const v = { age: 10 }
  expect(has('age')(v)).toBe(true)
})

test(`has no attributes 'age' and 'name'`, () => {
  const v = {}
  expect(has(['age', 'name'])(v)).toBe(false)
})

test(`has just 'age' but not 'name'`, () => {
  const v = { age: 10 }
  expect(has(['age', 'name'])(v)).toBe(false)
})

test(`has both attributes: 'age' and 'name'`, () => {
  const v = { age: 10, name: 'marcus' }
  expect(has(['age', 'name'])(v)).toBe(true)
})

test(`has no one attributes`, () => {
  const v = { age: 10, name: 'marcus' }
  expect(has([])(v)).toBe(false)
})

test(`has no one attributes`, () => {
  const v = {}
  expect(has([])(v)).toBe(false)
})
