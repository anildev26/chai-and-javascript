
//Primitive datatyes : 

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const isLogged = true; // typeOf : Boolean

let usermail; // typeOf : Undefined

let abc = null // typeOf : Object

const id = Symbol("111"); //typeOf : Symbol
const num = Symbol("111");

console.log(id, num); // Output : Symbol(111) Symbol(111)
console.log("== operator : ", id == num) //False
console.log("=== Operator : ", id === num) //False


//Non primitive (Reference) : Arrays, Object, Function

//Array -->
let heros = ["marvel", "dc", "SuperMan", "Batman"] //typeOf : Object

//Function -->
let myFunction = function () { //typeOf : function

}

//Object (key: value pair)
const myObj = { //typeOf : object
    name: "Anil",
    age: 26,
    city: "Mumbai",
    sex: "Male"
}
console.log("abc: ", typeof abc); // null = object
