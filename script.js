'use strict';
let num = Math.floor(Math.random()*20)+1;
let score = 100;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
console.log(num);
//when no input is received
if(!guess){
   displayMessage('No Number!');
}
//when number is found
else if(guess===num){
    document.querySelector('.number').textContent = num;
    displayMessage('Well Done!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
else if(guess!==num){
    if(score>1){
        displayMessage(guess>num?'Too High':'Too Low');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
          displayMessage('You Lost the game!');
            document.querySelector('.score').textContent = 0;
        }
}
})
document.querySelector('.again').addEventListener('click',function(){
    score = 100;
    num = Math.floor(Math.random()*100)+1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#000000';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highScore;
})