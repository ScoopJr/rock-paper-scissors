//This game will be played from the console for now

const selections = ["rock", "paper", "scissors"] // possible choices in an array
const roundWinnerList = []; // array to keep a list of round winners

// Function that will return the users selection of ‘Rock’, ‘Paper’ or ‘Scissors’.
function getPlayerChoice() { 
  let playerInput = prompt("Player's turn! Make your selection by typing: Rock, Paper, or Scissors"); //prompt player to type
  while (playerInput == null) { //to execute when user clicks cancel
    playerInput = prompt("This pop up cannot be cancelled. Please make your selection by typing: Rock, Paper, or Scissors");
  }
  playerInput = playerInput.toLowerCase(); //changes users input to lowercase
  let check = validatePlayerInput(playerInput); // calls function to validate user's input
  while (check == false) { //to execute when user leaves blank or misspells
    playerInput = prompt("Please check the spelling of: Rock, Paper, or Scissors");
    while (playerInput == null) { //to exit the above loop ------ TO FIX
      playerInput = prompt("Please make your selection by typing: Rock, Paper, or Scissors"); 
    }
    playerInput = playerInput.toLowerCase;
    check = validatePlayerInput(playerInput);
  }
  return playerInput;
  //console.log(playerInput); //TEST
} 


// Function that will validate that the user typed ‘Rock’, ‘Paper’ or ‘Scissors’. 
function validatePlayerInput(playerInput) {
  if (selections.includes(playerInput)) { // matching selections variable and playerInput
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
        return computerSelection = "rock"; 
    } else if (randomNumber == 1) {
        return computerSelection =  "paper";
    } else {
        return computerSelection =  "scissors";
    }*/
}


// Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playRound(roundNumber) {
  const playerSelection = getPlayerChoice(); //uses return from getPlayerChoice function
  //console.log(playerSelection); //TEST
  const computerSelection = getComputerChoice(); //uses return from getComputerChoice function
  //console.log(computerSelection); //TESTPlay Again
  const roundWinner = getRoundWinner(playerSelection, computerSelection); //uses return from getRoundWinner function
  //console.log(roundWinner); //TEST
  roundWinnerList.push(roundWinner); //add roundWinner to the roundWinnerList array
  countRound(playerSelection, computerSelection, roundWinner, roundNumber)
}


// Function that will decide the winner of a round
function getRoundWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "It's a DRAW this round!"; 
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") || 
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "rock")
    ) {
      return "Computer wins. You LOSE this round."; 
    } else {
      return "Player wins. You WIN this round.";
    }
  }

// Function that will keep a log of the round number
function countRound(playerChoice, computerChoice, roundWinner, roundNumber) {
  console.log("Round:", roundNumber);
  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  console.log("Round result:", roundWinner);
  console.log("----------------------------------------");
}


// Function that will keep a log of the winners of each round
function countWins() {
  //console.log(roundWinnerList); //Optimise with filter below
  let playerWinsRound = roundWinnerList.filter((winner) => winner == "Player wins. You WIN this round.").length;
  let computerWinsRound = roundWinnerList.filter((winner) => winner == "Computer wins. You LOSE this round.").length; 
  let drawRound = roundWinnerList.filter((winner) => winner == "It's a DRAW this round!").length; 
  console.log("Game result:");
  console.log("PLayers Wins:", playerWinsRound);
  console.log("Computer Wins:", computerWinsRound);
  console.log("Draws:", drawRound);
  console.log("========================================");
}


// Function that will play a game of ‘Rock’, ‘Paper’ or ‘Scissors’. A game is best of 5.
function game() {
  for (let i = 1; i < 6; i++) { // start at round 1, plays 5 rounds, add one round each loop
    playRound(i); //uses playRound function return. Pass (i) to log round.
  }
  document.querySelector("button").textContent = "Play Again"; // After the first game, update the button text
  countWins(); //uses countWins function return
}






















