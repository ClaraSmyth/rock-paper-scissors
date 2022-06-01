const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('#scoreboard')
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// This selects a random choice from the Array
function computerPlay() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

// This plays a round of the game and decides who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ties++;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return playerScore++;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return computerScore++;
    }
 }

// Updates the scoreboard
function updateScoreboard() {
    scoreboard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Ties: ${ties}`;
}


// Resets the game and scoreboard
function resetGame() {
    if (playerScore == 5) {
        console.log('Game Over: Player Wins');
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        return;
    } else if (computerScore == 5) {
        console.log('Game Over: Computer Wins');
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        return;
    }
}

// Button that triggers the game
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});

// Plays the game
function playGame(playerButtonChoice) {
    let playerSelection = playerButtonChoice;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreboard();
    resetGame();
    console.log(playerSelection, computerSelection)
    console.log(playerScore, computerScore, ties);
}

updateScoreboard()