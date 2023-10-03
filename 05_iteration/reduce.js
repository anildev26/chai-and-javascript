// Reduce  : returns a value


/*
Syntax: 
//While writing with curly braces --> return
yourArrayName.reduce( (accumalator, intialValue) => {
    //function body
    return yourReturnStatement
}, starting value )

*/


const myNum = [4, 8, 6, 3, 4, 8, 2, 2, 33, 1, 4, 552, 3, 34]

//Normal function
const reduceValue = myNum.reduce(function (acc, val) {
    console.log(`Acc : ${acc} | Current Array Value : ${val}`);
    return acc * val
}, 0)
/*
Acc : 0 | Current Array Value : 4
Acc : 0 | Current Array Value : 8
Acc : 0 | Current Array Value : 6
Acc : 0 | Current Array Value : 3
Acc : 0 | Current Array Value : 4
Acc : 0 | Current Array Value : 8
Acc : 0 | Current Array Value : 2
Acc : 0 | Current Array Value : 2
Acc : 0 | Current Array Value : 33
Acc : 0 | Current Array Value : 1
Acc : 0 | Current Array Value : 4
Acc : 0 | Current Array Value : 552
Acc : 0 | Current Array Value : 3
Acc : 0 | Current Array Value : 34
Final Answer:0
*/
console.log("Final Answer:" + reduceValue);



// Arrow function
const redVal = myNum.reduce((acc, intialValue) => {
    console.log(`Acc : ${acc} | Current Array Value : ${intialValue}`);
    return (acc + intialValue)
}, 1)

// OR

// const redVal = myNum.reduce((acc, intialValue) => (acc + intialValue), 0) | OR | const redVal = myNum.reduce((acc, intialValue) => acc + intialValue, 0)  // One line code

/*
Acc : 1 | Current Array Value : 4
Acc : 5 | Current Array Value : 8
Acc : 13 | Current Array Value : 6
Acc : 19 | Current Array Value : 3
Acc : 22 | Current Array Value : 4
Acc : 26 | Current Array Value : 8
Acc : 34 | Current Array Value : 2
Acc : 36 | Current Array Value : 2
Acc : 38 | Current Array Value : 33
Acc : 71 | Current Array Value : 1
Acc : 72 | Current Array Value : 4
Acc : 76 | Current Array Value : 552
Acc : 628 | Current Array Value : 3
Acc : 631 | Current Array Value : 34
Final value: 665
*/

console.log("Final value: " + redVal);


//------------------------------------Shopping Cart Example----------------------------------------------------

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc+ item.price, 0)
console.log("Total payable amount for all Courses:", totalPrice); // Total payable amount for all Courses: 22996