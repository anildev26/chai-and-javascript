// Array declaration & initialization

const arr1 = [1,2,3,true,"Anil",4,5];

const str1 = ["Superman", "batman", "Thor", "Hulk"]

const arr2 = new Array(2,4,6,3,"Sahu")

// console.log(arr1[0]) // can access array by index

// Adding element and deleting 

// -Push (Adding Elements in the end)
arr1.push("gg");
arr1.push("popThis") // 1,2,3,true,Anil,4,5,gg,popThis
console.log(`Element pushed at the last: ${arr1}`) //Element pushed: 1,2,3,true,Anil,4,5,gg,popThis

// -Pop (Deleting Last element)
console.log(`Before popping the element ORIGINAL Array : ${arr1}`); // 1,2,3,true,Anil,4,5,gg,popThis

arr1.pop();
console.log(`Last element deleted: ${arr1}`) // 1,2,3,true,Anil,4,5,gg

// Unshift (Add) & Shift (pop) (Adding and deleting the element from start of the array)

// - Unshift (Adding the new Element)
console.log(`Before Unshifting the element in ORIGINAL Array : ${arr1}`); // 1,2,3,true,Anil,4,5,gg

arr1.unshift("OMG")  // Added : OMG
arr1.unshift("Akshay Movie") // Added : Akshay Movie, OMG


console.log(`After using Unshift(Adding): ${arr1}`) // After using Unshift (Adding): Akshay Movie,OMG,1,2,3,true,Anil,4,5,gg

// - Shift (Deleting the first elemtent from array)
console.log(`Before Shifting the element in ORIGINAL Array : ${arr1}`); // Akshay Movie,OMG,1,2,3,true,Anil,4,5,gg

arr1.shift() // deleted : Akshay Movie

console.log(`After using Shift(Popping): ${arr1}`) // After using Shift(Popping): OMG,1,2,3,true,Anil,4,5,gg

//includes, indexOf

const myNewArray = [4,6,"jack",8,9,"Anil",3,1,2]
console.log("Includes('Anil') ? :- "+myNewArray.includes("Anil")); //true :- It is case sensitive for strings - Return Boolean (true/false) 

console.log("indeOf('jack') ? :- "+myNewArray.indexOf("jack")); //return java index --> jack is present at 2 index

//Converting datatype into String using Join()
console.log("Og array value: "+ myNewArray); // 4,6,jack,8,9,Anil,3,1,2
console.log(`After using join method(Array --> String): ${myNewArray.join()}`);  // 4,6,jack,8,9,Anil,3,1,2 (Output of the data is without [] square brackets) i.e String)
console.log(`Checking typeOf new method : ${typeof myNewArray.join()}`); // string

console.log("------------------------------------------------");

// Slice and Splice (VERY IMPORTANT DIFFERENCE BETWEEN)

// - Slice (Does not make changes in the OG array object), (start (inclusive), end(exclusive) : end is not included in sliced part)
const Arr = [4,5,69,7,4,1]
console.log("A", Arr); // A [ 4, 5, 69, 7, 4, 1 ]

const slicedArr = Arr.slice(1, 3) // from start point to end (exclusive) --> (1,2) - 3rd index is not included in result
console.log(`Sliced Array (1, 3) : ${slicedArr}`); //5,69 

// - Splice  Difference[ 1) After Splicing, it modifies the Og array object with leftover element in the array  , 2)start and end both paraments are inclusive  i.e end is also included when sliceing the array elements]
console.log("------------------------------------------------");
// We will use above obj only to consider out first different

const splicedArr = Arr.splice(1,3)
console.log(`Spliced Array (1, 3) : ${splicedArr}`); // Spliced Array (1, 3) : 5,69,7 [ #2 diff point proven, inclusive exclusive index both included]
console.log(Arr); // [ 4, 4, 1 ] [#1 Diff proved: While splicing from the reference Arr obj. It has also made modification in Original Arr after executing Splice method]

