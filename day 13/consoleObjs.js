// about console object methods

/* console.log()
- used to show output on the console
*/
// using console.log() in a C style
console.log("%d day of %s",30,"javascript");
// using css on it
console.log("%c 30 days of js", "color:green"); // console output will be of green color
/* document.write()
- used to show output on the document (view port)
*/
document.write("Lets Hack Programming.")

/* console.warn()
- to give warning on browser console
*/
console.warn("dont learn deprecated things");

/* console.error()
- to give errors on browser console
*/
console.error("Error 404 your learning is slow");

/* console.table()
- display data as a table on console
*/
const names = ['Bishal', 'Janak', 'Abhisekh', 'Shrawan']
let fname = "satya", lName="Awasthi";
console.table(fname, lName);
console.table(names);

/* console.time()
- used to start a timer to check how long the process takes
*/
console.time("general for loop");
for(let i =0; i<names.length; i++){
    console.log(names[i]);
}
console.timeEnd("general for loop");
console.time("time for for of loop")
for (const name of names) {
    console.log(name);
}
console.timeEnd("time for for of loop")
// time taken betn console.time() and console.timeEnd() will be printed and the parameter must be same for both

/* console.info()
- gives information on browser console
*/
console.info("day 13 of 13 days of js but its 12th day ");

/* console.assert()
- checks assertion and write an error message on console if condn is false
*/

    console.assert((names[0] == "satya"),"he is not satya.");

/* console.group()
- used to group different log groups
*/

// console.count // counts the number of times console.count() is called

// console.clear() // clears the console
