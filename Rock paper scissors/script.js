const choice = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    return choice[Math.floor(Math.random() * 3)];
}

const getHumanChoice = () => {
    return prompt().toLowerCase();
} 

let humanScore = 0;
let computerScore = 0;


let playGame = () => {

    let playRound = () => {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        if (!choice.includes(humanChoice)) {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
            return; // Exit the function if the choice is invalid
        }
        if (humanChoice === computerChoice) {
            alert('Draw')
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            alert('You Lose! Paper covers Rock');
            computerScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            alert('You win! Rock crushes Scissors');
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            alert('You Lose! Scissors cut Paper');
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            alert('You win! Paper covers Rock');
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            alert('You Lose! Rock crushes Scissors');
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            alert('You win! Scissor cut Paper');
            humanScore++;
        }
        return humanScore, computerScore;
    }

    for (let i = 0; i < 2; i++) {
        playRound();
    }

    if (computerScore > humanScore) {
        console.log(`Computer wins! \nComputer:${computerScore} \nYou:${humanScore}`)
    } else if (computerScore < humanScore) {
        console.log(`You win! \nYou:${humanScore} \nComp:${computerScore}`)
    } else {
        console.log(`It's a TIE`)
    }
}

playGame()