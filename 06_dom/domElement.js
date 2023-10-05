// DOM
// Syntax:
document.getElementById("idName") = innerHTML("Hello")


// How to fetch the text element from page
<h1 id = "title" class = "title">Dom Elements in JavaScript <span style = "display : none;">this is test span</span> </h1>

const title = document.getElementById("title")
title.style.backgroundColor = 'red';
title.style.padding = '15px';
title.style.borderRadius = '15px'

// Difference between selectors (difference in their showing content which is marked as hidden)

title.innerText // Dom Elements in JavaScript :- Sirf vo text aayega jo ki actually me visible hai HTML page me  ---> When you wanna do inner change in html page

title.textContent // Dom Elements in JavaScript this is test span :- Isme vo sara content milta hai jo agar kisi CSS property ya koi element ko hide kia ho code me
// Over here span class was hidden and still it desplayed the content written inside the code

title.innerHTML //  Dom Elements in JavaScript <span style = "display : none;">this is test span</span>
// Pura html ka value deraha hai agar uske andar apne koi html ka value derakha  hai to vo bhi vo fetch krega ---> Ye html tag ko bhi support krta hai rather than only content

//--------------------------------------------------------------------------------------------

// -----refer the dom.html files for below code------
// QUERY SELECTOR ATTRIBUTE --> It only select the first occurence of parameter/html tag you passed otherwise it can be className or idName

document.querySelector('h2') //fetching the data inside particular html tag, it will return the first h2 tag present in the code file ignoring all the others h2 below him
// <h2 id="t2" class="t2"> Trying query selector PART 2</h2>

document.querySelector('.t4class') //fetched data for that particular class and we denote classes by dot (.className)
// <h2 id="t4id" class="t4class"> Trying query selector PART 3</h2>

document.querySelector('#t4id') // fetches the info by using id Name and we we denote id by hash (#idName)
// <h2 id="t4id" class="t4class"> Trying query selector PART 4</h2>


// Checking by input field

document.querySelector('input') // It will return the first input tag in html file but we can also specify what kind of input we are looking for ex:
// <input type="password" name="" id="">  || It was selected because it was the first input tag in html file

document.querySelector('input[type="password"]') 
// <input type="password" name="" id=""> || We specifed here for what type of input tag we are looking for and we got the result

//OR

document.querySelector('input[type="color"]') 
// <input type="color" name="" id=""> || As we specifying the type for which we are looking for is color we got color input type output

// ----------------------------------------------------------------------------------------------

// How to select multiple elements inside any nested html elements and also how we can manipulate it

// For ex : ul > li tag here

const myul = document.querySelector('ul')
// undefined
const myfirstLi = myul.querySelector("li") // It will give the first li attribute inside ul out of other 2 because, thats what query selector do when the paramenter is not specific and its html tag
// undefined
myfirstLi.innerText
// 'Anil'
// Now time to change the value (text)
myfirstLi.innerText = "Omkar Naik";
// 'Omkar Naik' ---> In html page inside first <li> (list element) replacing 'Anil'

//Changing css
myfirstLi.style.backgroundColor = "purple"
// 'Omkar Naik' --> With the purple bg color
myfirstLi.style.padding = "15px"
// '15px' --> It means 15px is applied to Omkar naik <li> tag

// ----------------------------------------------------------------------------------------------

// QUERY SELECTOR ALL : The main difference is it returns the NODE LIST data which cant be manipulated directly as it is kind off array. therefore we can manipulate my indexes
//                      or Nodelist provides for each in his prototype so we can manipulate data by implementing for each in it

const myAllLi = document.querySelectorAll('li')
// Nodelist(3) [li,li,li] --> What we can do here now change the color of the 2st li which mean in indexes[1] 
myAllLi[1].style.backgroundColor = "red"    // Color red applied

// Another method of doing this is using foreach

myAllLi.forEach( (eachLi) => {
    eachLi.style.color = "green"
})
// Successfully worked all the text in List are changed to green

// ----------------------------------------------------------------------------------------------

//getElementByClassName :- It returns HTML collection which is different from NodeList, we don't have any foreach loop prototype or map..So how we gonna get the data?
//                         here we will convert our HTML collection to Array datatype and then we have map,foreach to loop in it
//                         Syntax: Array.from(variableNameofHTML Collection)

const myCollectionData = document.getElementsByClassName('list-item'); //undefined

myCollectionData // HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// Now converting into an array
const myConvertedCollectionArray = Array.from(myCollectionData) // [li.list-item, li.list-item, li.list-item, li.list-item] --> Array
// Using foreach to loop over array elements and change the value in html
myConvertedCollectionArray.forEach( (eachLiItem) => {
    eachLiItem.style.color = "red"
})
// Successfully worked all the li tag text got converted to red in html page