// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "green", "teal", "blue"];

giveMe4(colors); //only a will get values
giveMe4(1, 2, 3, 4);

giveMe4(...colors); //spread out values

const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];
const concat = [...strNums, ...moreStrNums];
console.log(concat);

let peoples = ["xen", "alex", "john"];
const allPeoples = ["kumar", ...peoples, "jordan"];
console.log("george", ...peoples);
console.log(allPeoples);

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);


let person = {
  name: 'xen',
  age: 19,
  gender:'male'
}

const clone = { ...person, work:'programmer' }
console.log(clone);