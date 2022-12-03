// level 1 of exercise 5
let qn1 = []; // q.n. 1 empty array declared
let qn2 = ['element 1',2,"element 3", 23.5,true] // q.n. 2 array with 5 elements
console.log(qn2.length); // q.n. 3 find the length of array

// q.n. 4
console.log(qn2[0])// find the 1st element of array

// finding middle term
let midTerm1, midTerm2;
if(qn2.length % 2 == 0){
    midTerm2 = Math.round((qn2.length - 1)/2);
    midTerm1 = Math.floor((qn2.length -1)/2);
    console.log(qn2[midTerm1] + " , " + qn2[midTerm2]);
}
else{
    midTerm2 = Math.round((qn2.length - 1)/2);
    console.log(qn2[midTerm2]);
}



// finding last iterm
console.log(qn2[qn2.length-1]);

// q.n. 5
let mxdArr = ['element 1',2,"element 3", 23.5,true, "hip-hop dance", false, null];
console.log(mxdArr.length);

//q.n. 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// q.n. 7
console.log(itCompanies);

// q.n. 8
console.log("number of companies = " + itCompanies.length)

// q.n. 9

// first company
console.log(itCompanies[0]);

// middle company
if(itCompanies.length % 2 == 0){
    console.log(itCompanies[ round((itCompanies.length - 1)/2) ] + " , " + itCompanies[ Math.round((qn2.length - 1)/2) ] );
}
else{
    console.log(itCompanies[ Math.round((itCompanies.length - 1)/2)] );
    
}

// last company
console.log(itCompanies[itCompanies.length - 1]);

// q.n. 10
for(let i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i]);
}

// q.n. 11
for(let i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase());
}

// q.n. 12
console.log(`${itCompanies[0]} , ${itCompanies[1]} , ${itCompanies[2]} , ${itCompanies[3]} , ${itCompanies[4]} , ${itCompanies[5]} , 
and ${itCompanies[6]} are big IT Companies.`)

//q.n. 13
let a = 0;
let xCmp = prompt("Enter a IT Company Name to search : ");
for(let i = 0; i< itCompanies.length; i++){
    if(itCompanies[i].toLowerCase() == (xCmp.toLowerCase())){
        a = 1;
        break;
    }
}
if(a==1){
    console.log(xCmp);
}
else{
    console.log(xCmp+" not found.");
}

// q.n. 14