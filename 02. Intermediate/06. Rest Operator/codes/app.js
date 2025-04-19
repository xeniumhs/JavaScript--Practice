// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.

// function user(...userData) {
//   console.log(userData);
// }
// user("xen", 19, "football");

// function user(x,...userData) {
//   console.log(x);
//   console.log(userData);
// }
// user("xen", 19, "football", "programmer");

function person(firstName, lastName, ...hobbies) {
  console.log("First Name: ", firstName);
  console.log("Last Name: ", lastName);
  console.log("Hobbies: ", hobbies);
}

person("xen", "hs", "programming", "football", "adventure");
