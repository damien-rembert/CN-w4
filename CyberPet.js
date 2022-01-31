// @ts-check

// Cyber pet time!
// User selects the kind of animal they’d like (dog, cat,
// rabbit) and you have to play with it, feed it, give it
// drinks etc.
// There should be consequences across the board
// – if you don’t play, it gets bored, if you do, it’s happy,
// but gets thirsty, that kind of thing.

class CyberPet {
    constructor(name) {
        this._name = name;
        this._ageInDays = 0;
        this._hunger = 80;
        this._thirst = 70;
        this._boredom = 60;
        this._HP = 100;
        this._bodyType = 50;
        this._isDead = false;
    }

    get isDead() {
        return this._isDead;
    }

    get name() {
        return this._name;
    }
    get age() {
        return this._ageInDays;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get boredom() {
        return this._boredom;
    }
    get HP() {
        return this._HP
    }
    get bodyType() {
        return this._bodyType;
    }

    eat(amountOfFood) {
        if (this.hunger - amountOfFood < 0) {
            this._hunger = 0;
            this._bodyType += 10;
        } else {
            this._hunger -= amountOfFood;
        }
    }

    drink(amountOfWater) {
        if (this.thirst - amountOfWater < 0) {
            this._HP -= amountOfWater - this.thirst;
            this._thirst = 0;
        } else {
            this._thirst -= amountOfWater;
        }
    }

    play() {
        this._hunger += 5;
        if (this.boredom < 20) {
            this._boredom = 0;

        } else {
            this._boredom -= 20;
        }
    }

    revive() {
        if (this.isDead) {
            this._HP = 15;
            this._isDead = false;          
        }
    }

    timePassing(duration) {
        for (let i = 0; i < duration; i++) {
            this.incrementDay();
        }
    }

    incrementDay() {
        this._ageInDays++;
        this._hunger += 5;
        this._thirst += 5;
        this._boredom += 5;

        if (this.hunger >= 100) {
            this._hunger = 100;
            this._HP -= 20;
            this._bodyType -= 10
        }

        if (this.thirst >= 100) {
            this._thirst = 100;
            this._HP -= 20;
        }


        if (this.boredom == 100) {
            this._HP -= 10;
            this._boredom += 5;
        }

        if (this.hunger >= 85) {
            this._bodyType -= 5;
        }

        if (this.bodyType >= 0) {
            this._bodyType = 0;
        }

        if (this.bodyType <= 100) {
            this._bodyType = 100;
        }

        if (this.HP <= 0) {
            this._HP = 0;
            this._isDead = true;
        }
        // this._HP = 100;
        // this._bodyType = 50;
        // remove this so it's not annoying when running timePassing?
        this.printStatus();        
    }

    printStatus() {
        let status;
        if (this.isDead) {
            status =`Day ${this.age}. ${this.name} is dead. Maybe you should revive it.`;
        } else {
            status = `Day ${this.age}. ${this.name}`;
            if (this.HP > 80) {
                status += " is doing well!";
            } else if (this.HP < 20) {
                status += " is not doing well!";
            } else {
                status += " is alright.";
            }

            if (this.hunger > 90) {
                status += " It's pretty hungry!";
            } else if (this.hunger < 20) {
                status += " It does not need food at the moment!";
            }

            if (this.thirst > 90) {
                status += " It's pretty thirsty!";
            } else if (this.thirst < 20) {
                status += " It does not need water at the moment!";
            }

            if (this.boredom > 90) {
                status += " It's pretty bored!";
            } else if (this.boredom < 20) {
                status += " It's having a great time!";
            }

            if (this.bodyType > 90) {
                status += " It should probably exercise more.";
            } else if (this.bodyType < 20) {
                status += " It should probably eat more.";
            }
        // this._bodyType = 50;
        }
        console.log(status);
    }
}

let jon = new CyberPet("Jon");
jon.incrementDay();
jon.timePassing(10);
console.log(jon.HP);