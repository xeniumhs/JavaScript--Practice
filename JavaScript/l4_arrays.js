// ARRAYS in JS
// -> collections of items

// // Create arrays
// let marks = [91, 43, 55, 78, 89];
// console.log(marks);
// console.log(marks.length);  //property

// let heroes = ["ironman", "spiderman", "thor", "superman"]
// console.log(heroes);
// console.log(heroes.length);
// console.log(typeof heroes);     //object type


// // Array Indices
// console.log(marks[0], marks[1], marks[2], marks[3]);

// Arrays-> mmutable
// String->immutable


// Looping over an array
// Loops ->iterables(string, objects, arrays)
// let heroes = ["ironman", "spiderman", "thor", "superman"];

// // // for loop
// // for (let i=0; i < heroes.length; i++){
// //     console.log(heroes[i]);
// // }
// // console.log();
// // for (let idx = 0; idx < heroes.length; idx++) {
// //   console.log(heroes[idx]);
// // }

// // for of
// for (let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["Kathmandu", "Bhaktapur", "Lalitpur", "Nuwakot", "Kavre", "Dolakha"];
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }


// Qs. For a given array with marks of students-> [85,97,44,37,76,60]. Find the average marks of the entire class.

// let studentMarks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let marks of studentMarks) {
//     sum += marks;
// }
// let avg = sum / studentMarks.length;
// console.log("Average marks of ", studentMarks, " is ", avg);
// console.log(`The Average Marks is ${avg}`);


// Qs. For a given array with prices of 5 items ->[250,645,300,900,50]. All items have an offer of 10 % OFF on them. Change the array to store final price after applying offer.

// let initialPrices = [250, 645, 300, 900, 50];

// let idx = 0;
// for (let val of initialPrices) {
//     // console.log(`value at index${idx}=${val}`);
//     let offer = val / 10;
//     initialPrices[idx] -= offer;
//     console.log(`value after offer = ${initialPrices[idx]}`)
//     idx++;
// }



// for (let i = 0; i < initialPrices.length; i++){
//     let offer = initialPrices[i] / 10;
//     initialPrices[i] -= offer;
// }
// console.log(initialPrices);



// ARRAY Methods

// Push(): add to end
// Pop(): delete from end & return
// toString(): converts array to string

// let foodItems = ["potato", "apple", "litchi", "mango"];
// foodItems.push("chips");
// console.log(foodItems);
// console.log("Deleted Items: ",foodItems.pop());

// console.log(foodItems);

// console.log(foodItems.toString());
// console.log(foodItems);

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"]
// let others=["krish"]
// let heroes = marvelHeroes.concat(dcHeroes,others);
// console.log(heroes);
// console.log(dcHeroes);


// marvelHeroes.unshift("hello");
// console.log(marvelHeroes);
// console.log("Deleted",marvelHeroes.shift());
// console.log(marvelHeroes);


// slice(start,end) ->returns a piece of array

// let marvelHeroes = ["thor", "spiderman", "ironman", "Dr. Strange", "Antman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));
// console.log(marvelHeroes.slice());  //returns whole array

// splice(start,delCount,newElement1,....)-> change original array(add, remove, replace)

// let marvelHeroes = ["thor", "spiderman", "ironman", "Dr. Strange", "Antman"];
// marvelHeroes.splice(2, 2, "new1", "new2");
// console.log(marvelHeroes)


// let arr = [1, 2, 3, 4, 5,6];

//Add element
// arr.splice(2, 0, 101);
// console.log(arr);

// Del Element
// arr.splice(3, 1);
// console.log(arr);

// Replace Element
// arr.splice(3, 1, 101)
// console.log(arr);

// console.log(arr.splice(3));


// Qs. Create an array to store companies ->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a.
companies.shift();
console.log(companies);
// b.
companies.splice(1, 1, "Ola");
console.log(companies);
// c.
companies.push("Amazon")
console.log(companies);