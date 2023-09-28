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

console.log(calculateMyCart2(100, 522, 6956, 78, 4, 96, 455, 200));