// const {expect} = require("@jest/globals");
// const {test} = require("jest-circus");
const { expect } = require("@jest/globals");
const { notDeepEqual } = require("assert");
const {add, subtract, multiply, divide, copyArray} = require("./jest_test");

let array = [1, 2, 3];

test("two numbers add up", () => {
    expect(add(1, 2)).toBe(3);
});

test("two numbers - one minus the other", () => {
    expect(subtract(3, 2)).toBe(1);
});

test("two numbers multiplying each other", () => {
    expect(multiply(5, 2)).toBe(10);
});

test("two numbers dividing each other", () => {
    expect(divide(21, 7)).toBe(3);
});

test("return is a copy", () => {
    expect(copyArray(array)).not.toBe(array);
    expect(copyArray(array)).toEqual(array); 

})


