// Javascript Execution Context :- Jo bhi file banai hai usko javascript run kaise karegi execute kaise karegi


/**
 * Isko 2 phase me run krti hai.
 * Sabse pehli chij jo banti hai javascript me jab ham koi file dete vo hai "GLOBAL EXECUTION CONTEXT", jaha pe bhi ye banta hai isko refer krdete hai "this" keyword se
 * Browser me code run kia hai , so "this" show krta hai window object but in nodeJs enviroment ka thoda alag hota hai 
 * 
 * - 3 type ke execution context hote:
 * a) Global execution context
 * b) Functional execution context
 * c) Eval execution context (mongoose) :- (ye ek tarike se Property hi hota hai global object ka)
 * 
 * JavaScript ka code execute kaise hota - 
 * {} - ye raha js ka code
 * 1) first phase - Memory Creation Phase / Creation Phase  ---> Sirf memory me jagah elocate hoti hai variables functions ke liye, no operation is performed
 * 2) second phase - Execution phase
 *  
 * For Explanation Code file is given below 
 */

let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let result = num1 + num2
    return result
}
let result1 = addNum(val1, val2)
let result2 = addNum(5, 6)

/**
 * Phase 1 : Global execution / Global Enviroment ---> Sabse pehle jo bhi code run krna ho vo global execution se run hota hai isko sabse pehle allocate kia jata hai "this" keyword ke andar
 * Phase 2 : Memory Phase ---> sare variables ko collect krke unsabko bas rakha jata hai apne pas me
 * For above code Memory phase will be:
 * -------------------------------------------------------------------------------------
 * val1 -> undefined
 * val2 -> undefined
 * add -> function defination : Mtlb neche dia gya code
 [ 
    {
        let result = num1 + num2
        return result
    } 
]
 * result1 -> undefined
 * result2 -> undefined
 * -------------------------------------------------------------------------------------
 * Phase 3 : Execution Phase
 * val1 <- 10
 * val2 <- 5
 * // result --> me ab function call horaha hai to 
 * ######################################################################################
 * // Ab function ka kuch execution bacha nahi hai qki uska pura defination to hamne Memory phase me dal dia to iska kuch execute nhi hoga
 * // Ab next line me result ke andar ky jana tha addNum but addNum to function hai tb ye addNum ky karta hai apna ek alag execution context banata hai
 * Yaha pe ye khudka ek new executional context bana leta hai and iske andar ky ky hoga
 * addNum ---> |------------------|
 *             |                  | <---New Variable enviroment
 *             |                  |
 *             |                  |
 *             |                  |               +  
 *             |                  |
 *             |                  |
 *             |                  | <---Execution Thread
 *             |------------------|   
 * Note: Jitni bar ye function create hota hai utni bar hamare liye ye function new executional context (ye naya box) create hota hai
 * Qki ab vapis se new execution context create hua hai to isme bhi vo 2 kam start se hoga 1) Memory Creation phase 2) Execution Phase -->ye exeute hoga addNum ke liye
 * 
 * addNum ---> Memory Phase
 * val1 -> undefined
 * val2 -> undefined
 * total -> undefined
 * 
 * addNum ---> Execution Context
 * num1 <- 10
 * num2 <- 5
 * total <- 15
 * Ab ye total hai vo return back bhi horaha hai, to actually me return back "GLOBAL EXECUTIONAL CONTEXT"
 * So function execution ends 
 * 
 * NOTE: After executing the whole function ye "DELETE" hota hai  
 * ######################################################################################
 * 
 * Ab ham hamare parent execution phase me aagye and upar result me ab total = 15 store hojayega 
 * 
 * result1 = 15
 * 
 * // result2 ---> ab vapis function execute hua hai and uska bhi same process hoga vo khudka executional context banayega...fir end me uska result bhi store hoga result2 me
 * 
 * result2 = 11
 * 
 */ 


// Call Stack

// Ye ek LIFO form me work krta jo last me ayega vo stack se pehle exit krega