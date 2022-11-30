/*
* Data types are of 2 types
    - primitive (types that cant be break down into sub types / immutable)
    Numbers, Strings, Booleans, Null, undefined, symbol
    - non primitive (types made up  of primitives / mutable)
    objects, arrays
*/
// primitive types can be compared
let a = 3;
let b = 5;
console.log(a==b); // primitives can be compared

let name1 = "bishal";
let name2 = "bishal";
console.log(name1==name2);

// non-primitives cannot be compared whether two things are equal or not
let arr1 = [1,2,3];
console.log(arr1);
let arr2 = [1,2,3];
console.log(arr1 != arr2); // will return true as cannot be compared

let hackers = {
    handsomeName : "Bishal",
    beautifull: "....",
    ageOfGuy: 20,
    ageOfUgly : 19
} // key value pairs is property Keys are property name and values are property value
document.writeln(hackers);
console.log(hackers);

// copying array to others
let refArr = arr1 + " and "+arr2;
console.log(arr1[0]+arr2[0])
console.log(refArr);

// Math objects
console.log("Pi = "+Math.PI);
console.log(Math.round(Math.PI))
console.log(Math.floor(2.3483545))
console.log(Math.max([2,3,1,0,-5,87,90]))

//template literals
let name = "satya"
let age = "20"
let faculty = "software engineering"
let about = `<br>I am ${name}. I am ${age} years old. faculty: ${faculty}`  // ES6 interpolation
document.write(about);

let str = "at 2nd day of string";
console.log(str.split(' '))
console.log(str.split('2'))