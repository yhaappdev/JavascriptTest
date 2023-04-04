let playerScore = 0;
let computerScore = 0;
let winner = '';
//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
//content.textContent = game();
const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const restartBtn = document.getElementById('restartBtn');
const endGameContainer = document.getElementById('end-game-container');
const endGameMsg = document.getElementById('end-game-msg');
const overlay = document.getElementById('overlay');
const playerScoreInfo = document.getElementById('playerScore');
const computerScoreInfo = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');

rockBtn.addEventListener('click', () => clickHandler('rock'));
paperBtn.addEventListener('click', () => clickHandler('paper'));
scissorBtn.addEventListener('click', () => clickHandler('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndGame)

function clickHandler(playerSelection){
    if(isGameOver()){
        openEndGame();
        return;
    }
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if(isGameOver()){
        openEndGame();
        setFinalMessage();
    }
}

function isGameOver(){
    return playerScore === 5 || computerScore === 5;
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

/*
function getPlayerChoice(){
    
    const playerChoice = prompt('Please input your choice. [Rock, Paper, Scissors]').toLowerCase();
    
    return playerChoice;
}
*/

function playRound(playerSelection, computerSelection){
    //add more cases later
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) 
    {
        playerScore++;
        winner = 'player';
    }
    else if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock'))
    {
        computerScore++;
        winner = 'computer';
    }
    else{
        winner = 'draw';
    }
    updateScoreMessage(winner, playerSelection, computerSelection);
}

function updateChoices(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            playerSign.textContent = '✊';
            break;
        case 'paper':
            playerSign.textContent = '✋';
            break;
        case 'scissors':
            playerSign.textContent = '✌';
            break;
    }
    switch(computerSelection){
        case 'rock':
            computerSign.textContent = '✊';
            break;
        case 'paper':
            computerSign.textContent = '✋';
            break;
        case 'scissors':
            computerSign.textContent = '✌';
            break;
    }
}

function updateScore(){
    if(winner === 'draw'){
        scoreInfo.textContent = "Its a draw !";
    }
    if(winner === 'player'){
        scoreInfo.textContent = "You won !";
    }
    if(winner === 'computer'){
        scoreInfo.textContent = "You Lost !";
    }

    playerScoreInfo.textContent = `Player: ${playerScore}`;
    computerScoreInfo.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection){
    if(winner === 'player'){
        scoreMessage.textContent = playerSelection + " beats " + computerSelection;
        return;
    }
    if(winner === 'computer'){
        scoreMessage.textContent = computerSelection + " beats " + playerSelection;
    }
}

function openEndGame(){
    endGameContainer.classList.add('active')
    overlay.classList.add('active')
}

function closeEndGame(){
    endGameContainer.classList.remove('active');
    overlay.classList.remove('active');
}

function restartGame(){
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScoreInfo.textContent = 'Player: 0'
    computerScoreInfo.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endGameContainer.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore
      ? (endGameMsg.textContent = 'You won!')
      : (endGameMsg.textContent = 'You lost...')
  }
/*
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
        
    }
    console.log('Player Score: ' +playerScore);
    console.log('Computer Score: ' + computerScore);
    
}
*/

