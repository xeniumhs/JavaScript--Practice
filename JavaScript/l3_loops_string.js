// for loop
// for (let i=1; i <= 5; i++){
//     console.log("Xen");
// }
// console.log("Loop end");


// Calculate sum of 1 to 5

// let sum = 0;
// for (let i = 1; i <= 5; i++)
// {
//     sum += i;
// }
// console.log("Sum =", sum);


// While loop

// let i = 1;
// while (i<=5) {
//     console.log("Xenium");
//     i++;
// }

// do while loop
// runs atleast 1 times

// let i = 20;
// do {
//     console.log("Xenium");
//     i++;
// } while (i <= 5);

// for-of loop

// let str = "HelloHi";
// let size = 0;

// for (let i of str) {    //iterator->character
//     console.log(i);
//     size++;
// }

// console.log("string size ",size)


// for-in loop

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 3.5,
//     isPass: true
// };

// for (let key in student) {
//     console.log("key=",key,"values=",student[key])
// }


// PrQn.1.Print all even numbers from 0 to 100

// for (let i = 1; i <= 100; i++){
//     if (i % 2 ===   0) {
//         console.log(i);
//     }
// }

// PrQn.2.Create a game where you start with any random game number.Ask the user to keep guessing the game number until the user enters correct value.

// const prompt = require('prompt-sync')();
// let gameNum = 2;

// let userNum = prompt("Guess the game number: ");

// while (userNum!=gameNum) {
//     //game
//     userNum=prompt("You Entered Wrong Number, Guess the game number Again: ");

// }

// console.log("Congratulations, You entered the right number");



//###### Strings ########


// let str = "Xenium";
// let str2 = 'Suwal';

// console.log("length of str=", str.length);

// console.log(str[0], str[2])

// for (let i = 0; i <= str.length; i++){
//     console.log(str[i]);
// }



// Template Literals

// let specialString = `This is a Template Literals`;
// console.log(specialString, "\n",typeof specialString);

// let obj = {
//     item: "pen",
//     price: 10
// };
// console.log("the cost of ", obj.item, " is ", obj.price);

// let output = `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);

// String Interpolation
// ->to create strings by substitution of placeholders
// `string text ${expression} string text`

// let specialStr = `This is Template literals ${1 + 2}`;
// console.log(specialStr);

// console.log("Xenium \nSuwal")

// let str = "Xenium\tSuwal";
// console.log(str.length);



// String Methods in JS
// -> to manipulate a string
// let str1 = "      Xenium Suwal";

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// // str1=str1.trim()
// console.log(str1.trim());   //removes whitespace from start or end

// str1 = "Xenium Suwal"
// let str2="Xen"
// console.log(str1.slice(1, 4));  //slicing

// console.log(str1.concat(str2)); //concatenation
// console.log("My Name is "+str1 +  str2);

// console.log(str1.replace("um", "al"));
// let str = "helololo"
// console.log(str.replace("lo", "p"));        //replacing
// console.log(str.replaceAll("lo", "P"));

// str = "IloveJS";
// console.log(str.charAt(0));
// console.log(str[0]);

// original string is immutable / unchangeable

// PrQn.3. Prompt the user to enter their full name.Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
// eg. username="xeniumsuwal", username should be"@xeniumsuwal11"

const prompt = require("prompt-sync")();

let userName = prompt("Enter the username ");

console.log(`@${userName}${userName.length}`);
console.log("@" + userName + userName.length);


let fullName = prompt("Enter the fullname: ");

userName = "@" + fullName + fullName.length;
console.log(userName);