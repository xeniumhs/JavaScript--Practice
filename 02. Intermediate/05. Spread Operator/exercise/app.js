// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

// -----------------------------

let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr);

const user = {
  name: "xen",
  age: "19",
};

const clonedUser = { ...user };
console.log(clonedUser);
