// Task 1 sort a - b
const arr1 = [4, 8, 3, 9, 20, 10, 33, 498, 8392922, 1, 5, 6, 77, 55, 876, 8493, 46, 48, 90, 0];

let array1 = arr1.sort((a, b) => {
    return a - b
});

const arraySort1 = array1;
console.log(arraySort1);

// Task 2 sort b - a
const arr2 = [4, 8, 3, 9, 20, 10, 33, 498, 8392922, 1, 5, 6, 77, 55, 876, 8493, 46, 48, 90, 0];

let array2 = arr2.sort((a, b) => {
    return b - a 
});

const arraySort2 = array2;
console.log(arraySort2);

// Task 3 filter % 3
const arr3 = [4, 8, 3, 9, 20, 10, 33, 498, 8392922, 1, 5, 6, 77, 55, 876, 8493, 46, 48, 90, 0];

let array3 = arr3.filter((number) => {
    if (number % 3 === 0) {
        return number
    }
});

const arrayFilter1 = array3;
console.log(arrayFilter1);

// Task 4 filter > 10
const arr4 = [4, 8, 3, 9, 20, 10, 33, 498, 8392922, 1, 5, 6, 77, 55, 876, 8493, 46, 48, 90, 0];

let array4 = arr4.filter((number) => {
    if (number > 10) {
        return number
    }
});

const arrayFilter2 = array4;
console.log(arrayFilter2);

// Task 5 forEach
const arr5 = [4, 8, 3, 9, 20, 10, 33, 498, 8392922, 1, 5, 6, 77, 55, 876, 8493, 46, 48, 90, 0];

let array5 = arr5.forEach((element) => {
    document.write(element + " ")
});

// Task 6 map
const arr6 = [4, 8, 3, 9, 20, 10, 33, 498, 8392922, 1, 5, 6, 77, 55, 876, 8493, 46, 48, 90, 0];

let array6 = arr6.map((number) => {
    return number * 3
});

const arrayMap = array6;
console.log(arrayMap);

// Task 7 reduce
const arr7 = [4, 8, 3, 9, 20, 10, 33, 498, 8392922, 1, 5, 6, 77, 55, 876, 8493, 46, 48, 90, 0];

let array7 = arr7.reduce((acc, value) => {
    return acc + value
});

const arrayReduce = array7;
console.log(arrayReduce);