const choices = ['rock', 'paper', 'scissors'];
let playerSelection = 'rock';
let computerSelection = computerPLay();

function computerPLay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
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


console.log(playRound())