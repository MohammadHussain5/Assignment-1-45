// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest = ["Jawwad","Sajjad", "Firdous", "Ahsan", "Hassan","Adil","Yasir"];

console.log("I am inviting only 2 people for dinner.");

 let remove1 = guest.pop(); 
console.log(`Dear ${remove1} "I'm sorry, but I can't invite you to dinner."`);

let remove2 = guest.pop();
console.log(`Dear ${remove2} "I'm sorry, but I can't invite you to dinner."`);


let remove3 = guest.pop();
console.log(`Dear ${remove3} "I'm sorry, but I can't invite you to dinner."`);


let remove4 = guest.pop();
console.log(`Dear ${remove4} "I'm sorry, but I can't invite you to dinner."`);


let remove5 = guest.pop();
console.log(`Dear ${remove5} "I'm sorry, but I can't invite you to dinner."`);


guest.forEach(mahman => {
    console.log(`Dear ${mahman} You’re still invited. `);
    
})

guest.pop();
guest.pop();
 
console.log(guest); //empty error






