function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
    switch(randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitivity
    playerSelection = playerSelection.toLowerCase();

    // Define the winning conditions
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "It's a Tie!";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

        const result = playRound(playerChoice, computerChoice);

        if (result === 1) {
            playerScore++;
        } else if (result === -1) {
            computerScore++;
        }

        console.log(`Round ${i + 1}: You chose ${playerChoice}, Computer chose ${computerChoice}.`);
    }

    console.log(`Game Over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("It's a tie! No winner.");
    }
}

playGame();

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));