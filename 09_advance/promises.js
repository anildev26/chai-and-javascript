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
// Promises with then catch OR you can use [async await] --> here we can handle object children using dot operator without chaining response (.then)

// async - await Cons: Directly error handles nahi krte we can handle error by wrapping inside try and catch block

// Creating promise is same like all, but handling them is done with async awai function and later calling that function to run

const myPromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let myErr = true;
    if (!myErr) {
      // Read like this --> if not an error runs this block
      resolve({ githubUsername: "Rhishikesh12", subscription: "Free" });
    } else {
      reject("Error: Finding Git user");
    }
  }, 1000);
});

async function handlePromiseFive() {
  // we need to call this function in order to run the promise
  try {
    const response = await myPromiseFive; // Here resolve passed object is fetched and stored in variable
    console.log(response); // { githubUsername: 'Rhishikesh12', subscription: 'Free' }

    // From personal research we dont need chaining here, we can access object data with dot (.) operator in asynch and await
    console.log(
      `Owner name : ${response.githubUsername} and subscription : ${response.subscription}`
    ); //Owner name : Rhishikesh12 and subscription : Free
  } catch (error) {
    console.log(error); // Error: Finding Git user --> When promise got rejected due to if statement
  }
}
handlePromiseFive();

// -----------------------------------------------------------------------------------------------------------------------

//                     WORKING WITH API DATA USING FETCH with both the methods (async, await && then,catch)

// -----------------------------------------------------------------------------------------------------------------------

//----------------------------Works in both Promise - then and catch + async and await functions--------------------------
// - For accessing object children fetching from an API We can convert the response from string to json and then use dot operator to access the individual data we need.

// Handling Api request with async and await with fetch (fetch return back promise)

async function handleGithubApi() {
  const response = await fetch("https://api.github.com/users/anildev26");
  console.log(response); // Promise { <pending> } --> It is going inside pending because it is taking some time to process which can be resolved by passing await before fetch statement
  /*
   Before : const myGitApi = fetch('https://api.github.com/users/anildev26')  --> Promise { <pending> }
   After:    const myGitApi = await fetch('https://api.github.com/users/anildev26') ---> successfull running and returning string response
   */
  // Now we need to convert the String response to json
  const data = await response.json(); // This also takes time which will result in error like above Promise { <pending> }...so to solve it we can add await before converting
  console.log(data); // Successfully returning the json github api data
  console.log(data.following); // 6 ---> successfull object children property returned
}

handleGithubApi(); //Function call is must in async and await

// -----------------------------------------------------------------------------------------------------------------------
// Handling Api request with fetch (fetch return back promise) and applying .then, .catch in the fetch to get the reponse from fetch

fetch("https://api.github.com/uss/anildev26")
  .then((response) => {
    // console.log(response); // response in string
    // converting to json and returning to chaining .then
    return response.json();
  })
  .then((data) => {
    // accepting upper then function retured data here
    console.log(data); // successfully printing the json api data
    console.log("Account name :", data.name); // Anil Sahu
  })
  .catch((error) => {
    console.log(error);
    /*
    When passing the incorrect url in fetch it displays this error otherwise on right url error is not catched
    {
        message: 'Not Found',
        documentation_url: 'https://docs.github.com/rest'
    }
    */
  });
