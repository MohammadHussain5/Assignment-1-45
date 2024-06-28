// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magiciansName = ["Hussain", "Hassan", "Ali"];
let show_magicians = (magicians_name) => {
    magicians_name.forEach(show_magicians1 => {
        console.log(show_magicians1);
    });
};
show_magicians(magiciansName);
export {};
