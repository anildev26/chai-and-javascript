const num = 100
//console.log(num); //100

const n1 = new Number(1234)
//console.log(n1); //100

//Number object has some prototype function in it:

const numTry = 100.19313


//LocaleString (Country)
console.log("Locale : " + numTry.toLocaleString("en-IN")) //10,00,000

//convert to string and then we can also use string prototypes in it
console.log("String : " + numTry.toString()) // 1000000

//toFixed
console.log("Fixed : " + numTry.toFixed(2)) //100.19313--->100.19 (It doesn't roundOff the decimal digit and just show the number of digits you want after decimal)

//toPrecision Note: Do read mdn javascript documentation for this one
console.log("Precision : " + numTry.toPrecision(4)) //100.19313--->100.2 (It "roundOff" the decimal digit and just show the number of digits you passed inside function)


//***********************maths*********************************

console.log(Math); //Object
console.log("abs: " + Math.abs(-9)) // 9-->Convert negative to positive
console.log("Round: " + Math.round(-9.7)) // -9.7 = -10 -->RoundOff the value
console.log("Ceil: " + Math.ceil(9.1)) // Convert/Roundoff to highest number (ceil word means terrace/highest), even if num extended by .1 it will show the next number 2.1 = 3 (highest num) 
console.log("Floor: " + Math.floor(9.9)) // Roundoff to Lowest number (floor word means nech/lowest), even if num extended by .1 it will show the lowest number number 2.9 = 2 (lowest num) 

//*********math.random***************

let min = 50;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // from 50 to 100 random numbers both inclusive which means both 50-100 are included



