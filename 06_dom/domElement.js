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

