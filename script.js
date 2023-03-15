/*const playerSelectionDisplay = document.getElementById('player-selection')
const computerSelectionDisplay = document.getElementById('computer-selection')
const roundResult = document.getElementById('round-result')
const possibleSelections = document.querySelectorAll('button')
let playerSelection

possibleSelections.forEach(possibleSelection => possibleSelection.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = playerSelection
}))*/

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

























/* BLOCK WAS WORKING ON AT START--------------REMOVE IF NEEDED--------------
// Function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == "0") {
        return "rock";
    }
    else if (randomNumber == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
  }

  //console.log(getComputerChoice()); // TEST
  //console.log(typeof getComputerChoice); // TEST
BLOCK WAS WORKING ON AT START--------------REMOVE IF NEEDED--------------*/



/* Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters 
- the playerSelection and computerSelection 
- and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation). */




/* BLOCK WAS WORKING ON AT START--------------REMOVE IF NEEDED--------------
function playRound(playerSelection, computerSelection) {

// playerSelection == "rock" && computerSelection == "rock"        return "It's a DRAW this round";
// playerSelection == "rock" && computerSelection == "paper"        return "Computer wins. You LOSE this round";
// playerSelection == "rock" && computerSelection == "scissors"        return "Player wins. You WIN this round";

// playerSelection == "paper" && computerSelection == "rock"        return "Player wins. You WIN this round";
// playerSelection == "paper" && computerSelection == "paper"        return "It's a DRAW this round";
// playerSelection == "paper" && computerSelection == "scissors"        return "Computer wins. You LOSE this round";

// playerSelection == "scissors" && computerSelection == "rock"        return string("Computer wins. You LOSE this round";
// playerSelection == "scissors" && computerSelection == "paper"        return string("Player wins. You WIN this round";
// playerSelection == "scissors" && computerSelection == "scissors"        return string"It's a DRAW this round";

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a DRAW this round";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins. You LOSE this round";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins. You WIN this round";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins. You WIN this round";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a DRAW this round";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins. You LOSE this round";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins. You LOSE this round";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins. You WIN this round";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a DRAW this round";
    }
    else {
        return "Oops. Something went wrong";
    }

console.log(playRound(playerSelection, computerSelection)); //TEST
}

const playerSelection = "rock"; //TEST
const computerSelection = getComputerChoice();

console.log(playerSelection); //TEST
//console.log(getComputerChoice()); // TEST -- getComputerChoice and playerSelection seems to be different....
console.log(computerSelection); // TEST
console.log(playRound(playerSelection, computerSelection)); //TEST
//console.log(typeof playRound); // TEST






// Function that will play a single round of ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playGame(rounds) {
const results = [];
for (let i = 0; i < rounds; i++) {
results.push(playRound());

}
return results;
}

console.log(playGame(5)); //TEST

//console.game(playRound(playerSelection, computerSelection)); 

BLOCK WAS WORKING ON AT START--------------REMOVE IF NEEDED--------------*/



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
