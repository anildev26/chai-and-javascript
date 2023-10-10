let randomNumber = parseInt(Math.random() * 100 + 1); // Generating a random number
console.log(randomNumber);

const userInput = document.getElementById('guessField');
const submit = document.querySelector('#submit');
const previousGuessArray = document.querySelector('.previousGuesses');
const remainingGuesses = document.querySelector('.CountOfGuesses');
const lowOrHighGuess = document.querySelector('.lowOrHigh');
const resultDiv = document.querySelector('.resultDiv');

let prevGuess = [];
let countOfGuess = 1;

const p = document.createElement('p'); // Creating a dom element from js, This will we used later as a start button in which we will add event listener for click event. We can also take button for start or div span etc.

let playgame = true;
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const userGuess = userInput.value;
    // console.log(userGuess);
    validateEnteredGuess(userGuess);
  });
}

function validateEnteredGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a Number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a Number less than 100');
  } else {
    prevGuess.push(guess);
    if (countOfGuess === 11) {
      clearValues(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      remainingGuesses.innerHTML = 0;
      endGame();
    } else {
      clearValues(guess);
      checkGuessRightOrWrong(guess);
    }
  }
}

function checkGuessRightOrWrong(guess) {
  if (guess == randomNumber) {
    displayMessage(`Bingo !! You guessed it correct`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`You are Toooo Low`);
  } else if (guess > randomNumber) {
    displayMessage(`You are Toooo High`);
  }
}

function clearValues(guess) {
  userInput.value = '';
  if (countOfGuess < 11) {
    previousGuessArray.innerHTML += `${guess}  `;
  }
  countOfGuess++;
  remainingGuesses.innerHTML = `${11 - countOfGuess}`;
}

function displayMessage(message) {
  lowOrHighGuess.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // Coming from ValidateEnterGuess
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`; // this button id will be used to check if mouse click on button for new game or not in startNewGame function
  resultDiv.appendChild(p);
  playgame = false;
  startNewGame();
}

function startNewGame() {
  const newStartButton = document.querySelector('#newGame');
  newStartButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random * 100 + 1);
    prevGuess = [];
    countOfGuess = 1;
    previousGuessArray.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - countOfGuess}`;
    userInput.removeAttribute('disabled');
    resultDiv.removeChild(p);
    playgame = true;
  });
}
