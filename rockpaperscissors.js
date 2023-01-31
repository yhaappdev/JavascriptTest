let playerScore = 0;
let computerScore = 0;
//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
console.log(game());

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayerChoice(){
    const playerChoice = prompt('Please input your choice. [Rock, Paper, Scissors]').toLowerCase();
    return playerChoice;
}

function playRound(){
    let log = '';
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    //add more cases later
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) 
    {
        let score;
        console.log('Computer Selection: ' + computerSelection);
        alert('you win!');
        return log = 'Win';
    }
    else if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock'))
    {
        console.log('Computer Selection: ' + computerSelection);
        alert('you lose!');
        return log = 'Lose';
    }
    else{
        console.log('Computer Selection: ' + computerSelection);
        alert('draw !');
        return log = 'Draw';
    }
}

function game(){

    for(let i = 0; i < 5; i++){
        
        let log = playRound();
        if( log === 'Win'){
            playerScore ++;
        }
        else if(log === 'Lose'){
            computerScore ++;
        }
        else if(playerScore == 5 || computerScore == 5){
            break;
        }
        console.log(i);
    }
    console.log('Player Score: ' +playerScore);
    console.log('Computer Score: ' + computerScore);
}