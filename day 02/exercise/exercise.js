// Exercise level 1
let challenge = ' 30 days of javascript '; // Q.N. 1
console.log(challenge); // Q.N. 2
console.log(challenge.length); // Q.N. 3
challenge.toUpperCase; // Q.N. 4
challenge.toLowerCase; // Q.N. 5
console.log(challenge.substring(0,2)); // Q.N. 6
console.log(challenge.substring(3, challenge.length)) // Q.N. 7
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))

console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split())
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))

console.log(challenge.replace("javascript", "java"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('j'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'));
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"))
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"))
console.log("You cannot end a sentence with because because because is a conjunction".search('because'))
console.log(challenge.trim(""))
console.log(challenge.startsWith(" "))
console.log(challenge.endsWith(" "))
console.log(challenge.match('a'))
console.log("30 days of ".concat("JavaScript"))
console.log(challenge.repeat(2))