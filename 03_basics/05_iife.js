// Immediately Invoked Function Expressions (IIFE)

/*Defination :- 
 * 1) Global Scope ke pollution se problem hoti hai kai bar, uss global scope ke variable ya jo bhi declaration hai uske pollution ko hatane ke liye hamne iife ka use kia krte hai
 * 2) Jo function immediately execute hojaye use ham iife kehte
 * 
 * Syntax:- ()(); //Semi - colon must to break the iife 
 * (function defination)(function execution)
 * 
 * NOTE: Whenever in the end of function execution if semi-colon is not added then it can give this error:
 * (function checkDb2(){
 * ^
 * TypeError: checkDb(...) is not a function
 */

// ------------------------------------------------------------------------------------------------------

// This is normal function calling which we can do without iife
function checkDb() {
    console.log(`DB Connected`); // Output: DB Connected
}
checkDb(); // Without semi-colon over here, it will give above error mentioned below syntax

// ------------------------------------------------------------------------------------------------------

// With the use of iife, this function will look like this
(function checkDb2() {
    console.log(`DB Connected Two`); // Output: DB Connected Two
})(); // Immediate calling with the help of iife

// ------------------------------------------------------------------------------------------------------

// Doing same with the arrow functions
(() => {
    console.log(`DB Connected with the help of Arrow Function`);
})(); // Output: DB Connected with the help of Arrow Function

// ------------------------------------------------------------------------------------------------------

// Passing parameters in arrow function and how to pass argument to that particular argument in function
((dbname) => {
    console.log(`DB connected to "${dbname}" with the help of parameterized arrow function`);
})("MySQL") // Output: DB connected to "MySQL" with the help of parameterized arrow function






