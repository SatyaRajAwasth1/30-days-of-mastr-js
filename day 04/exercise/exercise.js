// js file for exercise 04
//level 1
// let age = prompt("Enter your age: ");
// if(age >= 18){
//     console.log(" You are old enough to drive.");
// }
// else {
//     console.log(`You are left with ${18-age} years to drive.`);
// }

// Q>N> 2
/*
let myAge = 20;
let yourAge = prompt("Enter your age: ");
if(myAge > yourAge){
    console.log(`I am ${myAge-yourAge} years older than you.`);
}
else {
    console.log(`You are ${yourAge-myAge} years older than me.`);
}
*/

// level 2
/*
let scores = prompt("Enter your score: ");
if(scores >=90 && scores <= 100){
    console.log("you obtained A.");
}
else if(scores >=70 && scores <= 89){
    console.log("you obtained B.");
}
else if(scores >=60 && scores <= 69){
    console.log("you obtained C.");
}
else if(scores >=50 && scores <= 59){
    console.log("you obtained D.");
}
else if(scores >=0 && scores <= 49){
    console.log("you obtained E.");
}
else{
    console.log(" not a valid input");
}
*/

// level 3
// program that tells number of days 
let days = prompt("Enter no. of days on feburary, i will tell you is it leap year or not:  ");
if(days == 29){
    confirm("Its leap year.");
}
else if(days > 29)
alert("Not a valid input days can't be "+days+" in feburary")
else{
    alert("Its not leap year");
}

