// For of loop (cannot itereate over object with this loop) 
// Advantage : It directly prints the value of array, string in log(key), but for-in loop prints index for array, string etc

// Iterating over an Array
const myArray = [7, 2, 3, 4]
for (const value of myArray) {
    console.log(`Value of array is:  ${value}`);
}
/*
Value of array is:  7
Value of array is:  2
Value of array is:  3
Value of array is:  4
*/

// Iterating over an String

const myString = "Hello World"
for (const ch of myString) {
    if (ch == " ") {
        console.log("Blank space spotted and removed");
        continue // ignore the blank space in string and jump to next iteration
    }
    console.log(`Value of each character from String is ${ch}`);
}
/*
Value of each character from String is H
Value of each character from String is e
Value of each character from String is l
Value of each character from String is l
Value of each character from String is o
Blank space spotted and removed
Value of each character from String is W
Value of each character from String is o
Value of each character from String is r
Value of each character from String is l
Value of each character from String is d
*/

//---------------------------------------------------------------------------

// Iterating over an Map

const myMap = new Map()

// (.set) method to add data inside map
myMap.set(1, "Anil")
myMap.set(2, "Vaibhav")
myMap.set(4, "Saheb")
myMap.set(6, "Vinayak")
myMap.set(8, "Sanika")
myMap.set(10, "Afreen")

//Simply printing of map where each key value pair is printed separetly
for (const mValue of myMap) {
    console.log(mValue); // this will print each key value pair in the form of an individual array [ 1, 'Anil' ] [ 2, 'Vaibhav' ]
}

/*
Output:
[ 1, 'Anil' ]
[ 2, 'Vaibhav' ]
[ 4, 'Saheb' ]
[ 6, 'Vinayak' ]
[ 8, 'Sanika' ]
[ 10, 'Afreen' ]
*/

// Map iterating over key or value

for (const [key, value] of myMap) {
    console.log(key + ":- " + value);
}

/*
1:- Anil
2:- Vaibhav
4:- Saheb
6:- Vinayak
8:- Sanika
10:- Afreen
*/