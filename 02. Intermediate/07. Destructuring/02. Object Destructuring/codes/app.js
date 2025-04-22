// In object destructuring order doesn't matter but the name does matter

// --------------------------
const student = { name: "Xen", position: "First", rollNo: 77 }

const { name,position,rollNo } = student;
console.log(name);
console.log(position);
console.log(rollNo);