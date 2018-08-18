/** @format */

const { sub } = require('../dist');

test('sub 0 - 0 should be equal 0', () => {
    expect(sub(0)(0)).toBe(0);
});

test('sub -1 - 2 should be equal -3', () => {
    expect(sub(2)(-1)).toBe(-3);
});

test('sub 3 - 4 should be equal -1', () => {
    expect(sub(4)(3)).toBe(-1);
});

test('sub 5 - (- 10) should be equal 15', () => {
    expect(sub(-10)(5)).toBe(15);
});

test('sub (- 7) - (- 8) should be equal 1', () => {
    expect(sub(-8)(-7)).toBe(1);
});
