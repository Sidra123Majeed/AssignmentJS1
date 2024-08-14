//ch:14-16
//Q:1
let arry =[]
let arr = [[],[],[]];
let numbe = ["apple","banan","mango"];
let array = [1,2,3,4];
let boolean = [true,true,false];
let education= ["SSC","HSC","BS"];
console.log(education)
// q:8
// Declare and initialize arrays for student names and scores
let Names = ["Michael", "John", "tony"];
let Scores = [320, 230, 480];
let totalMarks = 500;

// Iterate over the students and display their scores and percentages
for (let i = 0; i < Names.length; i++) {
   let Name = Names[i];
    let Score = Scores[i];
   let percentage = (Score / totalMarks) * 100;
    console.log(`Score of ${Name} is ${Score}, percentage ${percentage.toFixed(2)}%`);
}
//Q:10
// Student scores array
let studentScores = [88, 75, 92, 80, 95];

// Sorting the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Displaying the sorted array
console.log("Sorted Scores:", studentScores);
// Q:11
 let cityList =["karechi","Lahoure","Queeta","peshwer"]
 let selectedCity = []
 selectedCity = cityList.slice(0,3);
 console.log("selectedCity:",selectedCity)
//  Q:12

let givenArray = [" this ", "is","my","cat"];


let String = givenArray.join("");


console.log(" String:", String);

