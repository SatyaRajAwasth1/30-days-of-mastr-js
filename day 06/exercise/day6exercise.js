// exercise of day 6 
// about loops
/*
all the loops and iteration are same 2 c
*/
// level 1

//q.n.4

/*
pattern
#
##
###
####
#####
######
#######
*/
let n = 5;
for(let i = 0; i<n; i++){
    for(let j = 0; j<i; j++){
    console.log("#");
}
console.log(" ")
}

//q.n. 6

for(let i = 0; i<=10; i++){
    console.log(i, i**2, i**3);
}
//q.n. 13 
let arrOfRandom = [];
for(let i = 0; i<5; i++){
    arrOfRandom.push(Math.round(Math.random()*10));
}

//q.n. 5
// generating a random id
/*
let randomId = " ";
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
for(let i = 0; i<6; i++){
    randomId += chars.charAt(Math.random()*chars.length);
}
console.log(randomId);
*/




