/*
In the playRound function, remove the function parameters playerSelection and computerSelection. 
Instead, use the global variables playerSelection and computerSelection that are defined outside of the function.

In the game function, remove the for loop that plays five rounds. 
Instead, call the playRound function inside a while loop that checks the scores of both players. 
The loop should continue until either the player or the computer reaches a score of 5.
*/


const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const roundResultDisplay = document.getElementById('round-result');
const possibleSelections = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score'); 
const computerScoreDisplay = document.getElementById('computer-score'); 
const gameResultDisplay = document.getElementById('game-result'); 
const roundNumberDisplay = document.getElementById('round-number'); 
let playerSelection;
let computerSelection;
let roundResult;
let playerScore = 0; // ADDED
let computerScore = 0; // ADDED
let roundNumber = 1; // ADDED
let gameResult; // ADDED

possibleSelections.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    //console.log(playerSelection); // TEST
    //return playerSelection; //ADDED
    playerSelectionDisplay.innerHTML = playerSelection;
    getComputerSelection();
    playRound();
    game();
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

    //console.log(computerSelection); // TEST
    computerSelectionDisplay.innerHTML = computerSelection;
    return computerSelection;
  }

// Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playRound(/*playerSelection, computerSelection*/) {
    //playerSelection = gameResultDisplay();
    computerSelection = getComputerSelection();

    if (playerSelection == computerSelection) {
        roundResult = "It's a DRAW!!! Play this round again."; 
    } else if 
        ((playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        roundResult =  "Computer wins. You LOSE this round."; 
        computerScore += 1; 
        roundNumber += 1;
    } else if 
        ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        roundResult = "Player wins. You WIN this round.";
        playerScore += 1; 
        roundNumber += 1;
        }
    //console.log(roundResult); // TEST
    roundResultDisplay.innerHTML = roundResult;
    playerScoreDisplay.innerHTML = playerScore; // Update the player score display
    computerScoreDisplay.innerHTML = computerScore; // Update the computer score display
    roundNumberDisplay.innerHTML = roundNumber; // Update the computer score display
    return roundResult;
    return roundNumber;
}

/*
// TO FIX!-------------------------------------------------------------------------------
// Function that will play five rounds of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function game() {
  
    for (let i = 0; i < 5; i++) {
      playRound(playerSelection, computerSelection); // Use the global playerSelection and computerSelection variables
        if (roundResult == "Player wins. You WIN this round") {
        playerScore += 1; 
        } else if (roundResult == "Computer wins. You LOSE this round") {
        computerScore += 1; 
        }
    }
  
    if (playerScore == 5) {
      gameResult == "PLAYER WINS THE GAME!"; 
    } else if (computerScore == 5) {
      gameResult = "COMPUTER WINS THE GAME.... better luck next time."; 
    } else if (playerScore < 5 && computerScore < 5) {
        gameResult = ".... who will win the game?....."
    } else {
        gameResult = "Oops. Something went wrong"; 
    }

    gameResultDisplay.innerHTML = gameResult;

}
*/

function game() {
  
    while (playerScore < 5 && computerScore < 5) {
      playRound(playerSelection, computerSelection); 
        if (roundResult == "Player wins. You WIN this round") {
        playerScore += 1; 
        } else if (roundResult == "Computer wins. You LOSE this round") {
        computerScore += 1; 
        }
    }
  
    if (playerScore == 5) {
      gameResult = "PLAYER WINS THE GAME!"; 
    } else if (computerScore == 5) {
      gameResult = "COMPUTER WINS THE GAME.... better luck next time."; 
    } else {
        gameResult = "Oops. Something went wrong"; 
    }
  
    gameResultDisplay.innerHTML = gameResult;
  
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


