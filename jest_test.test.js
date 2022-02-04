// const {expect} = require("@jest/globals");
// const {test} = require("jest-circus");
const {add} = require("./jest_test");

test("two numbers add up", () => {
    expect(add(1, 2)).toBe(3);
});




