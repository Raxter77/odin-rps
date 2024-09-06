// Numeric versions of choices as const array
const choices = ["Rock", "Scissors", "Paper"];

// Number of Rounds
let numRounds = 5;

// Score variables for tracking wins
let playerScore = 0;
let computerScore = 0;

numRounds = Number(prompt("How many rounds would you like to play?", numRounds));
playGame(numRounds);

function playGame(numRounds) {
    let playerSelection;
    let computerSelection;

    for (i=0; i < numRounds; i++) {
        playerSelection = requestPlayerChoice();
        computerSelection = requestComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    console.log("Game Over! Final score: ");
    console.log("  Player: " + playerScore);
    console.log("  Computer: " + computerScore);
    console.log("  Draws: " + (numRounds - playerScore - computerScore));
}

// Play individual round
function playRound(playerChoice, computerChoice) {
    console.log("  Player choice: " + choices[playerChoice]);
    console.log("  Computer choice: " + choices[computerChoice]);

    // Compare player and computer choice to select the winner
    if (playerChoice == computerChoice) {
        // It's a draw
        console.log("Draw!");
    }
    else if (playerChoice < computerChoice) {
        if (playerChoice == 0 && computerChoice == 2) {
            // Player loses
            console.log("You lose! " + choices[computerChoice] + " beats " + choices[playerChoice]);
            computerScore++;
        }
        else {
            // Player wins
            console.log("You win! " + choices[playerChoice] + " beats " + choices[computerChoice]);
            playerScore++;
        }
    }
    else {
        if (playerChoice == 2 && computerChoice == 0) {
            // Player wins
            console.log("You win! " + choices[playerChoice] + " beats " + choices[computerChoice]);
            playerScore++;
        }
        else {
            // Player loses
            console.log("You lose! " + choices[computerChoice] + " beats " + choices[playerChoice]);
            computerScore++;
        }
    }
    
    // Update the score, display it to the player, exit
}

// Prompt player for choice
function requestPlayerChoice() {
    let response = "";

    response = prompt("Choose rock, paper, or scissors");

    if (response.toLowerCase() == "rock") {
        valid = true;
        return 0;
    }
    else if (response.toLowerCase() == "scissors") {
        valid = true;
        return 1;
    }
    else if (response.toLowerCase() == "paper") {
        valid = true;
        return 2;
    }
    else {
        return requestPlayerChoice();
    }
}

// Select computer choice
function requestComputerChoice() {
    return Math.floor(Math.random() * 3);
}

