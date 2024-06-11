class PC {
    constructor(name, processor, ram) {
        this.name = name
        this.processor = processor
        this.ram = ram
        this.isOn = false
    }

    turnOn() {
        if (!this.isOn) {
            console.log(`Computer ${this.name} included!`);
            this.isOn = true;
        } else {
            console.log(`Computer ${this.name} already included!`);
        }
    }
}

class Laptop extends PC {
    constructor(name, processor, ram, monitor, batteryHour) {
        super(name, processor, ram);
        this.monitor = monitor;
        this.batteryHour = batteryHour;
        this.batteryLife = this.processor / (this.monitor * this.ram);
    }
}

class Ultrabook extends Laptop {
    constructor(name, processor, ram, monitor, batteryHour, balance) {
        super(name, processor, ram, monitor, batteryHour)
        this.balance = balance;
    }

    turnOnError() {
        if (this.batteryHour > 4 || this.balance > 2) {
            alert("Error!!! Your computer exceeds battery hours and weight!")
            console.log(`Error!!! Your computer exceeds battery hours and weight!`);
        } else {
            alert("Your computer is ready to work!")
            console.log(`Your computer is ready to work!`);
        }
    }
}

// Starting the PC
const pc = new PC("Samsung", 200, 8)
console.log(pc);

pc.turnOn()

// Starting the Laptop
const laptop = new Laptop("HP", 300, 16, 15,4, "5 Hour")
console.log(laptop.batteryLife);

laptop.turnOn()

// Starting the Ultrabook
let ultrabook = new Ultrabook("Asus", 150, 12, 13, 4, 2)
console.log(ultrabook);

ultrabook.turnOnError()