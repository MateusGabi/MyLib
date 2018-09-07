const { pairs } = require('../index')

test('pairs should be defined', () => {
    expect(pairs).toBeTruthy()
})

test('pairs should be a function', () => {
    expect(pairs instanceof Function).toBe(true)
})

test('empty should returns empty', () => {
    expect(pairs([])).toEqual([])
})

test('one item should return empty array', () => {
    expect(pairs(['a'])).toEqual([])
})

test('two items should return a matrix 1x2', () => {
    expect(pairs([1, 2])).toEqual([[1, 2]])
})

test('array with three letters', () => {
    expect(pairs(['a', 'b', 'c'])).toEqual([
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'c'],
    ])
})

test('array with three numbers', () => {
    expect(pairs([1, 3, 7])).toEqual([
        [1, 3],
        [1, 7],
        [3, 7],
    ])
})

test('array with three objects', () => {

    const objs = [{
        name: 'Alice'
    }, {
        name: 'Bob'
    }, {
        name: 'Charlie'
    }]

    expect(pairs(objs)).toEqual([
        [{
            name: 'Alice'
        }, {
            name: 'Bob'
        }],
        [{
            name: 'Alice'
        }, {
            name: 'Charlie'
        }],[
        {
            name: 'Bob'
        }, {
            name: 'Charlie'
        }],
    ])
})