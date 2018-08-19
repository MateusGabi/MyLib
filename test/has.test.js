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

test(`has attribute 'name' if 'name' is a empty string`, () => {
  const v = { name: '' }
  expect(has('name')(v)).toBeTruthy()
})

test(`has attribute 'name' if 'name' has only one char`, () => {
  const v = { name: 'd' }
  expect(has('name')(v)).toBeTruthy()
})

test(`has attribute 'age' if 'age' is 0`, () => {
  const v = { age: 0 }
  expect(has('age')(v)).toBeTruthy()
})

test(`has attribute 'age' if 'age' is 10`, () => {
  const v = { age: 10 }
  expect(has('age')(v)).toBeTruthy()
})
