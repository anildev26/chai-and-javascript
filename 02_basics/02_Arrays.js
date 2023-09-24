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

//************************Spread Operator(...)*********************************
// Best Way using spread operator
const arrDiploma = ["Omkar", "Saheb", "Ali", "Vinu"]
const arrDegree = ["Vaibhav", "Durgaraj", "Kshitij", "Ankita"]

const mutualFriends = [...arrDiploma, ...arrDegree, ...allHeros, ...onePiece] // [Here we can concatinate any number of array elementss]
console.log(mutualFriends);


//**********************flat()*********************************************

const num1 = [1,2,3,4,5]