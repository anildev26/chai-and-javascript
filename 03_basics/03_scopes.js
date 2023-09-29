let a = 10;
const b = 20;
var c = 30;


// if(true){
//     let a = 123
//     console.log("Inner a:",a); // Inner a: 123
// }

// console.log("Outer a:", a);  //Outer a: 10

// -----------------------Video 2-----------------------

// nested functions : Aisa samjho ki "Chote bache bade log ki ice-cream leke kha sakte but bade log aisa nahi krsakte qki ye acha nhi lagega"

// 

function parent() {
    let firstName = "Suresh"
    let surname = " Kapale"

    function child() {
        let childName = "Vinayak Az"
        console.log(childName + surname); // Output: Vinayak Az Kapale ---> Bache bado se lesakte i.e using parent variable "surname"
    }
    // console.log(childName);// Error: childName is not defined ---> Bade chote bache ka kuch nahi cheen sakte i.e child function ka

    child()
}

// Now important part calling that function

parent()


// ----------------------------------------------------------------------------
/* Basic Hoisting concept in function declaration 
- How functions can be declared : Two methods here
1) Normal function 
2) Using variable and declaring function
*/

// 1) Normal function 

console.log(addOne(5)) // 6 ---> Calling the same function above its decalaration which wont give any error
function addOne(num) { // Normal Function
    return num + 1;
}

console.log(addOne(5)) // 6 ---> Calling Normal function execution after declaring the function above


// 2) Using variable and declaring function

console.log(addTwo(3)); // Error: Cannot access 'addTwo' before initialization ---> Can't access variable which is holding function before its declaration

const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(10)); // 12 Calling variable function after decalaration of variable which holds the function