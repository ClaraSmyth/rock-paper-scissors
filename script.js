const choices = ['rock', 'paper', 'scissors'];

function computerPLay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerPLay())