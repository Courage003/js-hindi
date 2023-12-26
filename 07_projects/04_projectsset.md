# Guessing Game

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-6cwcij?file=2-BMICalculator%2Findex.html,4-GuessTheNumber%2Fchaiaurcode.js)


# Solution code

```javascript
//focus on requirements

let RandomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const guessField = document.querySelector('#guessField');

const guessslot = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

//we need to generate some paragraph

const p = document.createElement('p');

//strategies in such game designings

let prevGuess = [];
let numGuess = 1;
let playGame = true; //madatory for games

//check if user is available for the game
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(guessField.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validates whether the value is between 1 and 100
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number between 1 and 100`);
  } else if (guess > 100) {
    alert(`Please enter a number between 1 and 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${RandomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check whether the guess matches
  if (guess === RandomNumber) {
    displayMessage(`You guessed it right.`);
  } else if (guess < RandomNumber) {
    displayMessage(`Guess is too low`);
  } else if (guess > RandomNumber) {
    displayMessage(`Guess is too high`);
  }
}

function displayGuess(guess) {
  //whether guess is low high or what? and clears for further guesses
  guessField.value = ' ';
  guessslot.innerHTML += `${guess}  `;
  numGuess++;
  lastresult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //displays message defined for that particular guess
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  guessField.value = ' ';
  guessField.setAttribute('disabled', '');
  //
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame"> Start Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGamebutton = document.querySelector('#newgame');
  newGamebutton.addEventListener(function (e) {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    startOver.removeChild();
    guessslot.innerHTML = '';
    lastresult.innerHTML = `${11 - numGuess}`;
    guessField.removeAttribute('disabled');
    playGame = true;
  });
}




```