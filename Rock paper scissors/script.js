const choice = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    return choice[Math.floor(Math.random() * 3)];
}

let playRound = (humanChoice, computerChoice) => {
    humanChoice = prompt().toLocaleLowerCase();
    computerChoice = getComputerChoice();

    if ((humanChoice === 'rock' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice === 'scissors')) {
        console.log('Draw');
    }
    if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++;
        console.log('You Lose!!');
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        console.log('You Win');
    }
}
playRound()
console.log(`Human score:${humanScore} \nComputer score:${computerScore}`)