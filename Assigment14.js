// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to
//  print a message to each person, inviting them to dinner.
var guest = ["Sajjad", "Firdous", "Ahsan", "Adil"];
guest.forEach(function (mahman) {
    console.log("\"I would like to invite you for dinner, dear ".concat(mahman, ".\""));
});
