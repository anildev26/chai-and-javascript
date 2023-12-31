// --------------------------------------this keyword-------------------------------------------------

// this - Only works with object, we can't use this in any function

const user = {
    username: "Anil",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Chai aur JS course`);

        // What will happen if we add this keyword inside function in object 
        console.log(this); // this prints the parent object and its values + own message defined 
        /*  Output of above line
        {
            username: 'Anil',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }
}
user.welcomeMessage; // Blank No Output

user.welcomeMessage() // Anil, Welcome to Chai aur JS course ---> Method hai so () se execute hoga and method ke andar already log statement hai to console.log ke andar likhne ki jarurat nahi.

// Now change the username and re-run the welcomeMessage method
user.username = "Vinayak"

user.welcomeMessage() // Vinayak, Welcome to Chai aur JS course 

// ------------------------------------------------------------------------------------------------------

// this ---> When used inside a Blank function and function getting value from function context, let's see what its print

// Ex: 1
function chai() {
    console.log(this); // It will print the global variable, methods available in node environment ex: clearTimeout, fetch, crypto
}

// chai() 

// Ex: 2 ---> Printing any defined value using this keyword inside function block

function chai2() {
    let username = "Anil"
    console.log(`${this.username}, Welcome to Chai 2`); // undefined, Welcome to Chai 2 = UNDEFINED ---> this keyword doesn't work when assigning the value in function it only works in object
}
chai2()


// ******************************************************************************************************************

// -----------------------------------------this + Arrow Function-----------------------------------------------------------

//  Kya upar vala code jisme function block me this hai vo as a arrow function me chalega - NO

const chai2 = () => {
    let username = "Anil"
    console.log(`${this.username}`); // undefined 
}
chai2()

// What will happen if we only print this in arrow function in above we saw in this tutorial if we only print this inside function it returns the node global methods bcoz that "this" parent is Node itself

// Let's see what happens here:

const checkingThisInArrowFunction = () => {
    console.log(this); // Output: {} ---> Here, it returns an empty object 
}

checkingThisInArrowFunction()



// ******************************************************************************************************************

// -----------------------------------------Pure Arrow Function------------------------------------------------------

// Basic arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(10, 7)); // 17



// Implicit return :- RULES : Man lijiye apka code 1 line ka hai to vaise situation me "curly braces {}" avoid krsakte and vo 1 line ka code same line me likhna hota 
//                    without using return statement, if statement is not clear then you can use "round bracket(1 line code statement)" to cover them up, but agar {} use  
//                    kia after arrow function to return keyword likhna compulsory hai. 

const mulTwo = (num1, num2) => num1 * num2  // This is how implicit return code written

// OR (cover the line of code in round braces to make it more readable and clean both works perfect)

// const mulTwo = (num1, num2) => (num1 * num2) 

console.log(mulTwo(5, 2)); // 10

// How to return object in Implicit return code: Just write object content inside {} braces and wrap them inside round braces (), Thats how object is returned in single line

const mulTwo2 = (num1, num2) => ({ username: "Anil" })

console.log(mulTwo2()); // { username: 'Anil' }

// Explicit return :- Jab app return keyword use krte hai arrow function me [Opposite of Implicit return]