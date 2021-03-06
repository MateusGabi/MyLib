const { groupBy } = require('..')

const users = [
  {
    age: 12,
    name: 'Alice',
    gender: 'female'
  },
  {
    age: 11,
    name: 'Bob',
    gender: 'male'
  },
  {
    age: 12,
    name: 'Charles',
    gender: 'male'
  },
  {
    age: 13,
    name: 'Diana',
    gender: 'female'
  },
  {
    age: 13,
    name: 'Eddard'
  }
]

const expectedString = {
  female: [
    { age: 12, name: 'Alice', gender: 'female' },
    { age: 13, name: 'Diana', gender: 'female' }
  ],
  male: [
    { age: 11, name: 'Bob', gender: 'male' },
    { age: 12, name: 'Charles', gender: 'male' }
  ],
  undefined: [{ age: 13, name: 'Eddard' }]
}

const expectInteger = {
  '11': [{ age: 11, name: 'Bob', gender: 'male' }],
  '12': [
    { age: 12, name: 'Alice', gender: 'female' },
    { age: 12, name: 'Charles', gender: 'male' }
  ],
  '13': [
    { age: 13, name: 'Diana', gender: 'female' },
    { age: 13, name: 'Eddard' }
  ],
  undefined: undefined
}

test('group by string attribute', () => {
  const result = groupBy('gender')(users)
  expect(result.female).toEqual(expectedString.female)
  expect(result.male).toEqual(expectedString.male)
  expect(result.undefined).toEqual(expectedString.undefined)
})

test('group by integer attribute', () => {
  const result = groupBy('age')(users)
  expect(result.female).toEqual(expectInteger.female)
  expect(result.male).toEqual(expectInteger.male)
  expect(result.undefined).toEqual(expectInteger.undefined)
})
