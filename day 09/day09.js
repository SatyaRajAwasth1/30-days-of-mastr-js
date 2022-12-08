/* Higher order functions in js
    -> Functions that take functions as parameter or return a function as value.
*/
// a function to square number
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
