let colors = ["teal", "blue", "red", "green"];

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

colors.forEach(color => console.log(color));

const words = ["hello", "bird", "football", "chair", "code"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
})
console.log(words);