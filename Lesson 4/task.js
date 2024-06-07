// Task 1
let arr = ["Maks", "Valerii", "Vova"]

function array() {
    console.log(arr);
}

array()

// Task 2
function random() {
    let arr1 = []
    for (let i = 0; i <= 20; i++) {
        arr1.push(-20 + Math.random() * ((20 - (-20)) +1))
        console.log(i);
    }
}

array(random())

// Task 3
function numbers(num1, num2, num3) {
    let min = num1;

    if (num2 < min) {
        min = num2;
    }
    if (num3 < min) {
        min = num3
    }

    return min
}

let minimum = numbers(144, 25, 36)

console.log(minimum);

// Task 4
function numbers(num1, num2, num3) {
    let max = num1;

    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3
    }

    return max
}

let maximum = numbers(144, 250, 36)

console.log(maximum);

// Task 5
const arrNumbers = [1, 2, 3, 4, 5, 15, 6, 7, 8, 9, 10];

function findArrayMax() {
    let mostNumber = arrNumbers[0];
    for (let i = 1; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > mostNumber) {
            mostNumber = arrNumbers[i];
        }
    }
    return mostNumber;
}

const mostNumber1 = findArrayMax();
console.log(mostNumber1);

// Task 6
const arrNumbers = [11, 2, 3, 4, 1, 5, 15, 6, 7, 8, 9, 10];

function findArrayMin() {
    let leastNumber = arrNumbers[0];
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] < leastNumber) {
            leastNumber = arrNumbers[i];
        }
    }
    return leastNumber
}

const leastNumber1 = findArrayMin()
console.log(leastNumber1);