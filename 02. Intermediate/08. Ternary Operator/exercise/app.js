// Create function which will take unlimited amount of parameters & log all of that params to the console.

function variadic(...params) {
  console.log(params);
}

console.log("xen",19,"football");

// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

function sum(...x) {
  return x.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10