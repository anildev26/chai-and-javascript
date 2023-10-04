// DOM
// Syntax:
document.getElementById("idName") = innerHTML("Hello")


// How to fetch the text element from page
<h1 id = "title" class = "title">Dom Elements in JavaScript <span style = "display : none;">this is test span</span> </h1>

const title = document.getElementById("title")
title.style.backgroundColor = 'red';
title.style.padding = '15px';


// Difference between selectors (difference in their showing content which is marked as hidden)

title.textContent // Dom Elements in JavaScript this is test span

title.innerText // Dom Elements in JavaScript

title.innerHTML //  Dom Elements in JavaScript <span style = "display : none;">this is test span</span>

