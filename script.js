function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum == 0){
        return "Rock";
    }
    else if (randomNum == 1){
        return "Paper";
    }
    else{
        return "Scissors";  
    }
}

// function getHumanChoice(){
//     let humanChoice = prompt("Please choose between \"Rock\", \"Paper\", or \"Scissors\"");
//     return humanChoice;
// }

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        const playerSelection = buttons.id;
        const computerSelection = getComputerChoice();
        // alert(`${playerSelection}, ${computerSelection}`);
        playRound (playerSelection, computerSelection);
        updateIcons(playerSelection, computerSelection);
        updateScore();
    })
})

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const weapons = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weakTo: 'rock', strongTo: 'paper'}
    }

    let scoreInfo = document.querySelector(".score-info");
    let gameStatus = document.querySelector(".game-status");

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
    let playerIcon = document.querySelector(".player .icon");
    let computerIcon = document.querySelector(".computer .icon");
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

    // alert("wtf");
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
    const player = document.querySelector(".player .text");
    const computer = document.querySelector(".computer .text");

    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}