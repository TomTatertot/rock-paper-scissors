let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const scoreInfo = document.querySelector(".score-info");
const gameStatus = document.querySelector(".game-status");
const playerIcon = document.querySelector(".player .icon");
const computerIcon = document.querySelector(".computer .icon");
const playerScoreText = document.querySelector(".player .text");
const computerScoreText = document.querySelector(".computer .text");


buttons.forEach((button) => { 
    button.addEventListener("click", handleClick);
    // button.addEventListener("click", () => {
    //     const playerSelection = button.id;
    //     const computerSelection = getComputerChoice();
    //     playRound (playerSelection, computerSelection);
    //     updateIcons(playerSelection, computerSelection);
    //     updateScore();

    //     if (gameOver()){

    //     }
    //     // resetGame();

    //     // if (playerScore >= 5 || computerScore >=5){
    //     //     resetGame();
    //     // }
    // })
})

function handleClick(event){
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound (playerSelection, computerSelection);
    updateIcons(playerSelection, computerSelection);
    updateScore();

    // if (gameOver()){

    // }
}

function gameOver(){

}

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const weapons = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weakTo: 'rock', strongTo: 'paper'}
    }

    if (weapons[humanChoice].strongTo === computerChoice) {
        scoreInfo.textContent = "You won!";
        gameStatus.textContent = `${humanChoice} beats ${computerChoice}`;
        playerScore++;
    }
    else if (weapons[humanChoice].weakTo === computerChoice) {
        scoreInfo.textContent = "You lost!";
        gameStatus.textContent = `${humanChoice} loses to ${computerChoice}`;
        computerScore++;
    }
    else{
        scoreInfo.textContent = "It's a tie!";
        gameStatus.textContent = `${humanChoice} ties with ${computerChoice}`;
    }

    gameStatus.textContent = capitalizeFirstLetter(gameStatus.textContent);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function updateIcons(playerChoice, computerChoice){
    // ✊🖐️✂️
    switch(playerChoice){
        case "rock":
            playerIcon.textContent = "✊";
            break;
        case "paper":
            playerIcon.textContent = "🖐️";
            break;
        case "scissors":
            playerIcon.textContent = "✂️";
            break;
    }

    switch(computerChoice){
        case "Rock":
            computerIcon.textContent = "✊";
            break;
        case "Paper":
            computerIcon.textContent = "🖐️";
            break;
        case "Scissors":
            computerIcon.textContent = "✂️";
            break;
    }
}

function updateScore() {
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function resetGame(){
    scoreInfo.textContent = "Choose your weapon";
    gameStatus.textContent = "First to score 5 points wins the game";
    playerIcon.textContent = "?";
    computerIcon.textContent = "?";
    playerScore = 0;
    computerScore = 0; 

}