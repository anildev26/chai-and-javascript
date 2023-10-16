// Creating a new promise with variable

const myPromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task 1 Executed");
        resolve()
    },2000)
    
})

// To make use of "resolve" we write promiseName.then which returns a function call
// After writing "then" we need to call the resolve() method after our async task statement,  so now both of them are connected
myPromise.then(()=>{
    console.log("Task 1 : Resolved Statement");
})
/* Output:
Async task 1 Executed
Task 1 : Resolved Statement
*/

// -----------------------------------------------------------------------------------------------------------------------

// Creating promise without variable using new keyword and attached resolve [ .then ]
// Even we are writing attached then to promise still we need to call the resolve() method after async task

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 Executed");
        resolve()
    }, 5000)
}).then(()=>{
    console.log("Task 2 : Resolved");
})



















