// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [4, 7, 9, 18, 19, 34, 67];

function checkAge(age) {
  return age >= 18;
}

const res = ages.filter(checkAge);
console.log(res);

// ---------------------
// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const results = words.filter((word) => word.length > 6);
console.log(results);