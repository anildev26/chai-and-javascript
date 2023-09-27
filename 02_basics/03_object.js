//objects

// Singelton [Explained on the part 2]
//new Object [using constructor]

// ******************Symbol - Declare and use in object***********************
const mySym1 = Symbol("2023 is the worst year")
/**
 * While using symbol in object there is a syntax need to be followed :
 * [mySym1] = "Value you want to be" // IMPORTANT
 * Directly writing the Symbol variable name will convert the symbol datatype to String/Int preference what you store inside that 
 * variable in the object(check using typeOf objectname)
 * Wrong way: (It won't give error but just change the Datatype and print the value of your Symbol variable as a datatype String/Int)
 * const stud1 = {
 * name : "jack",
 * mySym1 :"Its the best year" // Datatype: String
 * }
 * 
 * Right Way:
 * 
 * const stud1 = {
 * name : "jack",
 * [mySym1] : "Its the best year" // Datatype: Symbol
 * }
 */

//Object Literals 
const stud1 = {
    name: "Jack",
    "User surname" : "Sahu",
    age: 24,
    [mySym1]: "Bad year yar!!",
    address: "Mumbai",
    email: "jackluis2672000@gmail.com",
    number: 9082154675,
    isLogged: false,
    lastLoginDays: ["Monday","Friday", "Saturday"]
    
}
//Object Access --->
console.log(stud1); //Print the whole object as it is
/*
{
  name: 'Jack',
  'User surname': 'luis',
  age: 24,
  address: 'Mumbai',
  email: 'jackluis2672000@gmail.com',
  number: 9082154675,
  isLogged: false,
  lastLoginDays: [ 'Monday', 'Friday', 'Saturday' ],
  [Symbol(2023 is the worst year)]: 'Bad year yar!!'
}
*/

// Accessing object literals and key using . Dot operator
console.log(stud1.address); // Mumbai ----- Method 1
// Another method to access object is using square bracket objectName["key"] by passing key as an string argument
console.log(stud1["User surname"]); // luis 

//Printing after adding Symbol datatype varible mySym1
console.log("Type of Symbol variable:",typeof stud1.mySym1) // Type of Symbol variable: undefined
console.log("Key Data:", stud1.mySym1); // Key Data: undefined
console.log("Key Data using another Method:", stud1[mySym1]); // Key Data using another Method: Bad year yar!! ---> Only way to print Symbol type of keys 

//*********************************************************

// Changing value of any key in object (With = operator we can overrite the value of any object key)
stud1.name = "Changed to Grandpa" // Changing default name: jack to --> name: Changed to Grandpa
console.log(stud1.name); // Changed to Grandpa
 
//Object.freeze(ObjectName) --> When we dont want to make any changes in our object we can lock them

// Object.freeze(stud1); // For further use in function below we have commented this freeze

stud1.name = "Sapna" 
console.log(stud1.name); // Sapna --> (old result) New changed value didn't overrited the old value because above we have freezed our object

//*********************************************************

// Including function in an object

stud1.greeting = function() {
    console.log(`Hello there ${this.name} ${this["User surname"]}`); // Hello there Sapna Sahu ---> using this or object name we can access the current obj keys
}
console.log("Printing the Function (Greeting): ");
console.log(stud1.greeting);  // [Function (anonymous)] --> When not using () after function name this happened--> Function reference has been passed not the value

console.log(stud1.greeting()); // Hello there Sapna Sahu