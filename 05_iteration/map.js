// Map() : It also returns the value but the conditon can be any operation performed just not only conditional statement like filter()


// map on numbers 

const myNums = [4,6,95,6,4,7,8,5,2,2,4,74,12]

const numData = myNums.map( (num) => num*100 )
console.log(numData); 
/*
[
    400, 600, 9500,  600,
    400, 700,  800,  500,
    200, 200,  400, 7400,
   1200
]
*/

//--------------------------------------------------------------------------

// Chaining "map().map().filter()" // filter().map().filter()

const numChaining = myNums.map( (num) => num*3 ).map( (num)=> num - 5 ).filter( (num) => num<10 )
console.log(numChaining);
/*
[
   7, 13, 280, 13, 7,  16,
  19, 10,   1,  1, 7, 217,
  31
]
*/