//ARRAYS AND LOOP
//ch 17-20
//Q:1

// let multiArray = [];


// multiArray.push([]);
// multiArray.push([]);
// multiArray[0].push(1, 2, 3);
// multiArray[1].push(4, 5, 6);


// console.log("Multidimensional Array:", multiArray)
// // Q:2
// let matrix = [
//     [1 , 2, 3,],
//     [1 , 2, 3,],
//     [1 , 2, 3,]
// ]
// console.log("the matrix is :", matrix)
// //Q:3

// for (let i = 1; i<=10; i++){
//     console.log(i)
// }
// //Q:4
// let tableNumber = parseInt(prompt("Enter the table number:"));


// let tableLength = parseInt(prompt("Enter the length of the table:"));


// console.log("Multiplication Table for", tableNumber, "up to", tableLength, "terms:");

// for (let i = 1; i <= tableLength; i++) {
//     console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
// }
// // Q:5


// let list = ["apple", "banana", "orange", "grape", "mango"];


// console.log("Items of the list:");

// for (let i = 0; i < list.length; i++) {

//     console.log("index" + ":",list[i]);
// }
// //Q:6(a)
// for (let i = 1; i<=15; i++){
//     console.log(i)
// }
// //Q:6(b)
// for (let i = 15; i>=0; i--){
//     console.log(i )
// }
// //Q:6(c)
// for (let i = 0; i<=20; i+= 2){
//     console.log(i )}
//     //Q:6(d)
// for (let i = 1; i<=20; i+= 2){
//     console.log(i )}
//     //Q:7
   
// let fruits = ["apple", "banana", "orange", "grape", "mango"];

// let userInput = prompt("Enter a fruit to search:");


// let found = false;


// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === userInput) {
//         found = true;
//         break;
//     }
// }


// if (found) {
//     console.log(userInput + " is found in the list.");
// } else {
//     console.log(userInput + " is not found in the list.");
// }
//Q:8
function LargestNumber(array) {
    
    let largest = array[0];

   
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    
    return largest;
}


let numbers = [10, 5, 20, 15, 8, 25];


let largestNumber = LargestNumber(numbers);
//Q:9
function smallestNumber(array) {

    if (array.length === 0) {
        return "Array is empty";
    }

   let smallestNumber = array[0];

  
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }

    return smallestNumber;
}

let number = [24, 53, 78, 91, 37];
console.log("Smallest number in the array:", smallestNumber(number));


console.log("The largest number in the array is:", largestNumber);