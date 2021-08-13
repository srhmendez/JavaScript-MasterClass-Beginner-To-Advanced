'use strict';


const secretNumber = (Math.trunc(Math.random() * 20) + 1);

console.log(secretNumber);
let checkGuess = function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 You are Correct!';
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = '📉 Too low! Guess Again.';
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = ' 📈 Too high! Guess Again.'
    } else if (guess )
}

let refreshPage = function() {
    location.reload();
}

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', refreshPage);
