// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy 
// of the array of magicians’ names. Because the original array will be unchanged, return the new array and 
// store it in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.
let magiciansName = ["Hussain", "Hassan", "Ali"];
let show_magicians = (magicians_name) => {
    magicians_name.forEach(show_magicians1 => {
        console.log(show_magicians1);
    });
};
function make_great(magicians_great) {
    magicians_great.map(great => console.log(`The great ${great}`));
}
// copy of array
let copyofArray = magiciansName.slice();
// now calling make_greet function with copy of array
make_great(copyofArray);
// now calling orginal array & copy array with show_magicians function
show_magicians(magiciansName);
show_magicians(copyofArray);
export {};
