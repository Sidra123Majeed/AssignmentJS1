// ch21-25
// Q:1

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");


let fullName = firstName + " " + lastName;

console.log("Hello, " + fullName + "! Welcome.");
//Q:2
let favoriteModel = prompt("Enter your favorite mobile phone model:");


let inputLength = favoriteModel.length;


document.write("Length of your favorite mobile phone model is: " + inputLength);
// Q:3
let word = "Pakistani";


let indexOf = word.indexOf('n');


document.write("The index of 'n' in the word 'Pakistani' is: " + indexOf);
//Q:4
let words = "Hyderabad";


let newWord = words.replace("Hyder", "Islami");


document.write("After replacing 'Hyder' with 'Islami': " + newWord);