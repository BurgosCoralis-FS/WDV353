const add = (a , b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const squareRoot = (number) => Math.sqrt(number);

const findMax = (numbers) => Math.max(...numbers)
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    findMax,
}

// module.exports = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b,
// };