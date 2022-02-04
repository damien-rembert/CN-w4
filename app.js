// @ts-check

let aString = 'hello';
let aNum = 5;
let aBool = true;

let anArray = ["some", "items", "in", "the"];
anArray.push("array");

for (let i = 0; i < anArray.length; i++) {
    const element = anArray[i];
    console.log(element);
    
}

// Create a function that when called asks you to
// withdraw an amount. Balance should reduce as
// appropriate.
let balance = 100000;
function withdraw(amount) {
    balance -= amount;
    return balance;
}

let rosie = {
    _name: "Rosie",
    _thirst: 50,
    _isWiggling: false,
    _isHopping: false,
    get name() {
        return this._name;
    },
    get drink() {
        this._thirst -= 10;
        return this._thirst;
    }
}

console.log(rosie.name);
console.log(rosie.drink);

let chargePerH = 1.5;

class Car {
    constructor(plate) {
        this._name = plate;
        this._hours = 0;
    }
    get charge() {
        return (this._hours * chargePerH);
    }

    increaseTime(duration) {
        this._hours += duration;
    }

    addOneH() {
        this.increaseTime(1);
    }

    get hours() {
        return this._hours;
    }
}

// Add a subclass for staff, so that staff can provide their
// staff number, and credits they have left to pay for the
// car park fees.
// Given a staff member parked for 5 hours as before,
// show how much it will be charged and remaining
// balance.

class EmployeeCar extends Car {
    constructor(plate, cardNum, credit) {
        super(plate);
        this._cardNum = cardNum;
        this._credit = credit;
    }
    get credit() {
        return this._credit;
    }
}


// Activity (1)
// Write a simple function which logs “Hello Code
// Nation” to the console.
// Then write a higher order function which will run
// our simple function five times, even though you
// only call it one time.
// Hint: Pass the simple function as a parameter, and
// this will involve a for loop.

function simpleFun() {
    console.log("Hello Code Nation");
}


// the function fn will be executed when it's accessed to be passed as an argument?
// any way to not do that?
function runThisFiveTimes(fn) {
    for (let i = 0; i < 5; i++) {
        console.log("before");
        console.log("i = " + i);
        simpleFun();
        console.log("after");
    }
}

runThisFiveTimes(simpleFun());


// Activity (2)
// The array method .map is an example of a higher
// order function.
// Declare a variable with five numbers, then
// use .map to iterate through the array and multiply
// each array item by 3.



let arrayToMap = [1, 2, 3, 4, 5];
function triple(numberToTriple) {
    return (numberToTriple * 3);
}

console.log(arrayToMap);

console.log(arrayToMap.map(number => triple(number)));



// Activity (3)
// Test this function to make
// sure it works by passing a
// number to the doMaths
// function, then passing a
// number and one of the four
// maths functions, to the
// returned function.

const add = (a,b) => {
return a+b;
}
const subtract = (a,b) => {
return a - b;
}
const multiply = (a,b) => {
return a*b;
}
const divide = (a,b) => {
return a/b;
}
const doMaths = (num1) => {
return (num2, fn) => {
return fn(num1, num2);
}
}

console.log("=== ZELLER'S algo ===");

let d = 24;
let m = 5;
let y = 1985;

// let d = 1;
// let m = 2;
// let y = 2022;

let f;
let l;
let s;
let x;

if (m < 3) {
    m = m + 12;
    y = y - 1;
}

f = Math.floor(y/100);
l = y - 100 * f;

s = Math.floor(2.6 * m - 5.39) + Math.floor(l / 4) + Math.floor(f / 4) + d + l - 2 * f;
x = s - (7 * Math.floor(s / 7));
console.log(x);


let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sat', 'Sunday'];
// creating the variables
let firstDay, secondDay, thirdDay, everyOtherDay;
// using the spread operator
[firstDay, secondDay, thirdDay, ...everyOtherDay] = weekDays;
console.log(firstDay); // Monday
console.log(secondDay); // Tuesday
console.log(everyOtherDay); // [ 'Thursday', 'Friday', 'Sat', 'Sunday' ]

/// importing the whole object (the two variables)
// const importedFunctions = require('./export_examples.js');
// OR, to import only that one var
// const {name_of_the_var} = require('./export_examples.js');

// name_of_the_var(2);
// console.log(importedFunctions);

// name_of_the_var = (number) => {
//     console.log(number * 2);
// };
// name_of_another_var = () => {
//     console.log("second variable");
// };
// name_of_third_var = "just a string";

const osObj = require("os");
const fsObj = require("fs");

let userData = osObj.userInfo().username;
console.log(userData);

// console.log(fsObj);

fsObj.appendFile("example.txt", `the username is ${userData}\n`, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("it's all working");
    }
})

