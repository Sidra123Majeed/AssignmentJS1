Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
to city of lights”*/
Q:1 ch :9-10
let  city = prompt("enter the city name");
    if(city =="karachi"){
        alert("welcome to the coding world")
    }
    //Q:2
let  gender = prompt("enter your gender here");
    if(gender =="male"){
        console.log("good morning sir")}

    else if(gender =="female"){
        console.log("good morning mam")}
   //Q:3
   let trafficSignal =prompt("enter the color")
   if(trafficSignal =="red"){
    console.log("must stop")
   }else if(trafficSignal == "yellow"){
    console.log("ready to move")
   }
   else if(trafficSignal == "green"){
    console.log(" move")
   }
  q:4
  let fuel = prompt("how much fuel has left inyour car")
  if(fuel >= 0.25 ){
    console.log("Please refill the fuel in your car")
  }
        // Q:5
    let a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");}
     var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
     var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
     let materialCost = 20000;
    let laborCost = 2000;
    let totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
     if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    
   
    
     if("car" < "cat"){
    alert("car is smaller than cat");
    }
    //Q:7
    let score =83
    let grade
let remarks
    if(score>= 80){
        grade ="A one";
remarks = "excellent"
    }
    else if(score>= 70 ){
        grade ="A";
        remarks ="good"
    }
   else if(score>= 60){
    grade ="B"
remarks = 'you need improvment'}
else if(score = 50){
    grade ="fail"
remarks = 'you need to work heard'}
console.log("according to your score,your grade was:",grade,remarks)
//Q:7
let gameNum = 9;
let num =prompt("guess the secret number. from 1-10");

if(num == gameNum+1){
    console.log("“Close enough to the correct answer”.");

}
else if(num == gameNum){console.log("Bingo! Correct Answer")
}
//Q:8
 let numb = prompt("enter a number")
 if(numb % 3 === 0){
    console.log(numb,"is divisible by 3")
    
 }else{
    console.log(num,"is not divisible by 3")
 }
 Q:9
 let number = 123450
 if(number % 2 ===0){
    console.log(number,"is an even number")
 }
 else{
    console.log(number,"is an odd number")
 }
 
//q;11
function calculator(num1, num2, operation) {
    let result;
    
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            result = "Error: Division by zero";
        } else {
            result = num1 / num2;
        }
    } else if (operation === '%') {
        result = num1 % num2;
    } else {
        result = "Invalid operation";
    }

    return result;
}

// Take input from user
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Compute the result
let result = calculator(num1, num2, operation);

// Display the result to the user
alert("The result is: " + result);