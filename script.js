const buttons = document.querySelectorAll('button');
const playerScoreboard = document.querySelector('#player-scoreboard');
const computerScoreboard = document.querySelector('#computer-scoreboard');
const roundOutcome = document.querySelector('#round-outcome');
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modal-text');
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
        ties++;
        roundOutcome.textContent = 'Looks like a tie!';
        // roundOutcome.animate({ transform: ['scale(1)', 'scale(1.1)', 'scale(1)']}, {duration: 300});
        roundOutcome.animate({ transform: ['scale(1.1)', 'scale(1)']}, {duration: 300, easing: 'ease-in'});
        return;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        roundOutcome.textContent = 'You won, Nice!';
        roundOutcome.animate({ transform: ['scale(1.1)', 'scale(1)']}, {duration: 300, easing: 'ease-in'});
        return;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        computerScore++;
        roundOutcome.textContent = 'You lost, Unlucky!';
        roundOutcome.animate({ transform: ['scale(1.1)', 'scale(1)']}, {duration: 300, easing: 'ease-in'});
        return;
    }
 }

// Updates the scoreboard
function updateScoreboard() {
    // scoreboard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Ties: ${ties}`;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
}

// Resets the game and scoreboard
function gameOver() {
    if (playerScore == 5) {
        modalText.textContent = 'You Won!'
        gameOverPopUp()
        roundOutcome.textContent = 'Best of 5! Goodluck!';
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        return;
    } else if (computerScore == 5) {
        modalText.textContent = 'You Lost!'
        gameOverPopUp()
        roundOutcome.textContent = 'Best of 5! Goodluck!';
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        return;
    }
}

// Endgame modal popup
function gameOverPopUp() {
    modal.classList.add('active')
    modal.addEventListener('click', () => {
        updateScoreboard();
        modal.classList.remove('active');
        return;
    });
}