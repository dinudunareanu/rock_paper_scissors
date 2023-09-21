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

function playRound(playerSelection, computerSelection) {
    let winner = 0;

    if (playerSelection === computerSelection) {
        console.log("Draw!");
        winner = -1;
    }
    else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                console.log("Paper beats rock! You lost!");
            }
            else {
                console.log("Rock beats scissors! You won!");
                winner = 1;
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("Paper beats rock! You won!");
                winner = 1;
            }
            else {
                console.log("Scissors beats paper! You lost!");
            }
        } else {
            if (computerSelection === "rock") {
                console.log("Rock beats scissors! You lost!");
            }
            else {
                console.log("Scissors beats paper! You won!");
                winner = 1;
            }
        }
    }
    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let i = 0;
    while (i < 5 && playerScore < 3 && computerScore < 3) {
        let f = 0;
        while (!f) {
            playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                f = 1;
            }
            else {
                alert("Invalid input!");
            }
        }
        computerSelection = getComputerChoice();

        let x = playRound(playerSelection, computerSelection);
        if (x !== -1) 
            x ? playerScore++ : computerScore++;
        console.log(`Score: ${playerScore} - ${computerScore}`);

        i++;
    }

    if (playerScore > computerScore) {
        console.log("Congratulation! You won!");
    }
    else if (computerScore > playerScore){
        console.log("Sorry, you lost!");
    } else {
        console.log("It's a draw!");
    }
}