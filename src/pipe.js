/** @format */

const pipe = (...functions) => {
    let variable = functions[0];
    for (let i = 1; i < functions.length; i++) {
        variable = functions[i](variable);
    }
    return variable;
};

module.exports = pipe;
