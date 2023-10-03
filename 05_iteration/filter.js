// for each issue:
const myArray = ["Mike", "Steve", "Donna", "Louis", "Pearson"]
myArray.forEach((value) => console.log(value)); // Prints all the values of array but can we store it in variable for futher execution : NO
// For each loop does not return any value so even if we try to store in variable and print the varible it will be blank
const arrayValues = myArray.forEach((eachItem) => { })
console.log(arrayValues); // undefined :- coz foreach doesn't return any value



// To overcome this issue what we can do is use : filter() // return if conditon is TRUE or False

// Filter : in call back funtion it requires condition and based on that condition it will return the value

// IMPLICT - EXPLICIT Return 
// NOTE : 1) Whenever we used { } while defining function then we are also telling function scope so we need to return the function value through "return statement" inside curly braces
//        2) When executing the condition on same line without curly braces { } we don't need to use return, it will automatically return the resultant value based on the condition to that variable            


// Filter on Strings --- Executing condition on single line without defining scope {} and return keyword
const arrValFromFilter = myArray.filter((eachItem) => eachItem.length > 4) // Note : 2)
console.log(arrValFromFilter); // [ 'Steve', 'Donna', 'Louis', 'Pearson' ] ---> lenght of each word in array > 4 (Mike value is ignored as lenght is 4)

// Filter on Numbers --- Executing the condition inside scope {} and condition inside scope needs to be returned using return satement

const myNums = [7, 6, 9, 8, 4, 12, 2, 0, 3, 7, 9, 6, 5, 4, 1, 3, 44]
const greterNum = myNums.filter((num) => {
    return num > 10
})
 
console.log(greterNum); // [ 12, 44 ]

// Filter on book array

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// with return statement
let userBook = books.filter( (bk) => {return bk.edition > 2010 && bk.genre == 'Science'} ) // {} Scope opened and we can also return in same line
// console.log(userBook);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

// without return statement coz we are not defining scope here "{}" and overriting old userBook query :- to overrite it should be declared as let not const
userBook = books.filter( (bk) => bk.publish<1985)
console.log(userBook);
/* Returned 2 books that have been published before 1985
[
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  {
    title: 'Book Nine',
    genre: 'Non-Fiction',
    publish: 1981,
    edition: 1989
  }
]
*/