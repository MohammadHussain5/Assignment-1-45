// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`Your shirt size is ${size} & your message is printing in your shirt is ${message}.`);
}
make_shirt(); // large shirt
make_shirt("medium"); // medium shirt with defualt message
make_shirt("small", "I'm Web developer"); // any size with a different message
export {};
