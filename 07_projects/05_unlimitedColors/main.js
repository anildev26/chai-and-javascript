// First Thing is getting random color, and to get random color from hex which is from 0 -9 A-F
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#'; // color in hex start from # and then we append the 6 digit num using loop
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)]; // random gives any index 0-16 we pick value of that index from hex we defined and append in color = # + value till 6 time coz color in hex is of 6 digit long
    }
    return color;
  };
  let intervalId; //defining in global scope so that setInterval and clearInterval both can access and work on it
  const startChangingPageColor = function () {
    if (!intervalId) {
      // intervalId = false (null = falsy value) ---> If its false change it to true and run the condition
      intervalId = setInterval(changeBgColor, 1000); // passing the func reference and time and storing it on global variable
    }
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor(); // main fun to change bg color
    }
  };
  
  const stopChangingPageColor = function () {
    clearInterval(intervalId); // clearing the setInterval whenever "Stop" button is clicked
    intervalId = null; // Edge case for memory usage, after clearing interval rewrite the intervalId to null and later check, if its null == false then use setInterval on it
  };
  
  document
    .querySelector('#start')
    .addEventListener('click', startChangingPageColor); // Taking dom "Start" button reference
  document
    .querySelector('#stop')
    .addEventListener('click', stopChangingPageColor); // Taking dom "Stop" button reference
  