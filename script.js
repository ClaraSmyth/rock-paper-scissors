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

// Validate the user input
function validation() {
    let input = prompt('Rock Paper or Scissors');
    while (input == null) {
        input = prompt('Rock Paper or Scissors');
    }
    input = input.toLowerCase();
    while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
        input = prompt('Rock Paper or Scissors');
    }
    return input;
}

//  This actually plays the game
function playGame() {
    for (let i = 0; i < 99; i++) {
        let playerSelection = validation();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
            if (playRound(playerSelection, computerSelection) == 'Tie') {
                ties++;
            } else if (playRound(playerSelection, computerSelection) == 'Player Wins') {
                playerScore++;
            } else if (playRound(playerSelection, computerSelection) == 'Computer Wins') {
                computerScore++;
            }
        if (playerScore == 5) {
            console.log('Game Over: Player Wins')
            break;
        } else if (computerScore == 5) {
            console.log('Game Over: Computer Wins')
            break;
        }
        console.log(playRound(playerSelection, computerSelection))
        console.log(playerScore, computerScore, ties)
    }
}

playGame()

// Ignore everything below here its just test stuff xD



// This makes the validation loop if player presses cancel
// function validation() {
//     let input = prompt('Rock Paper or Scissors');
//     while (input == null) {
//         input = prompt('Rock Paper or Scissors');
//     }
// }