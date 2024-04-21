let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']; 
    let index = Math.floor(Math.random() * 3);

    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    let result;
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' || 
        playerSelection == 'scissors' && computerSelection == 'paper') {
            result = `You won! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'scissors' || 
    playerSelection == 'scissors' && computerSelection == 'rock'){
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    else if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        result = `Wrong input: ${playerSelection}. Type paper, rock or scissors`;
    }
    else {
        result = 'Draw!';
    }

    return result;
}


const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('.result-text');

for(const button of buttons) {
    button.addEventListener('click', function() {
        let roundResult = playRound(button.textContent.trim(), getComputerChoice());
        resultText.textContent = roundResult;
    });
}

