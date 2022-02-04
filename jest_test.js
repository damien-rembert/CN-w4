const { array } = require("yargs");

const add = (num1, num2) => {
    return (num1 + num2);
};
// console.log(add(5,6));


const subtract = (num1, num2) => {
    return (num1 - num2);
};

const multiply = (num1, num2) => {
    return (num1 * num2);
};

const divide = (num1, num2) => {
    return (num1 / num2);
};

const copyArray = (array) => {
    return [...array];

}



module.exports = {
    add,
    subtract,
    multiply,
    divide,
    copyArray,
};
