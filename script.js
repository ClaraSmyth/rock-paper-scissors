const buttons = document.querySelectorAll('button');
const playerScoreboard = document.querySelector('#player-scoreboard')
const computerScoreboard = document.querySelector('#computer-scoreboard')
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// This selects a random choice from the Array
function computerPlay() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

// Triggers the game 
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
    gameOver();
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
    // scoreboard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Ties: ${ties}`;
    playerScoreboard.textContent = `Player: ${playerScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
}

// Resets the game and scoreboard
function gameOver() {
    if (playerScore == 5) {
        alert('Game Over: Player Wins');
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        updateScoreboard()
        return;
    } else if (computerScore == 5) {
        alert('Game Over: Computer Wins');
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        updateScoreboard()
        return;
    }
}

// updateScoreboard()