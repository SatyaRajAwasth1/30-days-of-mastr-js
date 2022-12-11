// Destructing and Spread
/* Destructing Arrays
    -> destructing way to unpack arrays, and objects and assigining to a distinct variable;
*/
let arr1 = [2   ,3,4];
const [n1, n2, n3] = arr1; // will unpack and add each element or arr1 on the variable objects given here
console.log(n1 , n2 , n3); // if array havent equal amount of objects then undefined will be assigned to objects
// if 
const [a,b,c,d,e] = arr1;
console.log(d,e); //2 4 undefined

// to skip any values just a comma , is given
const [x,,y,,z] = arr1;
console.log(x,y,z); //2 4 undefined 

// default can also be kept on variables
let [num1 = "1",num2,num3] = arr1;
console.log(num1, num2 , num3); // will print 2 3 4 as it overrides
// it works only when arr1 have 1st element undefined