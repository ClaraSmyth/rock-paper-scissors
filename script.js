const choiceArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// This selects a random choice from the Array
function computerPlay() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

// This plays a round of the game and decides who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Player Wins';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Computer Wins';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Player Wins';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Computer Wins';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Player Wins';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Computer Wins';
    }
 }


const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('#scoreboard')


//  Plays the game when a button is clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});

function updateScoreboard() {
    scoreboard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

function playGame(playerButtonChoice) {
    let playerSelection = playerButtonChoice;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) == 'Tie') {
        ties++;
    } else if (playRound(playerSelection, computerSelection) == 'Player Wins') {
        playerScore++;
    } else if (playRound(playerSelection, computerSelection) == 'Computer Wins') {
        computerScore++;
    }
    updateScoreboard();
    if (playerScore == 5) {
        console.log('Game Over: Player Wins')
    } else if (computerScore == 5) {
        console.log('Game Over: Computer Wins')
    }
    console.log(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore, computerScore, ties);
}

updateScoreboard()