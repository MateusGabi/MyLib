const { groupBy } = require('..');

const users = [
  {
    age: 12,
    name: 'Alice',
    gender: 'female',
  },
  {
    age: 11,
    name: 'Bob',
    gender: 'male',
  },
  {
    age: 12,
    name: 'Charles',
    gender: 'male',
  },
  {
    age: 13,
    name: 'Diana',
    gender: 'female',
  },
  {
    age: 13,
    name: 'Eddard',
  },
];

const expected_string = {
  female: [
    { age: 12, name: 'Alice', gender: 'female' },
    { age: 13, name: 'Diana', gender: 'female' },
  ],
  male: [
    { age: 11, name: 'Bob', gender: 'male' },
    { age: 12, name: 'Charles', gender: 'male' },
  ],
  undefined: [{ age: 13, name: 'Eddard' }],
};

const expect_integer = {
  '11': [{ age: 11, name: 'Bob', gender: 'male' }],
  '12': [
    { age: 12, name: 'Alice', gender: 'female' },
    { age: 12, name: 'Charles', gender: 'male' },
  ],
  '13': [
    { age: 13, name: 'Diana', gender: 'female' },
    { age: 13, name: 'Eddard' },
  ],
  undefined: undefined,
};

test('group by string attribute', () => {
  const result = groupBy('gender')(users);
  expect(result.female).toEqual(expected_string.female);
  expect(result.male).toEqual(expected_string.male);
  expect(result.undefined).toEqual(expected_string.undefined);
});

test('group by integer attribute', () => {
  const result = groupBy('age')(users);
  expect(result.female).toEqual(expect_integer.female);
  expect(result.male).toEqual(expect_integer.male);
  expect(result.undefined).toEqual(expect_integer.undefined);
});
