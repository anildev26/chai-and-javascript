const marvel_heros = ["Thor", "Hulk", "IronMan"]

const onePiece = ["Luffy", "Sanji", "Zoro", "Usoop", "Chooper"]

// console.log(onePiece.push("Nami")); // 6 ---> New element added at 6th position
// console.log(onePiece); // [ 'Luffy', 'Sanji', 'Zoro', 'Usoop', 'Chooper', 'Nami' ]


//Merging Two Array: + Difference

//1) Push [Badway : Push the new array into existing array and save the result in same array in which pushed method is used] 
//2) Concat [Correct way: Add the elements of both the array into one and return a new array with added elements which need to be store in some variable]


// - Push()
// console.log(onePiece.push(marvel_heros)); // 7 -->bcoz 6 was the original lenght of the array then we added marvel array which whole was counted as 1 element = 7
// console.log(onePiece); 
/* Output -->  This is the wrong way to merge/concatinate two array
   [
    'Luffy',
    'Sanji',
    'Zoro',
    'Usoop',
    'Chooper',
    'Nami',
    [ 'Thor', 'Hulk', 'IronMan' ]
  ]
*/
// console.log(onePiece[6][2]); // IronMan --> Accessing elements of the above array 

//*************************************************************************************

// - Concat()

const allHeros = marvel_heros.concat(onePiece); // Added another array into marvel_heros and concatinated output is stored in allheros variable
// console.log(allHeros); 
/*
 [
    'Thor',    'Hulk',
    'IronMan', 'Luffy',
    'Sanji',   'Zoro',
    'Usoop',   'Chooper'
]
*/

//************************Spread Operator(...)********************************* BEST METHOD ***********
// Best Way using spread operator
const arrDiploma = ["Omkar", "Saheb", "Ali", "Vinu"]
const arrDegree = ["Vaibhav", "Durgaraj", "Kshitij", "Ankita"]

const mutualFriends = [...arrDiploma, ...arrDegree, ...allHeros, ...onePiece] // [Here we can concatinate any number of array elements]
console.log(mutualFriends);


//**********************flat()*********************************************

const num1 = [1, 2, 3, 4, 5, ["omkar", "pooja", "frost"], 6, 7, 8, ["bob", "raj", "tom"], 7, 8, 7, 2, [5, 6, 3], 77]; // When you have multiple array inside another array we can simply put them in one single array
const real_another_array = num1.flat(Infinity) //Over here inside flat we need to give them a depth  i.e till when it should check and combine but when unknown we can give "INFINITY"

console.log(real_another_array);
/*  Output:
[
  1,     2,       3,       4,
  5,     'omkar', 'pooja', 'frost',
  6,     7,       8,       'bob',
  'raj', 'tom',   7,       8,
  7,     2,       5,       6,
  3,     77
]
*/

//**********************Checking if Arugument is array or not using Array.isArray(Argument)*********************************************
//isArray()
console.log(Array.isArray("Anil")); //false

//To convert any element to array we use [Array.from("Argument")]
console.log(Array.from("Anil")); // [ 'A', 'n', 'i', 'l' ]

// or we can pass object but we need to tell method which is key and value pair and which need to be converted into array [key/value] || otherwise it will give you blank array

// [INTRESTING CASE FOR INTERVIEW]

console.log(Array.from({ name: "Joee" })); // [] :- As we didn't mentioned what to be converted key as arrays or value as array (Later videos discuss how to do that)

//****************************** When we need to convert set of argument/variable to array we use (Array.of(variable1, variable2, variable3)) *************************************

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));[100, 200, 300]