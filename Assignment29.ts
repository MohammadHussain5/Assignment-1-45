// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Array of favorite fruits
let favorite_fruits:string[] = ["Mango" , "Banana" , "Orange"]


// Check for certain fruits in the array

if (favorite_fruits.includes('Mango')) {
    console.log("You really like Mango!");
}

if (favorite_fruits.includes('Banana')) {
    console.log("You really like Bananas!");
}

if (favorite_fruits.includes('Strawberry')) {
    console.log("You really like Strawberries!");
}

if (favorite_fruits.includes('Orange')) {
    console.log("You really like Oranges!");
}

if (favorite_fruits.includes('Grapes')) {
    console.log("You really like Grapes!");
}
