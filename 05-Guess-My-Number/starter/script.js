'use strict';

let getRandomNum = function () {
  let randomNum = Math.trunc(Math.random() * 20) + 1;
  return randomNum;
};
let getCurrentScore = () => {
  return Number(score.textContent);
};

let score = document.querySelector('.score');
let secretNumber = getRandomNum();
let currentScore = Number(score.textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
let displayHighScore = document.querySelector('.highscore');
let guess = document.querySelector('.guess');
let background = document.querySelector('body');
let message = document.querySelector('.message');
let secretNumberDisplay = document.querySelector('.number');

//Console log for testing easily
console.log(`This is the Secret Number: ${secretNumber}`);

let checkGuess = function () {
  const guessValue = Number(guess.value);

  //When there is no input
  if (!guessValue) {
    message.textContent = '🚫 No Number!';

    //when player wins
  } else if (guessValue === secretNumber) {
    message.textContent = '🎉 You are Correct!';

    background.style.backgroundColor = '#60b347';
    secretNumberDisplay.style.width = '30rem';
    secretNumberDisplay.textContent = secretNumber;
    currentScore = getCurrentScore();
    if (Number(score.textContent) > highScore) {
      console.log(currentScore);
      console.log(highScore);
      highScore = currentScore;
      displayHighScore.textContent = currentScore;
    }
    secretNumber = getRandomNum();
    console.log(`The new Secret Number is: ${secretNumber}`);

    //When guess is too low
  } else if (guessValue < secretNumber) {
    if (currentScore != 0) {
      message.textContent = '📉 Too low! Guess Again.';
      currentScore--;
      score.textContent = currentScore;
      guess.value = '';
    } else {
      message.textContent = '🥶 You lost the game.';
    }

    //When guess is too high
  } else if (guessValue > secretNumber) {
    if (currentScore != 0) {
      message.textContent = ' 📈 Too high! Guess Again.';
      currentScore--;
      score.textContent = currentScore;
      guess.value = '';
    } else {
      message.textContent = '🥶 🤧 No more Attempts Left! You lose.';
    }
  }
};

// Function to see if the user has input a value (Otherwise the high score will be 20 without playing when you click the Again! button)
let playAgain = function () {
  if (guess == false) {
    // Do nothing ( make user play to receive High score of 20)
  } else {
    resetGame();
  }
};

// Function that resets the game without resetting the page, allowing the high score to be updated and carry over from round to round.
let resetGame = function () {
  background.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  guess.value = '';
  secretNumberDisplay.textContent = '?';
  score.textContent = 20;
};

//Buttons
document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', playAgain);
