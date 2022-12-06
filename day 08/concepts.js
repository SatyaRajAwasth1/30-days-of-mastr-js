// about scopes
// scope of variables
/*
Scopes are:
    - GLobal scoped > Anything scoped without let, var or const keyword are window global
    - Local scoped > variables scoped with let, var and const inside a block or function
*/
// global scoped
a = "Javascript";
b = " java"; 
const piVal = 3.14;
var stat = "error 404";
// they are window global object. They are automatically available
console.log(a , b);

// local scope
let name = "hacker"; // global scope
// let and const are block level scoped
// different between let and const > const cannot be reassigned 

if(true){
   // console.log("outside the fun same variable: ",a,b,pi); // a and b will return error > 
    let a = "spring"; //local scoped
    let b = "css";
    stat = "ok 200"
    const piVal = 3.1456;
    // piVal = 4; will return error
    console.log(a,b,stat);
    var hey = "hi"; // no later after ES6
    console.log(hey); 
}
console.log("outside the fun same variable: ",a,b,piVal);
console.log(stat,hey)