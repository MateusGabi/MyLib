/** @format */

const { mul } = require('../dist');

test('mul 0 * 0 should be equal 0', () => {
    expect(mul(0)(0)).toBe(0);
});

test('mul -1 * 2 should be equal -2', () => {
    expect(mul(2)(-1)).toBe(-2);
});

test('mul 3 * 4 should be equal 12', () => {
    expect(mul(4)(3)).toBe(12);
});

test('mul 5 * (- 10) should be equal -40', () => {
    expect(mul(-10)(5)).toBe(-50);
});

test('mul (- 7) * (- 8) should be equal 56', () => {
    expect(mul(-8)(-7)).toBe(56);
});
