const buttons = document.querySelectorAll('.button'); // We will get nodelist from this which can be traversed using foreach loop

const body = document.querySelector('body');

buttons.forEach((eachButton) => {
  eachButton.addEventListener('click', function (myEvent) {
    console.log(myEvent);
    console.log(myEvent.target); // See if box target is getting hit or not and you are getting id with in or not
    if (myEvent.target.id === 'grey') {
      // use the id to get id color from dom and check using if loop
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'white') {
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'blue') {
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'yellow') {
      body.style.backgroundColor = myEvent.target.id;
    }
  });
});
