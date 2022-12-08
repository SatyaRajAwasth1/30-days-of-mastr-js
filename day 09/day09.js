/* Higher order functions in js
    -> Functions that take functions as parameter or return a function as value.
*/
/*
 //a function to square number
const square = (n) => {
return n**2; //returns the square of n
}
// higher order function by calling a function as parameter

function displaySqr(square, n){
    let sqr = square(n);
    return sqr;
}
let n = prompt("Enter a number to square");
console.log(`square of ${n} = ${displaySqr(square , n)}`);
*/

/*
//Returning a function
function myName(firstName){
    middleName = (mn = " ") =>{
    lastName = (ln) => {
        return firstName + mn + ln ;
    }
        return lastName;
    }
        return middleName;
}
console.log("My name: "+myName("Satya ")("Raj ")("Awasthi"));
console.log("name: "+myName("Puran ")()(" Bhatta"));
*/

//setting time
usrName = prompt("Enter your name .");
// function that says hello
function sayHello(){
alert("Hello "+usrName +" Welcome.");
}
// setting a time interval to say hello and welcome to user in every 3 seconds.
setInterval(sayHello , 10000); // setInerval(callable_function ,time) 1000 = 1 second