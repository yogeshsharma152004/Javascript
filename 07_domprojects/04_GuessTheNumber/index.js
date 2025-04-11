
let randomNumber =(parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')//this is for the in the some place we insert the value 
let prevGuess = [] //it will array in that the whatever value the user will submit will store in this and show the all value to user that user will not repeat that value once again 
let numGuess = 1 // so here how many attemps user will compelte that will show it will start from the 1

let playGame = true //it is allow to play the game 

if(playGame){
   submit.addEventListener('click',function (e){
      e.preventDefault()
      const guess =parseInt(userInput.value)
      validateGuess(guess);
   })
}

//To check the value will we validate or not 

function validateGuess(guess){
    if(isNaN(guess)){
         alert('Please enter the valid number')
    }else if (guess < 1){
        alert('Please entet the  number more then 1 ')
    }
    else if (guess > 100){
        alert('Please enter the number less then 100 ')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over .Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

//To check that the given value is correct or low or high 

function checkGuess(guess){
    if(guess === randomNumber){
         displayMessage(`You guess it right `)
         endGame()
    }else if (guess < randomNumber){
        displayMessage(`Number is TOO low `)
    }else if (guess > randomNumber){
        displayMessage(`Number is TOO high `)
    }
}
//To clean the value from input and update the array and remaining guess
function displayGuess (guess){
   
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

//To will display the message  (all the dom part)

function displayMessage(message){
 lowOrHi.innerHTML = `<h2>${message}</h2>`
}

//For end the game 

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled' ,'')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}

//For start the new game 

function newGame (){
 const newGameButton = document.querySelector('#newGame')

 newGameButton.addEventListener('click' ,function(e){
    randomNumber =(parseInt(Math.random() * 100 + 1))
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute(`disabled`)
    startOver.removeChild(p)
    playGame = true
 })
}