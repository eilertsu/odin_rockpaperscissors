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
        return "Computer wins: paper beats rock"
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win: rock beats scissors"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win: paper beats rock"
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        return "Its a draw"
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "Computer wins: scissors beats paper"
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return"Computer wins: rock beats scissors"
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win: scissors beats paper"
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


const buttons = document.querySelectorAll("button")
let result = document.querySelector("#result")
let message = document.createElement("p")
let counter = document.createElement("p")
result.append(message)
result.append(counter)




function count(){
    roundsPlayed += 1
    return "rounds " + roundsPlayed + "/" + rounds
}

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        playerSelection = button.className
        if (roundsPlayed < rounds){
            console.log("SUCCESS")
            message.innerText = playRound(computerSelection, playerSelection)
            counter.innerText = count()
        } else{
            console.log("ERROR")
        }
    })
});



if (rounds < 1){
    getRounds()
}
