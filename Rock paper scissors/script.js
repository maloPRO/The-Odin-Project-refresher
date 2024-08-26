const choice = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    return choice[Math.floor(Math.random() * 3)];
}

const getHumanChoice = () => {
    return val = prompt().toLowerCase();
} 


let playRound = (humanChoice, computerChoice) => {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('Draw')
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Lose! Paper covers Rock')
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock crushes Scissors')
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('Draw')
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You Lose! Scissors cut Paper')
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper covers Rock')
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('Draw')
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You Lose! Rock crushes Scissors')
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissor cut Paper')
    }
}

playRound()