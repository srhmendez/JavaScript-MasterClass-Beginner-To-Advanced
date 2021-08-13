'use strict';


const secretNumber = (Math.trunc(Math.random() * 20) + 1);
let currentScore = Number(document.querySelector('.score').textContent);
let guessInput = document.getElementsByClassName('.guess');

console.log(secretNumber);
let checkGuess = function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));

    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 You are Correct!';
    } else if (guess < secretNumber){
        if (currentScore = 0) {
            document.querySelector('.message').textContent = '📉 Too low! Guess Again.';
            currentScore --
            document.querySelector('.score').textContent = currentScore;
            document.querySelector('.guess').value = '';
        } else {
            document.querySelector('.message').textContent = '🥶 You lost the game.'
        }
    } else if (guess > secretNumber){
        if (currentScore = 0) {
            document.querySelector('.message').textContent = ' 📈 Too high! Guess Again.'
            currentScore -20
            document.querySelector('.score').textContent = currentScore;
            document.querySelector('.guess').value = '';
        } else {
            document.querySelector('.message').textContent = '🥶 You lost the game.'
        }
    }
}


let refreshPage = function() {
    location.reload();
}



document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', refreshPage);
