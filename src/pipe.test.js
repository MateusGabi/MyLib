/** @format */
const pipe = require('./pipe');
const inArray = require('./inArray');
const div = require('./div');
const mul = require('./mul');
const sub = require('./sub');
const sum = require('./sum');

test('start at 10 end pipe with 16', () => {
    const start = 10;

    const pipeResult = pipe(
        start,
        div(2),
        mul(3),
        sub(4),
        sum(5)
    );

    expect(pipeResult).toBe(16);
});

test('start [1, 2, 3, 4, 5] end [2.5, 4, 5.5, 7, 8.5]', () => {
    const start = [1, 2, 3, 4, 5];

    const pipeResult = pipe(
        start,
        inArray(div(2)),
        inArray(mul(3)),
        inArray(sub(4)),
        inArray(sum(5))
    );

    expect(pipeResult).toEqual([2.5, 4, 5.5, 7, 8.5]);
});
