// Task 8
const arr8 = ["Valerii", "Vova", "Julia", "Valentyn", "Alina", "Anton", "Hello", "Alexsandr", "City", "Father", "Sister", "Max", "Victor", "Anna", "Evelina", "Denys", "Bohdan", "Vika", "Alex", "Veronika"];

let array8 = arr8.sort((a, b) => {
    if (a < b) {
        return -1
    }

    return 1
});

const arraySort8 = array8;
console.log(arraySort8);

// Task 9 
const arr9 = ["Valerii", "Vova", "Julia", "Valentyn", "Alina", "Anton", "Hello", "Alexsandr", "City", "Father", "Sister", "Max", "Victor", "Anna", "Evelina", "Denys", "Bohdan", "Vika", "Alex", "Veronika"];

let array9 = arr9.sort((a, b) => {
    if (a > b) {
        return -1
    }

    return 1
});

const arraySort9 = array9;
console.log(arraySort9);

// Task 10 
const arr10 = ["Valerii", "Vova", "Julia", "Valentyn", "Alina", "Anton", "Hello", "Alexsandr", "City", "Father", "Sister", "Max", "Victor", "Anna", "Evelina", "Denys", "Bohdan", "Vika", "Alex", "Veronika"];

let array10 = arr10.filter((value) => {
    return value.length > 4
});

console.log(array10);

// Task 11
const arr11 = ["Valerii", "Vova", "Julia", "Valentyn", "Alina", "Anton", "Hello", "Alexsandr", "City", "Father", "Sister", "Max", "Victor", "Anna", "Evelina", "Denys", "Bohdan", "Vika", "Alex", "Veronika"];

const array11 = arr11.map((value) => {
    return "Sam says: " + value
});

const map = array11;
console.log(map);