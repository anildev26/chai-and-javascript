// Rest/Spread operator
// Syntax: ...variableName (given in function parameters)

// Scenario where you have a shooping ecommerce and user is adding multiple product in a cart in such cases each product varies in prices and to store that we can use Rest
function calculateMyCart(...prices) {
    return prices
}

// console.log(calculateMyCart(100,200,5,425,784,2000)); // [ 100, 200, 5, 425, 784, 2000 ] ---> here we can pass any number of argument and it will be stored inside prices as we have defined prices using rest

// Case 2

function calculateMyCart2(val1, val2, ...prices) {
    return prices
}

// console.log(calculateMyCart2(100, 522, 6956, 78, 4, 96, 455, 200)); // [ 6956, 78, 4, 96, 455, 200 ] --> As we have only returned the prices from function we are getting data 
// which is stored in prices parameter, the first 2 passed argument are stored in val1 = 100, val2 = 522 and rest of them are stored in prices. 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// How can we pass object in functions

const user = {
    username: "hitesh",
    price: 799,
    course: "code aur chai"
}

function acceptingObject(anyObject){
    console.log(`My name is ${anyObject.username} and you have applied for "${anyObject.course}"`)
}

acceptingObject(user); // My name is hitesh and you have applied for "code aur chai"

// Directly passsing the object inside the function with the function execution:
acceptingObject({
    username: "Direct Aayush",
    price: 10,
    course: "chai aur react"
}) //  Output: My name is Direct Aayush and you have applied for "chai aur react"


// Passing Array in a functions "Array Brackets :-[]"

const myNewArray = [200,56,854,36,777,58]

function returnSecondValueOfArray(getarray){
    return getarray[1] // Returning 2nd value from given array 
}

console.log(returnSecondValueOfArray(myNewArray)); // 56 --->

// Directly passing the Array into the function with the function execution (Ab array ko variable me dalke pass krna ho vo kijiye ya direct pass kijiye

console.log(returnSecondValueOfArray([77,89,56,4,9,7,5,46,463,1,8,56,])); // 89 ---> 2nd value from given array 