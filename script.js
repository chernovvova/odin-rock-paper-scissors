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

function playGame() {
    while(playerScore + computerScore < 5) {
        let playerSelection = prompt('Your choice?');
        let roundResult = playRound(playerSelection, getComputerChoice());
        console.log(playerScore + " : " + computerScore);
        alert(roundResult);
    }

    if(playerScore > computerScore) {
        alert(`You won! Score: ${playerScore} : ${computerScore}`);
    }
    else {
        alert(`You lose! Score: ${playerScore} : ${computerScore}`);
    }
}

playGame();