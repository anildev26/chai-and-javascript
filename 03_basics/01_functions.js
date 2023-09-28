//functions
// Syntax: 
function functionName(){
    //Code to be executed
}

functionName // reference of the function
//When you add paranthesis [functionName()] to a function then reference change to execution of that particular function 

functionName() // execution of the function

// Example:- Function accepting parameters and ways to print the ans

function addTwoNumbers(number1, number2){ // these are called "paramenters" and in javascript we dont need to mention the datatype for parameters
    //how can we return the value or print the value
    let result =  number1+number2
    console.log("Result: ",result); // as we directly printing log inside function we just need to call the function and it will return result in console
}

addTwoNumbers(5, 7) // Result: 12 ---> We need to pass the "Arguments" first over here while calling the function
// Lets Understand diff cases what gonna happen

//[Empty Function Call] What happened when we dont pass value to the function accepting parameters:
addTwoNumbers() // Result: NaN ---> Nan is printed because we never assigned values to the paraments and hence its Nan (Not a Number)

// -----------------What happened when we pass diff datatype value to a function:-----------------

// CASE 1:- (Number, String as a number)
addTwoNumbers(5, "5") // Result:  55 ---> When passing Number, String in function javascript assume that if a string is passsed in argument that means the another parameter
// must also be string and with the help of inbuilt type convertion it convert the Number: 5 to String: "5" and hence it concats both the string ("5", "5") = 55

// CASE 2:- (Number, String as a character)
addTwoNumbers(7, "abc") // Result:  7abc ---> Same scenario like above mentioned

// CASE 3:- (Number, null)
addTwoNumbers(5, null) // Result:  5 ---> It doesn't count the another parameter

// CASE 4:- (Number, undefined)
addTwoNumbers(5, undefined) // Result:  NaN ---> Whole result is said to "Nan", When any value is said to be undefined in the parameters

// ---------Checking on Strings passed with another different datatype----------

// CASE 5: (String, null)
addTwoNumbers(null,"Anil") // Result:  Anilnull ---> When String + null is passed it simply concatinates 
// OR
addTwoNumbers(null,"Anil") // Result: nullAnil ---> Simply Concatinated

// CASE 6: (String, undefined)
addTwoNumbers("Anil", undefined) // Result:  Anilundefined ---> Simply Concatinated

addTwoNumbers(undefined, "Anil") // Result:  undefinedAnil ---> Simply Concatinated

// ----------------------------------------------------------------------------------------------

// Example 2: How to return value using return keyword

// Note: Any line of code written after "return" keyword in function is never executed

function multiplyTwoNumber(num1, num2){
    // directly using return statement with multiplication functionalities without any third variable
    return num1*num2 // This line will only return the multiplied value to the function execution call, it won't print anything inside the console as there is no console log
}

multiplyTwoNumber(7, 9) // function exection with no output as function has returned the muptiplied output but we haven't stored it anywhere

// Storing the returned output in variable and printing it or directly calling the function execution inside console log which will print the result came inside function

// third varible result:
const result = multiplyTwoNumber (8, 5) 
console.log("Multiplied value using third variable : ",result); // Multiplied value using third variable :  40

// Directly using console.log(function execution)

console.log("Multiplied value using console:",multiplyTwoNumber(9, 8)); // Multiplied value using console: 72

// ----------------------------------------------------------------------------------------------------------------------------

// Assigning Default value to function argument when no parameter is passed, if parameter is passed to function then it will overwrite the default value

function printMyName(name){
    return `Hello ${name}, Welcome to Salesforce`
}

printMyName() // Nothing is printed when i didn't passed anything in function parameter + i haven't printed the function execution too
console.log(printMyName()); // Hello undefined, Welcome to Salesforce ---> undefined =  Printing function without passing any parameter which is necessary in function argument

// To tackle such situation when blank function execution has happended we can assign default value to our function parameter
// Re-Writing the same funtion here again with assigning default
function printMyName(name = "Rhishikesh"){   // Now calling the empty function will print "Rhishikesh" name instead of "undefined"
    return `Hello ${name}, Welcome to Salesforce`
}
console.log(printMyName()); // Hello Rhishikesh, Welcome to Salesforce

// Now passing an argument and checking the result changes from "default : Rhishikesh" to passed "argument name"
console.log(printMyName("Anil")); // Hello Anil, Welcome to Salesforce ---> Perfect output 