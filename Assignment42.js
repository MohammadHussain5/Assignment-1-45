// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magiciansName = ["Hussain", "Hassan", "Ali"];
let show_magicians = (magicians_name) => {
    magicians_name.forEach(show_magicians1 => {
        console.log(show_magicians1);
    });
};
function make_great(magicians_great) {
    magicians_great.map(great => console.log(`The great ${great}`));
}
// make_great(magiciansName)
show_magicians = make_great;
show_magicians(magiciansName);
export {};
