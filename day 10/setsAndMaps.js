// concepts on sets and maps
// array can contain duplicate elements, while sets can contain only unique elements.
const players = new Set(); // created a set players
console.log(players);
// adding elements to the set

players.add("Messi"); // will add messi at the index 0
players. add("Neymar");
players.add("Ronaldo");
console.log(players.values()); // print all the values
console.log(players); // print with the index and value
players.add("Neymar"); // will not add as it exists
console.log(players);

players.delete("Ronaldo"); // will remove ronaldo from the set
console.log(players.values());

/*
// printing each elements using for each
for(const player of players){
 alert(player);
}
*/

console.log(players.has("Messi"));


// Map -> contains key value pairs
