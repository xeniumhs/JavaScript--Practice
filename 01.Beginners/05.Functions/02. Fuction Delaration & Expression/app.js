// Function Declaration
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("Xen");

// Function Expressions
const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("John");

// -------------------------
// console.log(x); // ERROR
// let x = 10;

const sayBye = function (user) {
    console.log(user+",Bye!");
}

sayBye("Xen")