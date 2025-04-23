// const num = { x: 100, y: 200 }
// const { x:new1, y:new2 } = num;

// console.log(new1);
// console.log(new2);


// Object destructuring and rest operator

let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
// console.log(a);
// console.log(b);
console.log(rest);

// --------------------------
// Assignment without declaration
let name, division;
({ name, division } = { name: "xen", division: "First" });
console.log(name); // xen
console.log(division); // First