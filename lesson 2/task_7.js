// Task 6
const arr6 = [1, 2, 3, 4, 5];

let deletedFromStart = arr6.shift();
let deletedFromEnd = arr6.pop();

arr6.unshift("b");
arr6.unshift("a");
arr6.unshift(deletedFromStart);

arr6.push("c");
arr6.push(deletedFromEnd);
arr6.push("e");

console.log(arr6);