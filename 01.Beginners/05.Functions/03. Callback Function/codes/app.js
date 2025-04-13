// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})
// -------------------------------
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
// -------------------------------
// function
function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

// callback function
function cb() {
  console.log("I am callback function");
}

// passing function as an argument (callback)
greet("xen", cb);
// -------------------------------
