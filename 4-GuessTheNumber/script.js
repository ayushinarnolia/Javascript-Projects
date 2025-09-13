let num = parseInt(Math.random() * 10 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess))
        alert('Please enter a valid number')
    else if(guess<1)
        alert('Please enter a number greater than 1')
    else if(guess>100)
        alert('Please enter a number lesser than 100')
    else{
        prevGuess.push(guess)
        if(numGuesses===11)
        {    
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${num}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===num)
    {
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if(guess<num)
    {
        displayMessage(`Number is too low`)
    }
    else if(guess>num)
    {
        displayMessage(`Number is too big`)
    }
    
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    num = parseInt(Math.random() * 10 + 1)
    prevGuess = []
    numGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
})
}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = '<button id="newGame">Start new Game</button>';
startOver.appendChild(p)
playGame = false
newGame();
}

