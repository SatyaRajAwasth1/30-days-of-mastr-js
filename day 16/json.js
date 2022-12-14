// json > Javascript object notation
// light weight data format for storing and transporting

// storing json in a variable
let jsonEg = {
    "students":[
        {
        "name": "Satya",
        "age": "20",
        "email": "test@tester.com"  
        },
        {
        "name": "Hacker",
        "age": "23",
        "email": "test@hacker.com" 
        }
        
    ]
}; // will take it as an 2 array object   of students
console.log(jsonEg);
confirm(jsonEg);

// converting / parsing json to js object
const jsObj = JSON.parse(jsonEg,); // will change into array named students
console.log(jsObj);

// converting object to json > stringfy() method is used
let obj = {
    "students":[
        {
        "name": "Satya",
        "age": "20",
        "email": "test@tester.com"  
        },
        {
        "name": "Hacker",
        "age": "23",
        "email": "test@hacker.com" 
        }
        
    ]
};
console.log(obj);
console.log(JSON.stringify(obj)); // will convert obj to json