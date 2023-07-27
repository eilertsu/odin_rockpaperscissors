function game(){
    for(i = 0; i < rounds; i++){
        function getComputerChoice() {
            let num = Math.random()
            if (num <= 0.33){
                return "rock"
            } else  if (num >= 0.66){
                return "paper"
            }else{
                return "scissors"
            }
        }
        
        function getPlayerChoice(){
            input = prompt("Type either 'rock', 'paper' or 'scissors'").toLowerCase()
            return input
        }
        
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
        
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection))
    }
}


function getRounds() {
    let input = prompt("How many rounds do you wish to play?")
    return input
}

const rounds = getRounds()

console.log(game())