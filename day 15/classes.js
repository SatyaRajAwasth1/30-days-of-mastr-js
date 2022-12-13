// exploring classes in js
/*
Except of scripting language js is today also considered as OOP language.
class can be made as same as on C++ and Java

*/
class MyFirstClassInJs{
    // default constructor
    MyFirstClassInJs(){
        console.log("default constructor");
        console.log(this);
    }

    MyFirstClassInJs(firstName){ // parameterized constructor // will be called while a object is created by passing a variable
        console.log("Hello "+firstName);
    }
// methods in js
     sayHello(){ 
        console.log("Hello guys")
    }

}

// objects are made as same as on java but care about data types
const obj = new MyFirstClassInJs(); // class instantiated or object created
console.log(obj); // MyFirstClassInJs // as obj is a const variable

// constructor is also same as on c++ or java
// calling parameterized constructor
 new MyFirstClassInJs("Satya"); // anynomous object
 //console.log(newObj);

 obj.sayHello();

 // for getters and setters in js we use get methodName(){} and for setter we use set methodName() {} inside class

 // for static methods > static keyword is used. Static methods are not associated with instance instead they are called itself on the class

 // inheritance same as JAVA. // extends keyword is used

 