
const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const resultDisplay = document.getElementById('round-result');
const possibleSelections = document.querySelectorAll('button');
let playerSelection;
let computerSelection;
let roundResult;

possibleSelections.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    //console.log(playerSelection); // TEST
    playerSelectionDisplay.innerHTML = playerSelection;
    getComputerSelection();
    playRound();
}))

// Function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber) //TEST

    if (randomNumber == 0) {
        computerSelection = "rock";
    } else if (randomNumber == 1) {
        computerSelection =  "paper";
    } else if (randomNumber == 2) {
        computerSelection =  "scissors";
    } else {
        computerSelection = "Oops. Something went wrong";
    }

    console.log(computerSelection); // TEST
    computerSelectionDisplay.innerHTML = computerSelection;
  }

// Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playRound() {

    if (playerSelection == computerSelection) {
        roundResult = "It's a DRAW this round";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult =  "Computer wins. You LOSE this round";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "Player wins. You WIN this round";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "Player wins. You WIN this round";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "Computer wins. You LOSE this round";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "Computer wins. You LOSE this round";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "Player wins. You WIN this round";
    } else {
        roundResult = "Oops. Something went wrong";
    }

    //console.log(roundResult); // TEST
    resultDisplay.innerHTML = roundResult;
}




/*Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation). */


/* 6. Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end. 

- Remember loops? This is a great opportunity to use one to play those five rounds:
for (let i = 0; i < 5; i++) {
  // your code here!
} 

- At this point you should be using console.log() to display the results of each round and the winner at the end.
- Use prompt() to get input from the user. Read the docs here if you need to.
- Feel free to re-work your previous functions if you need to. 
Specifically, you might want to change the return value to something more useful.
- Feel free to create more “helper” functions if you think it would be useful.*/    
