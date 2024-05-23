// task 5
const arr5 = [1, 2, 3, 4, 5];

let deleteFromEnd = arr5.pop();
let deleteFromEnd2 = arr5.pop();

arr5.push("a");
arr5.push("b");
arr5.push("c");
arr5.push(deleteFromEnd2);
arr5.push(deleteFromEnd);

console.log(arr5);