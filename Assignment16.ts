

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest = ["Sajjad", "Firdous", "Hassan","Adil"];

console.log("I found a bigger dinner table, so I'll invite 3 more guests.");

guest.unshift("Jawad"); // adding in start
guest.push("Yasir") // adding in end

// adding in middle
let newName = "Ahsan"
let middleIndex = guest.length/2
guest.splice(middleIndex,0,newName); 


guest.forEach(mahman =>{
  console.log(`"I would like to invite you for dinner, dear ${mahman}."`) 
})





