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


