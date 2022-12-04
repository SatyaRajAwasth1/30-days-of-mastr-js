// exercise of day 6 
// about loops
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