// Declare numeric versions of options as const array
const choices = ["Rock", "Scissors", "Paper"];

// Declare score variables for tracking wins
let playerScore = 0;
let computerScore = 0;

// Play game on loop until player quits
playRound();


// Play individual round
function playRound() {
    let playerNum = requestPlayerChoice();
    let computerNum = requestComputerChoice();

    console.log("Player choice: " + choices[playerNum]);
    console.log("Computer choice: " + choices[computerNum]);

    // Compare player and computer choice to select the winner
    if (playerNum == computerNum) {
        // It's a draw
    }
    else if (playerNum < computerNum) {
        if (playerNum == 0 && computerNum == 2) {
            // Player loses
            console.log("You lose! " + choices[computerNum] + " beats " + choices[playerNum]);
            computerScore++;
        }
        else {
            // Player wins
            console.log("You win! " + choices[playerNum] + " beats " + choices[computerNum]);
            playerScore++;
        }
    }
    else {
        if (playerNum == 2 && computerNum == 0) {
            // Player wins
            console.log("You win! " + choices[playerNum] + " beats " + choices[computerNum]);
            playerScore++;
        }
        else {
            // Player loses
            console.log("You lose! " + choices[computerNum] + " beats " + choices[playerNum]);
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

