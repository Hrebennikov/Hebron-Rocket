// Task 2
const arr2 = ["Valerii", 34, "Vova", 22, true, 35, "Valentyn", false];

const trueValues = arr2.filter(value => typeof value === "boolean");
const numbers = arr2.filter(value => typeof value === "number");
const strings = arr2.filter(value => typeof value === "string" && value.length >= 4);

console.log(trueValues);
console.log(numbers);
console.log(strings);