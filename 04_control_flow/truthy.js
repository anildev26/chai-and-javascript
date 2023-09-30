//----------------------Falsy value:-----------------------
/**
 * false
 * 0
 * -0
 * 0n --> (BigInt ka 0n value : Falsy value)
 * "" --> (Emtpy string : Falsy value)
 * null
 * undefined
 * NaN
 */

//----------------------Truthy value:-----------------------
/**
 * "0" --> (String ke andar 0 is :  truthy value)
 * "false" --> (truthy value)
 * " " --> (Space inside : truthy value)
 * [] --> (Empty array : truthy value)
 * {} --> (Empty object : truthy value)
 * function(){} --> (Empty function : Truthy value)
 */


// How to check if the given array is empty or not in control flow
const checkArray = [];

if (checkArray.length === 0) {
    console.log("Array is Empty"); // Array is Empty
}

// Checking object is empty or not : Object.keys(yourObjectName)
const checkObject = {}
if (Object.keys(checkObject).length === 0) { // Object.keys(checkObject) ---> Itna statement hame return krta hai ek Array, and ab array miljayega itne me to isme ham "length" property se check krsakte
    console.log("Given Object is Empty"); // Given Object is Empty
}

// Null Coalescing Operator (??) : null undefined

let val1
val1 = 10; // 10
val1 = 5 ?? 10 // 5

val1 = null ?? 45 // 45
val1 = undefined ?? null // null
val1 = undefined ?? 15 // 15 


console.log(val1);

// Terniary Operator

// Syntax : condition ? true : false

// Ex:
const bookPrice = 100
bookPrice <= 90 ? console.log("Less than 90") : console.log("Nope, its more than 90"); //Nope, its more than 90