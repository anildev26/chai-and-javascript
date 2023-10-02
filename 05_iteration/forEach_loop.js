// for each loop  (Mostly used loop for api data : [{},{},{}])

const myArr = ["js", "python", "laravel", "mySql", "cpp", "ruby"]

/*
Syntax:

For each not only returns the value of passed array but also returns the index of that element and original arr in callback function when passed 
in "parameter" (value, index, arr) ={}

yourArrayName.forEach( (parameter) => {
    //function body
})
*/
//------------------------------------------------------------------------

//Iterating over an Array

//Simple call back function in foreach loop

myArr.forEach(function (item) {
    // console.log(item);
})

/*
js
python
laravel
mySql
cpp
ruby
*/

// Arrow function callback in foreach loop

myArr.forEach((value) => {
    // console.log(value); // Same output as above
})

// Returning value of array element, index + og array from for each loop

myArr.forEach((item, index, myOgArray) => {
    console.log(item, index, myOgArray);
})

/*
js 0 [ 'js', 'python', 'laravel', 'mySql', 'cpp', 'ruby' ]
python 1 [ 'js', 'python', 'laravel', 'mySql', 'cpp', 'ruby' ]
laravel 2 [ 'js', 'python', 'laravel', 'mySql', 'cpp', 'ruby' ]
mySql 3 [ 'js', 'python', 'laravel', 'mySql', 'cpp', 'ruby' ]
cpp 4 [ 'js', 'python', 'laravel', 'mySql', 'cpp', 'ruby' ]
ruby 5 [ 'js', 'python', 'laravel', 'mySql', 'cpp', 'ruby' ]
*/

//--------------------------------Important Usage of for-each loop-----------------------------------------------------

// [{},{},{}] // Nested object inside Array

const myNestedObject = [
    {
        ottPlatformName: "Hotstar",
        ogPrice: 1599,
        discountedPrice: 1299
    },
    {
        ottPlatformName: "Sony Liv",
        ogPrice: 799,
        discountedPrice: 499
    },
    {
        ottPlatformName: "Zee5",
        ogPrice: 999,
        discountedPrice: 799
    },
    {
        ottPlatformName: "Netflix",
        ogPrice: 1799,
        discountedPrice: 999
    },
]

myNestedObject.forEach((item) => {
    // console.log(item);  
    // console.log(item.ottPlatformName);
    console.log(`OTT Platform : ${item.ottPlatformName}, Original price for 1 year Subscription : ${item.ogPrice}, Discounted price from seller for 1 year subscription : ${item.discountedPrice}`);
})

/*
//--------------------------------------------------------------------

Output for : console.log(item);  // Prints each object seperately 

{ ottPlatformName: 'Hotstar', ogPrice: 1599, discountedPrice: 1299 }
{ ottPlatformName: 'Sony Liv', ogPrice: 799, discountedPrice: 499 }
{ ottPlatformName: 'Zee5', ogPrice: 999, discountedPrice: 799 }
{ ottPlatformName: 'Netflix', ogPrice: 1799, discountedPrice: 999 }

//--------------------------------------------------------------------

Output for : console.log(item.ottPlatformName);  // Prints each object ottPlatformName property only 

Hotstar
Sony Liv
Zee5
Netflix

//--------------------------------------------------------------------

Output for : console.log(`OTT Platform : ${item.ottPlatformName}, Original price for 1 year Subscription : ${item.ogPrice}, Discounted price from seller for 1 year subscription : ${item.discountedPrice}`);

// Using String interpolation printing all the property of each object inside an Array

OTT Platform : Hotstar, Original price for 1 year Subscription : 1599, Discounted price from seller for 1 year subscription : 1299
OTT Platform : Sony Liv, Original price for 1 year Subscription : 799, Discounted price from seller for 1 year subscription : 499
OTT Platform : Zee5, Original price for 1 year Subscription : 999, Discounted price from seller for 1 year subscription : 799
OTT Platform : Netflix, Original price for 1 year Subscription : 1799, Discounted price from seller for 1 year subscription : 999
*/ 