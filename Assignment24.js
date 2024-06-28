// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Test 1 
let str1 = "Hello World";
console.log(str1 === "Hello World"); // with equality
console.log(str1 !== "Hello World"); // with inequality
// Test 2
console.log(str1.toLowerCase() === "hello world"); // with equality 
console.log(str1.toLowerCase() !== "hello world"); // with inequality
// Test 3
let num1 = 5;
let num2 = 6;
console.log(num1 === 5); // with equality
console.log(num2 !== 6); // with inequality
console.log(num1 > num2); // false
console.log(num1 < num2); // true
num1 = 15; // reassign Value
num2 = 10; // reassign Value
console.log(num1 >= 15); // true
console.log(num2 <= 10); // true
// Test 4 
let isfalse = false;
let isTrue = true;
console.log(isTrue && isfalse); // And Conditon : false because if both condition is true then output is true
console.log(isTrue || isfalse); //And Conditon :  true because if 1 condition is true so output is true
// Test 5
let arr = ["Hussain", "Jawad", "Hassan", "Ali", "Abbas"];
console.log(arr.includes("Abbas")); // true
console.log(arr.includes("Zain")); // False
export {};
