// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
//  using a different number of arguments each time.
function sandwich(...items1) {
    console.log("Your recipe of sandwich");
    items1.forEach(ingredintes => {
        console.log(ingredintes);
    });
}
sandwich("Bun", "egg", "ketchup"); // 1
sandwich("Bun", "egg", "ketchup", "onion", "tomato"); // 2
sandwich("Bun", "boarst", "fires", "ketchup"); // 3
export {};
