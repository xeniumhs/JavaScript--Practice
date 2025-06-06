// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// -------------------------------
// ES6 code

const a = 1,
  b = 2,
  c = 3;
const obj = {
  a,
  b,
  c,
};
console.log(obj);

// obj.a = 1, obj.b = 2, obj.c = 3
// -------------------------------
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6
// -------------------------------

// -------------------------------
// ES6 code
const lib = {
  sum(a, b) {
    return a + b;
  },
  mult(a, b) {
    return a * b;
  },
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

// -------------------------------
// function getPersonES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersonES5("Xen", 23, 185);
// Expected output: { name: 'xen', age: 23, height: 185 }
// -------------------------------
function getPersonES6(name, age, height) {
  return {
    name,
    age,
    height,
  };
}

console.log(getPersonES6("Xen", 23, 185));
