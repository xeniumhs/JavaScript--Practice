// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global

// Global variables are those declared outside of a block.

// Local variables are those declared inside of a block.
// Global Scope
// Local Scope

let textMessage = "hi"; // Global Scope
let i = 0;

function showMessage() {
  let textMessage = "hey"; // Local Scope
  console.log(textMessage); // Access Local Scope
}

for (let i = 0; i < 5; i++) {
  console.log(i); // Local Scope
}

console.log(i); // Global Scope

showMessage();
console.log(textMessage); // Access Global Scope