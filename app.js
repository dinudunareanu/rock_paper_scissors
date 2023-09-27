const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restartBtn = document.querySelector('#restart');

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "oops";
    }
}

function gameEnd(winner) {
    const msg = document.querySelector('.msg');

    if (winner === 1) {
        msg.textContent = "Congratulations! You won!";
    }
    else {
        msg.textContent = "Sorry, you lost!";
    }

    restartBtn.classList.toggle("noDisplay");
    rock.classList.toggle("disable");
    paper.classList.toggle("disable");
    scissors.classList.toggle("disable");
}

function restart() {
    document.querySelector('.playerScore').textContent = "0";
    document.querySelector('.computerScore').textContent = "0";
    document.querySelector('.msg').textContent = "";
    restartBtn.classList.toggle("noDisplay");
    rock.classList.toggle("disable");
    paper.classList.toggle("disable");
    scissors.classList.toggle("disable");
}


rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
restartBtn.addEventListener('click', restart);

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    let winner = 0;
    let message = "";
    if (playerSelection === computerSelection) {
        message = "Draw!";
    }
    else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                message = "Paper beats rock! You lost!";
                winner = -1;
            }
            else {
                message = "Rock beats scissors! You won!";
                winner = 1;
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                message = "Paper beats rock! You won!";
                winner = 1;
            }
            else {
                message = "Scissors beats paper! You lost!";
                winner = -1;
            }
        } else {
            if (computerSelection === "rock") {
                message = "Rock beats scissors! You lost!";
                winner = -1;
            }
            else {
                message = "Scissors beats paper! You won!";
                winner = 1;
            }
        }
    }

    document.querySelector('.msg').textContent = message;

    let scoreToIncrement = 0;
    if (winner === 1) {
        scoreToIncrement = document.querySelector('.playerScore');
        scoreToIncrement.textContent++;

        if (scoreToIncrement.textContent === '5') {
            gameEnd(1);
        }
    } else if (winner === -1) {
        scoreToIncrement = document.querySelector('.computerScore');
        scoreToIncrement.textContent++;

        if (scoreToIncrement.textContent === '5') {
            gameEnd(-1);
        }
    }
}
