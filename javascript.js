function getComputerChoice() {
    let num = Math.random()
    if (num <= 0.33){
        return "rock"
    } else  if (num >= 0.66){
        return "paper"
    }else{
        return "scissors"
    }}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "rock"){
        return "Its a draw"
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        winnerOfRound = "computer"
        return "Computer wins: paper beats rock"
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        winnerOfRound = "player"
        return "You win: rock beats scissors"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        winnerOfRound = "player"
        return "You win: paper beats rock"
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        return "Its a draw"
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        winnerOfRound = "computer"
        return "Computer wins: scissors beats paper"
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        winnerOfRound = "computer"
        return"Computer wins: rock beats scissors"
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        winnerOfRound = "player"
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        return "Its a draw" 
    }
}
    



function getRounds() {
    let input = prompt("How many rounds do you wish to play?")
    return input
}


const computerSelection = getComputerChoice()
const rounds = getRounds()
let roundsPlayed = 0;
let winnerOfRound;
let winnerOfGame;
let playerPoints = 0;
let computerPoints = 0;


const buttons = document.querySelectorAll("button")
let result = document.querySelector("#result")
let message = document.createElement("p")
let counter = document.createElement("p")
let points = document.createElement("p")
result.append(message)
result.append(counter)
result.append(points)



function countRounds(){
    roundsPlayed += 1
    return "rounds " + roundsPlayed + "/" + rounds
}
function countPoints(){
    if(winnerOfRound == "player"){
        playerPoints += 1
    } else if (winnerOfRound == "computer"){
        computerPoints += 1
    } else {
        return ""
    }
    return "Your points: "+ playerPoints+ "\nComputers points: "+computerPoints
}

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        playerSelection = button.className
        if (roundsPlayed < rounds){
            message.innerText = playRound(playerSelection, computerSelection)
            points.innerText = countPoints()
            counter.innerText = countRounds()
        }
    })
});



if (rounds < 1){
    getRounds()
}