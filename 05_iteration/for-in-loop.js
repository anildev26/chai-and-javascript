// for in loop (it can iterate over object and array)

// Advantage : It can be iterated over object 
// Disadvantage : When iterating over array log(key) prints the index of array elements instead of value

// OBJECT 
const myObject = {
    saheb : "Rhishikesh",
    vinu : "Vinayak",
    affu : "afreen",
    vaibha : "vaibhav"
}


// Only printing keys
for(const key in myObject){
    console.log(key);
}
/*
saheb
vinu
affu
vaibha
*/

// Printing both key and value pair

for(const key in myObject){
    console.log(`${key} full Name is : ${myObject[key]}`);
}
/*
saheb full Name is : Rhishikesh
vinu full Name is : Vinayak
affu full Name is : afreen
vaibha full Name is : vaibhav
*/

//-------------------------------------------------------------------------

//Array

const myArray = []