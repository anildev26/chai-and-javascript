// Creating a new promise with variable

const myPromiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 1 Executed");
    resolve();
  }, 1000);
});

// To make use of "resolve" we write promiseName.then which returns a function call
// After writing "then" we need to call the resolve() method after our async task statement,  so now both of them are connected
myPromiseOne.then(() => {
  console.log("Task 1 : Resolved Statement");
});
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
    resolve();
  }, 1000);
}).then(() => {
  console.log("Task 2 : Resolved");
});

// -----------------------------------------------------------------------------------------------------------------------
// Creating Promise with variable which passes arguments in resolve
// Mostly we return an object in resolve() method but you can also return arrays etc
const myPromiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let myErr = false;
    if (!myErr) {
      // Reading like this --> if not an error
      resolve({ githubUsername: "anildev26", subscription: "Pro" });
    }
  }, 1000);
});

myPromiseThree.then((obj) => {
  console.log(obj); // { githubUsername: 'anildev26', subscription: 'Pro' }
});

// ----------------------------------------------------------------------------------------------------------------------------
// IMPORTANT: Promise which passes arguments in resolve and catches the error + Chaining of .then to access object properties
// ----------------------------------------------------------------------------------------------------------------------------

// Below we will see [resolve (passing an object), reject(passing an error msg), then(handling resolve arguments as a parameters), Chaining of then (for accessing object children or properties individually), catch (handling reject aguments as a parameters), and finally(default statement)]

const myPromiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;

    if (!err) {
      // Reading like this --> if not an error
      resolve({
        accountName: "Anil Sahu",
        githubUsername: "anildev26",
        email: "anilsahudev26@gmail.com",
        subscription: "Pro",
        repositories: 11,
      });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});

// Why we need chaining: When we only want to display limited data inside the resolve object we need to access the object attributes to get that and this can be done by chaining the [ .then ] after each  [ .then ] and returning the return statement from parent ".then"

// Note : Chaining --> If you are accessing the whole object from resolve in first chain then the next continue .then chain will have object childs and so on but we need to mention the objectchild attribute on first chain return statement and access that returned value in second chain function argument

// For ex: I only want to display user accountName or email then we can chain like below

myPromiseFour
  .then((githubUser) => {
    console.log(githubUser);
    /* Output
    {
        accountName: 'Anil Sahu',
        githubUsername: 'anildev26',
        email: 'anilsahudev26@gmail.com',
        subscription: 'Pro',
        repositories: 11
    }
    */
    return githubUser.email; // Mentioned in Above Note: Chaining
  })
  .then((mail) => {
    // Successful chaining the above github object childrens --> mail
    console.log(`Github account e-mail : ${mail}`); // Github account e-mail : anilsahudev26@gmail.com
  })
  .catch((error) => {
    console.log(error); // if an error in promise --> Error : Something went wrong
  })
  .finally(() => {
    // it runs whether then is runned or catch in promise(means doesn't matter if statement runs true or false inside promise)
    console.log("Promise Four may have been resolved or rejected"); // Promise Four may have been resolved or rejected
  });


// -----------------------------------------------------------------------------------------------------------------------
