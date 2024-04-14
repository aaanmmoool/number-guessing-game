let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('button');
const userInput = document.querySelector('.number');
const guessSlot = document.querySelector('.previous');
const remaining = document.querySelector('.attempts');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
submit.addEventListener('click',function(e){
 e.preventDefault()
 const guess = parseInt(userInput.value);
 validateGuess(guess);
})
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1 || guess>100){
        alert('please enter number in the range 1 to 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess);
            displayMessage(`Game Over random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
if(guess===randomNumber){
    displayMessage(`Sahi BTAYA BHAI`);
    endGame()
}
else if(guess<randomNumber){
   displayMessage(`Number is too low`) 
}
else if(guess>randomNumber){
    displayMessage(`Number is too High`) 
 }
}

function displayGuess(guess){
userInput.value = '';
guessSlot.innerHTML += `${guess}`;
numGuess++;
remaining.innerHTML = `${11-numGuess}`


}

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){

}

function newGame(){

}




