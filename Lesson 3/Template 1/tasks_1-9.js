const content = document.getElementById("content");
const rules = document.getElementById("rules");
const list = document.getElementById("list")

// task 1
let getTextContent = content.innerText;

// task 2
let getTextRules = rules.innerText;

// task 3
getTextContent = "Hello World";

// task 4
getTextRules = "I'm Valerii Hrebennikov"

alert(getTextContent)
alert(getTextRules)

// task 5
content.style.backgroundColor = "red"
rules.style.backgroundColor = "red"

// task 6
content.style.color = "blue"
rules.style.color = "blue"
list.style.color = "blue"

// task 7 
let classList = rules.classList;
console.log(classList);

// task 8
const lists = document.getElementsByClassName("fc_rules");
console.log(lists);

// task 9
for (let list1 of lists) {
    alert(list1.textContent);
    list1.style.color = "red";
}
