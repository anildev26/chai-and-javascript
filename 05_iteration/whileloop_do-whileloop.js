// While loop
let num = 1
while (num <= 10) {
    console.log(`Value of num is : ${num}`);
    num++
}

// while in array

let myArray = ["superman", "James", "Ben10", "Slugterra"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value of arr at index - ${arr} : ${myArray[arr]}`);
    arr++
}

//------------------------------------------------------------------------------------------

// do-while loop
// Do statement is always executed at least once

do {
    console.log(myArray[arr]);
    arr++
} while (arr < myArray.length)