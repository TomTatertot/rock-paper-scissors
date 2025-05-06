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
        alert(`${playerSelection}, ${computerSelection}`);
        playRound (playerSelection, computerSelection);
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

    if (weapons[humanChoice].strongTo === computerChoice) {
        scoreInfo.textContent = "You won!";
        playerScore++;
        return;
    }
    else if (weapons[humanChoice].weakTo === computerChoice) {
        scoreInfo.textContent = "You lost!";
        computerScore++;

        return;
    }
    else{
        scoreInfo.textContent = "It's a tie!";
    }
}