const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const roundResultDisplay = document.getElementById('round-result');
const possibleSelections = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score'); // ADDED
const computerScoreDisplay = document.getElementById('computer-score'); // ADDED
const gameResultDisplay = document.getElementById('game-result'); // ADDED
let playerSelection;
let computerSelection;
let roundResult;
let playerScore; // ADDED
let computerScore; // ADDED
let gameResult; // ADDED

possibleSelections.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    //console.log(playerSelection); // TEST
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
  }

  /*
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
    roundResultDisplay.innerHTML = roundResult;
}
*/
// UPDATED FUNCTION ---COMPARE TO PREVIOUS
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
    roundResultDisplay.innerHTML = roundResult;

    return roundResult;
}

// TO FIX!-------------------------------------------------------------------------------
// Function that will play five rounds of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function game() {
    playerScore = 0;
    computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      playRound(); // Use the global playerSelection and computerSelection variables
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
    }

    gameResultDisplay.innerHTML = gameResult;
    playerScoreDisplay.innerHTML = playerScore; // Update the player score display
    computerScoreDisplay.innerHTML = computerScore; // Update the computer score display

    return gameResult; 
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


