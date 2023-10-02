// for in loop (it can iterate over object and array)

// Advantage : It can iterate over object but not in MAP
// Disadvantage : When iterating over array log(key) prints the index of array elements instead of value which (for-of prints)

//----------------------------------------------------------------------------------------

// OBJECT 
const myObject = {
    saheb : "Rhishikesh",
    vinu : "Vinayak",
    affu : "afreen",
    vaibha : "vaibhav"
}


// Only printing keys
for(const key in myObject){
    console.log(key);
}
/*
saheb
vinu
affu
vaibha
*/

// Printing both key and value pair

for(const key in myObject){
    console.log(`${key} full Name is : ${myObject[key]}`);
}
/*
saheb full Name is : Rhishikesh
vinu full Name is : Vinayak
affu full Name is : afreen
vaibha full Name is : vaibhav
*/

//-------------------------------------------------------------------------------------------

//Array

const myArray = ["Mike", "Steve", "Donna", "Louis", "Pearson"]
for(const key in myArray){
    console.log(key); // prints the index of myArray
    console.log(myArray[key]); // prints the value of array with those index
} 
/* 
//--------------------
Output: console.log(key); // prints the index of myArray  
0
1
2
3
4
//--------------------
Output: console.log(myArray[key]); // prints the value of array with those index
 
Mike
Steve
Donna
Louis
Pearson
*/


//-------------------------------------------------------------------------
// In Strings (Only key represents the index of myString)

const myString = "Hello world"
for(const key in myString){
    console.log("String output:");
    console.log(myString[key]);
    
}

//------------------------------------Map Cannot be iterated using "FOR IN" loop-------------------------------------------------

//Map :- for in loop cannot iterate over MAP while printing it will give blank output

const myMap = new Map()
myMap.set(1, "Netflix")
myMap.set(2, "Hotstar")
myMap.set(3, "Amazon Prime")
myMap.set(4, "Ullu")
myMap.set(5, "Zee5")
myMap.set(6, "Sony Liv")


for(const key in myMap){ // No output in console
    console.log("Working?"); // As we cannot iterate over map this line never get print
    console.log(key); // Same as above
}