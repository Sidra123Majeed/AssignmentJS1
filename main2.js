
//ch 12-13
 //q:1
//  function check(input) {
//     // Check if input is a number
//     if (!isNaN(input)) {
//         console.log("The input is a number.");
//     }
//     // Check if input is an uppercase letter
//     else if (input >= 'A' && input <= 'Z') {
//         console.log("The input is an uppercase letter.");
//     }
//     // Check if input is a lowercase letter
//     else if (input >= 'a' && input <= 'z') {
//         console.log("The input is a lowercase letter.");
//     }
//     // Input is not a number or letter
//     else {
//         console.log("The input is not a number or letter.");
//     }
// }

// // Test the function with different inputs
// check('A'); 
// check('a'); 
// check('5'); 
// check('@');
// //
// q:2

// function Integers(num1, num2) {
//     if (num1 > num2) {
//         console.log("The larger number is: " + num1);
//     } else if (num2 > num1) {
//         console.log("The larger number is: " + num2);
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }


// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));


// Integers(num1, num2);

// //Q:3
// function cNum(number) {
//     if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }


// let number = parseFloat(prompt("Enter a number:"));


// cNum(number);
// //Q:4 
// function isVowel(char) {
   
//     char = char.toLowerCase();
    
   
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }


// let char = prompt("Enter a single character:");

// if (char.length === 1) {
    
//     if (isVowel(char)) {
//         console.log("The character is a vowel.");
//     } else {
//         console.log("The character is not a vowel.");
//     }
// } else {
//     console.log("Please enter a single character.");}
//     //Q:5
   
// const correctPassword = "12345";


// let userPassword = prompt("Please enter your password:");


// if (userPassword === null || userPassword === "") {
//     console.log("Please enter your password.");
// } else {
   
//     if (userPassword === correctPassword) {
//         console.log("Correct password.");
//     } else {
//         console.log("Incorrect password. The original password was: " + correctPassword);
//     }
// }
// //Q:6
// let greeting;
// let hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";}
// console.log("greating")
// //Q:7
// let time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));
// if (time >= 0 && time < 1200) {
//     console.log("good morning");
// } else if (time >= 1200 && time < 1700) {
//     console.log("good afternoon");
// } else if (time >= 1700 && time < 2100) {
//     let hours = Math.floor((time - 1200) / 100);
//     let minutes = time % 100;
//     console.log("good evening");
// } else {
//     console.log("Invalid time.");
// }