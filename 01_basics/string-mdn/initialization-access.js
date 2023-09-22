// Mdn url :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// ***********************Strings***********************

// -Two ways to create the Strings [Litereal, String Object]
//-->Literal
let name = "anil"
let surname = 'sahu'
 
//-->String Object
let studName = new String('Anil Sahu') // It will store value in object format key:value pair
/* Output: 
0: "A"
1: "N"
2: "I"
3: "L"
4: " "
5: "S"
*/

// We can print the String using + concatination or String interpolation ( `) backtick
console.log(name + surname); //anilsahu
console.log(name + " " + surname); // anil sahu 

console.log(`Hello My Name is ${name} and my surname is ${surname}`); //printing using backtick

//OR
console.log(studName); // while printing object  [String: 'Anil Sahu'] it wont print like "Anil Sahu"

// *************************Character access*********************************

// There are two ways to access an individual character in a string. 
console.log(name.length);// 4

//The first is the charAt() method:
console.log(name.charAt(3));//output: l --> [0:a, 1:n, 2:i, 3:l]

//The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:
console.log(name[2]);//output: 2 --> [0:a, 1:n, 2:i, 3:l]