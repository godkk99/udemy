const maxscore = document.querySelector('#maxscore');
const player1Button = document.querySelector('#player1Button');
const player2Button = document.querySelector('#player2Button');
const resetButton = document.querySelector('#resetButton');
const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');



player1Score.textContent = 0;
player2Score.textContent = 0;
player1Button.addEventListener('click', function () {
    player1Score.textContent++;


})

player2Button.addEventListener('click', function () {
    player2Score.textContent++;

})

resetButton.addEventListener('click', function () {
    player1Score.textContent = 0;
    player2Score.textContent = 0;

})