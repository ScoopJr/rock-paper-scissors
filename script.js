//This game will be played from the console for now

const selections = ["rock", "paper", "scissors"] // possible choices in an array

// Function that will return the users selection of ‘Rock’, ‘Paper’ or ‘Scissors’.
function getPlayerChoice() { 
  let playerInput = prompt("Player/'s turn! Make your selection by typing: Rock, Paper, or Scissors"); //prompt player to type
  while (playerInput == null) { //to execute when user clicks cancel
    playerInput = prompt("This pop up cannot be cancelled. Please make your selection by typing: Rock, Paper, or Scissors");
  }
  playerInput = playerInput.toLowerCase(); //changes users input to lowercase
  let check = validatePlayerInput(playerInput);
  while (check == false) {
    prompt("Please check the spelling of: Rock, Paper, or Scissors");
  }
  //console.log(playerInput);
} 

// Function that will validate that the user typed ‘Rock’, ‘Paper’ or ‘Scissors’. 
function validatePlayerInput(playerInput) {
  if (selections.includes(playerInput)) {
    return true;
  } else {
    return false;
  }
}

// Function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerChoice() {
  return selections[Math.floor(Math.random()*selections.length)] //rounds number down, returns random number up to 2.99 and picks from array

  /* INITIAL THOUGHT 
   const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return computerSelectiplayRoundon = "rock"; 
    } else if (randomNumber == 1) {
        return computerSelection =  "paper";
    } else {
        return computerSelection =  "scissors";
    }*/
}

// Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playRound() {
  const playerSelection = getPlayerChoice(); //uses return from getPlayerChoice function
  const computerSelection = getComputerChoice(); //uses return from getComputerChoice function

}

// Function that will play a game of ‘Rock’, ‘Paper’ or ‘Scissors’ where the first to 5 wins. 
function game() {
  playRound(); //calls playRound function
}

game();

































/* TO REWORK
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
function playRound() {
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
    } else if (computerScore == 5) {// Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playRound() {
        gameResult = ".... who will win the game?....."
    } else {
        gameResult = "Oops. Something went wrong"; 
    }

    gameResultDisplay.innerHTML = gameResult;


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
*/