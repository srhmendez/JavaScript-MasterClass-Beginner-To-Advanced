'use strict';

let getRandomNum = function() {
    let randomNum = (Math.trunc(Math.random() * 20) + 1);
    return randomNum;
}
let getCurrentScore = () => { return Number(document.querySelector('.score').textContent);};

let secretNumber = getRandomNum();
let currentScore = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
let guessInput = document.getElementsByClassName('.guess');
console.log(`This is the Secret Number: ${secretNumber}`)

let checkGuess = function() {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';

    //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 You are Correct!';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        currentScore = getCurrentScore();
        if (Number(document.querySelector('.score').textContent) > highScore) {
            document.querySelector('.highscore').textContent = currentScore;
        }
        secretNumber = getRandomNum();
        console.log(`The new Secret Number is: ${secretNumber}`);
    //When guess is too low
    } else if (guess < secretNumber){
        if (currentScore != 0) {
            document.querySelector('.message').textContent = '📉 Too low! Guess Again.';
            currentScore --
            document.querySelector('.score').textContent = currentScore;
            document.querySelector('.guess').value = '';
        } else {
            document.querySelector('.message').textContent = '🥶 You lost the game.'
        }

    //When guess is too high
    } else if (guess > secretNumber){
        if (currentScore != 0) {
            document.querySelector('.message').textContent = ' 📈 Too high! Guess Again.'
            currentScore --
            document.querySelector('.score').textContent = currentScore;
            document.querySelector('.guess').value = '';
        } else {
            document.querySelector('.message').textContent = '🥶 You lost the game.'
        }
    }
}


let resetGame = function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;

}

let playAgain = function() {
    if (document.querySelector('.guess') == false) {
        console.log('You haven\'t played the game');
    } else {
        resetGame();
    
    }
}


document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', playAgain);
