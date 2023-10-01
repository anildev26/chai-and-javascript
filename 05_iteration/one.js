// for loop

//Printing Tables 1 - 10
// for (let i = 1; i <=10; i++) {
//     console.log(`Table of ${i} :`);
//     for(let j=1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("-------------------");
// }

// //usage of break and continue

//Break: once a condition is true, break will directly come out of loop and not executing any other line after break statement (That loop or whole nested loop is terminated)

// Continue: once condition become true and continue statement comes anything before continue will be executed but after reaching continue that perticular iteration will be skipped for that loop

// break example:

for(let i = 1; i<=10; i++){
    if(i == 5){
        console.log("5 Spotted");
        break
    }
    console.log(`Value of i is : ${i}`);
}

// Break Output
/*
Value of i is : 1
Value of i is : 2
Value of i is : 3
Value of i is : 4
5 Spotted  // After Break statement loop directly came to line 26 which is the end of the loop
*/


//continue Example :
for(let i = 1; i<=10; i++){
    if(i == 5){
        console.log("5 Spotted");
        continue
    }
    console.log(`Value of i is : ${i}`);
}

// continue Example : 
/*
Value of i is : 1
Value of i is : 2
Value of i is : 3
Value of i is : 4
5 Spotted // When 5 is spotted in statement becomes true log printed before "continue" statement but after continue keyword it skips that particular loop iteration 
and also skips the next log statement and goes to new value of i in loop  = 6
Value of i is : 6
Value of i is : 7
Value of i is : 8
Value of i is : 9
Value of i is : 10
*/