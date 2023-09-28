//************date/time************

const myDate = new Date(); //Gives your system date/time

console.log(myDate); // 2023-09-22T21:36:28.216Z

console.log("Date printing in 'toString' method: " + myDate.toString()); // Fri Sep 22 2023 21:36:28 GMT+0000 (Coordinated Universal Time)

console.log("Date printing in 'toDateString' method: " + myDate.toDateString()); // Fri Sep 22 2023


console.log("Date printing in 'toISOString' method: " + myDate.toISOString()); // 2023-09-22T21:36:28.216Z

console.log("Date printing in 'toJSON' method: " + myDate.toJSON()); // 2023-09-22T21:36:28.216Z

console.log("Date printing in 'toLocaleString' method: " + myDate.toLocaleString()); // 9/22/2023, 9:36:28 PM

console.log("Date printing in 'toUTCString' method: " + myDate.toUTCString()); // Fri, 22 Sep 2023 21:36:28 GMT


let newDate = new Date("2000-07-26")
console.log(newDate.toDateString()); // Wed Jul 26 2000

// console.log(newDate.getUTCDay());  

console.log(`My Birthday is on ${newDate.toLocaleDateString()}`); // My Birthday is on 7/26/2000 

// We can edit our date format with the help of toLocal
const dateLocale = newDate.toLocaleString('default', {

    weekday: "long" // wednesday

})
console.log(dateLocale);