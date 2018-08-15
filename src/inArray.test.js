/** @format */
const inArray = require('./inArray');
const div = require('./div');
const mul = require('./mul');
const sub = require('./sub');
const sum = require('./sum');

const arr = [1, 2, 3, 4];

test('half values of [1, 2, 3, 4] is [0.5, 1, 1.5, 2]', () => {
    const half = div(2);
    const value = inArray(half)(arr);
    expect(value).toEqual([0.5, 1, 1.5, 2]);
});

test('double values of [1, 2, 3, 4] is [2, 4, 6, 8]', () => {
    const double = mul(2);
    const value = inArray(double)(arr);
    expect(value).toEqual([2, 4, 6, 8]);
});

test('[1, 2, 3, 4] sub 1 is [0, 1, 2, 3]', () => {
    const lessOne = sub(1);
    const value = inArray(lessOne)(arr);
    expect(value).toEqual([0, 1, 2, 3]);
});

test('[1, 2, 3, 4] plus 1 is [2, 3, 4, 5]', () => {
    const plusOne = sum(1);
    const value = inArray(plusOne)(arr);
    expect(value).toEqual([2, 3, 4, 5]);
});
