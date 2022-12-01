// exercise of day 3
/*
    let firstName = "Satya";
    let lastName = "Awasthi";
    let country = " Nepal";
    let age = 20;
    let isMarried = false;
    let year =  2079;

    console.log(typeof firstName, typeof lastName, typeof country, typeof age, typeof isMarried, typeof year);
    // q.2
    console.log('10' === 10);
    // q.n. 3
    console.log(parseInt('9.8') == 10); 
    console.log(1, " string", true); //q.n. 4 i
    console.log(0, "\"", null); //q.n.4 ii

    // q.n. 5

*/

    // level 2
/*
    let base = prompt("Enter the base: ");
    let height = prompt("Enter the height or triangle");
    console.log("are of the triangle is "+base*height);
*/
    //q.n.2

// q.. 9
/*
let hours = prompt("enter hours: ");
let rate = prompt("enter rater per hour")
console.log("Your weekly earning is "+hours*rate);
*/
// q.n. 10
let name = "Satyadasdfaggaga";
(name.length > 7)
? console.log("your name is long")
: console.log("your name is short");
//q.n. 11
let firstName = "Asabeneh";
let lastName = "Yetayeh";
firstName.length>lastName.length
? console.log("your first name, "+firstName+" is longer than your family name, "+lastName)
: console.log("your first name, "+firstName+" is longer than your family name, "+lastName) ;


// q.n. 13
let birth = prompt("enter your birth year in AD: ");
let diff = (new Date().getFullYear() - birth);

(diff>=18) 
? console.log("you are "+diff+". You are old enough to drive")
: console.log("you are "+diff+". You will be allowed to drive after "+18-diff , "years");

// Q.N. 15
// i
let miti = new Date();
console.log(miti.getFullYear()+"-"+miti.getMonth()+"-"+miti.getDay()+" "+miti.getHours()+":"+miti.getMinutes());