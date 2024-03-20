let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice randomly
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    // Determine the winner
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        computerScore++;
    }

    // Display the current score
    document.querySelector("#score").textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    // Check if any player reaches 5 points
    if (playerScore === 5) {
        alert("Congratulations! You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, you lose the game. Better luck next time!");
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#score").textContent = "Player: 0 | Computer: 0";
}

// Event listeners for buttons
document.querySelector("#rock-button").addEventListener("click", function() {
    playRound("Rock");
});

document.querySelector("#paper-button").addEventListener("click", function() {
    playRound("Paper");
});

document.querySelector("#scissors-button").addEventListener("click", function() {
    playRound("Scissors");
});
