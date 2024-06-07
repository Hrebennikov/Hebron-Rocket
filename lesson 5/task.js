class PC {
    constructor(name, processor, ram) {
        this.name = name
        this.processor = processor
        this.ram = ram
    }

    button() {
        console.log("Ваш комп'ютер увімкнено!");
    }
}

const pc = new PC("Samsung", 200, 8)
console.log(pc);

pc.button()