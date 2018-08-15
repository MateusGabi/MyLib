/** @format */

const div = require('./div');

test('div 0 / 0 should be equal NaN', () => {
	expect(div(0)(0)).toBe(NaN);
});

test('div -1 / 2 should be equal -0.5', () => {
	expect(div(2)(-1)).toBe(-0.5);
});

test('div 3 / 4 should be equal 0.75', () => {
	expect(div(4)(3)).toBe(0.75);
});

test('div 5 / (- 10) should be equal -0.5', () => {
	expect(div(-10)(5)).toBe(-0.5);
});

test('div (- 7) / (- 8) should be equal 0.875', () => {
	expect(div(-8)(-7)).toBe(0.875);
});
