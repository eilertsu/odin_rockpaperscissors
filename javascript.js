let playerSelection;
let computerSelection;


function getComputerChoice() {
    let num = Math.random()
    if (num <= 0.33){
        return "Rock"
    } else  if (num >= 0.66){
        return "Paper"
    }else{
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection){
        case{}:
    }
}

function getPlayerChoice(){
    prompt("Type either 'rock', 'paper' or 'scissors'")
}