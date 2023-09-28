// Objects ---- Part 2
// Singleton --
const tinderUser = new Object // Creating object using constructor - singleton

const fbUser = { // Creating object using object literal, Both are same just differenece is [literal - non singleton]

}

// Adding key value to object :
tinderUser.id = "123abc"
tinderUser.name = "SammyChat"
tinderUser.isLoggedIn = false

fbUser.fbName = "Anil Sahu"

console.log(tinderUser); // { id: '123abc', name: 'SammyChat', isLoggedIn: false }
console.log(fbUser); // { fbName: 'Anil Sahu' }

// Nested Objects

const regularUserInsta = {
    instaUsername: "fr0st_op",
    instaBio: {
        dob: "26-07-2000",
        status: "Life is unHappy",
        profileDetails: {
            posts: "02",
            followers: "3248",
            following: "425"
        }
    }
}

// Accessing Nested object

console.log(regularUserInsta);
/**
{
  instaUsername: 'fr0st_op',
  instaBio: {
    dob: '26-07-2000',
    status: 'Life is unHappy',
    profileDetails: { posts: '02', followers: '3248', following: '425' }
  }
}
*/

console.log(regularUserInsta.instaUsername); // fr0st_op

console.log(regularUserInsta.instaBio);
/** 
    {
    dob: '26-07-2000',
    status: 'Life is unHappy',
    profileDetails: { posts: '02', followers: '3248', following: '425' }
    }
*/
console.log(regularUserInsta.instaBio.profileDetails.following) // 425 ---> here there is a concept can come optional chaining which is mostly used in API call 
// when we dont'know there is any key "profiledetails or not" so we put "?" after the key name which increases protection suppose if "profileDetails" doesn't exist. therefore
// agar ye value hai to kariye varna "if else" lagane padenge "value hai to ye kro value nahi hai to ye etc etc" 


//***************************Object combining/Merging************************************
const obj1 = { 1: "abc", 2: "qwerty", 3: "xyz" }
const obj2 = { 4: "qwerty", 5: "xyz", 6: "abc" }
const obj3 = { name: "Anil", surname: "Sahu", status: "Single" }

// 1st Method - Object.assign(target, source); ---> object.assign(objName1, objName2, objName3) -- Not preferable, it returns an object

const returnedObject = Object.assign({}, obj1, obj2, obj3) // Here empty object is a target where all the source will be combined and store 
console.log(returnedObject);
/*
{
  '1': 'abc',
  '2': 'qwerty',
  '3': 'xyz',
  '4': 'qwerty',
  '5': 'xyz',
  '6': 'abc',
  name: 'Anil',
  surname: 'Sahu',
  status: 'Single'
}
*/

// 2nd Method - Spread Operator (...) 
const spreadReturnedObject = { ...obj1, ...obj2, ...obj3 }
console.log(spreadReturnedObject); // return same output

// 3rd Method --- MOST IMP When value come from database (.map loop or via indexing)

// Like Array ke andar bahot sare object hai hamare pas
const users = [
    {
        id: "21",
        email: "dummy1@oracle.com"
    },
    {
        id: "22",
        email: "dummy2@oracle.com"
    },
    {
        id: "23",
        email: "dummy3@oracle.com"
    },
    {
        id: "24",
        email: "dummy4@oracle.com"
    },
    {
        id: "25",
        email: "dummy5@oracle.com"
    }
]

// ***************************************************************************************

// How to access such cases: while looping or via index because array ke andar hai objects to har ek object koi specified index pe hoga
console.log(users[2].email);// dummy3@oracle.com [Index 2 mtlb array ke andar 3 object ka email]

// Fetching the keys / values of any object : IMPORTANT thing is it returns an array which means we can loop though it or use indexing to access
// Syntax : Object.keys(objname);
//          Object.values(objname);

// Trying this on first object we created : tinderUser
console.log(tinderUser); //{ id: '123abc', name: 'SammyChat', isLoggedIn: false } --> Original Object
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] --> keys returned as an Array
console.log(Object.values(tinderUser)); //[ '123abc', 'SammyChat', false ] --> values returned as an Array

// ***************************************************************************************
// object.entries() : bahot kam use ata hai
// It converts har ek jo key value pair hai object ke andar usko vo array me bana deta hai

console.log(Object.entries(tinderUser)); //each key value pair into array
/*
[
  [ 'id', '123abc' ],
  [ 'name', 'SammyChat' ],
  [ 'isLoggedIn', false ]
]
*/

// ***************************************************************************************
// Check if the object has specified value or not when the object data is really big and not possible to check manually
// objectName.hasOwnProperty('key Name')  //Determines whether an object has a property with the specified name. Returns Boolean - True/False
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true : value exist
console.log(tinderUser.hasOwnProperty("surname")); // false : valued doesn't exist
