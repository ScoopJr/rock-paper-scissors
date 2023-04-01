/////////FIX COMPUTER NEEDS TO ENLARGE TOO/////////////

// top of the page   DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
const selections = ["rock", "paper", "scissors"] 
let roundWinnerList = []; // array to keep a list of round winners

//  startGame()   DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// Function that will play a game of ‘Rock’, ‘Paper’ or ‘Scissors’. A game is best of 5.
function game() {
  let images = document.querySelectorAll('img') // grab all images
  images.forEach((image) =>
  image.addEventListener(('click'), () => { // if image is clicked, calls function
    if(image.id) { // check if the image has an id
      playRound(image.id); // plays round if image id is found as computer image does not have an id
    }
  }))
}

// computerSelect()    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// Function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerChoice() {
  // update DOM with computer selection
  return selections[Math.floor(Math.random()*selections.length)] //rounds number down, returns random number up to 2.99 and picks from array
  document.querySelector(`.${selections}`).classList.add("active");
  setTimeout(() => {
    document.querySelector(`.${selections}`).classList.remove("active");
  }, 900);
}

//  playRound()    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playRound(playerSelection) {
  let wins = countWins();
  if(wins >= 5) {
    return
  }
  const computerSelection = getComputerChoice(); //uses return from getComputerChoice function
  const roundWinner = getRoundWinner(playerSelection, computerSelection); //uses return from getRoundWinner function
  roundWinnerList.push(roundWinner); //add roundWinner to the roundWinnerList array
  //countRound(playerSelection, computerSelection, roundWinner, roundNumber)
  totalWins();
  displayRoundResult(playerSelection, computerSelection, roundWinner);
  wins = countWins() 
  if(wins == 5) {
    // display game result
    // update button to visible
    // update text to display game winner
    displayGameWinner();
  }
}

//  displayRound()    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
function displayRoundResult(playerSelection, computerSelection, roundWinner) {
  document.querySelector('.playerSelection').textContent = `You selected: ${playerSelection.charAt(0).toUpperCase() 
    + playerSelection.slice(1)}`;
  document.querySelector('.computerSelection').textContent = `Computer selected: ${computerSelection.charAt(0).toUpperCase() 
    + computerSelection.slice(1)}`;
  //document.querySelector('.draws').textContent = `Draws: ${drawRound}`
  document.querySelector('.winner').textContent = `Round winner is: ${roundWinner}`;
}

// checkWinner()    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// Function that will decide the winner of a round
function getRoundWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "It's a DRAW this round!"; 
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") || 
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
    ) {
      return "Player wins. You WIN this round."; 
    } else {
      return"Computer wins. You LOSE this round."; 
    }
  }


// Function that will keep a log of the round number
//function countRound(playerChoice, computerChoice, roundWinner, roundNumber) {
//}


// tallyWins()    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// Function to keep a running total of the number of wins
function totalWins() {
  let playerWinsRound = roundWinnerList.filter((winner) => winner == "Player wins. You WIN this round.").length;
  let computerWinsRound = roundWinnerList.filter((winner) => winner == "Computer wins. You LOSE this round.").length; 
  let drawRound = roundWinnerList.filter((winner) => winner == "It's a DRAW this round!").length; 
  document.querySelector(".playerScore").textContent = `Score: ${playerWinsRound}`;
  document.querySelector(".computerScore").textContent = `Score: ${computerWinsRound}`;
  document.querySelector(".draws").textContent = `Draws: ${drawRound}`;
}

// checkWins()    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// Function that will keep a log of the winners of each round
function countWins() {
  let playerWinsRound = roundWinnerList.filter((winner) => winner == "Player wins. You WIN this round.").length;
  let computerWinsRound = roundWinnerList.filter((winner) => winner == "Computer wins. You LOSE this round.").length; 
  return Math.max(playerWinsRound, computerWinsRound)
}


// Function to check the number of wins
//function checkWins() {
  //let playerWinsRound = roundWinnerList.filter((winner) => winner == "Player wins. You WIN this round.").length;
  //let computerWinsRound = roundWinnerList.filter((winner) => winner == "Computer wins. You LOSE this round.").length; 
  //let drawRound = roundWinnerList.filter((winner) => winner == "It's a DRAW this round!").length; 
//}

// displayEnd()  DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// Function that will display the result of the game
function displayGameWinner() {
  let playerWins = roundWinnerList.filter((winner) => winner == "Player wins. You WIN this round.").length;
  if(playerWins == 5) {
    document.querySelector('.winner').textContent = 'You won the game! You beat the Computer 5 times.'
  } else {
    document.querySelector('.winner').textContent = 'Unlucky... the Computer beat you 5 times and won the game.'
  }
  document.querySelector('.restart').style.display = 'flex';
}

// resetGame()   DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
function restartGame() {
  roundWinnerList = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".draws").textContent = "Draws: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerSelection").textContent = "";
  document.querySelector(".computerSelection").textContent = "";
  document.querySelector(".restart").style.display = "none";
}

game();





















