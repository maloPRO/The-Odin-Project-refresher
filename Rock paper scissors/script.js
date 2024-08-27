const choice = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');
let humanScore = document.getElementById('hScore');
let computerScore = document.getElementById('cScore');
let board = document.querySelector('.board');


let getComputerChoice = () => {
    return choice[Math.floor(Math.random() * 3)];
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();


        if (humanChoice === computerChoice) {
            board.textContent = 'Draw!!'
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            board.textContent = 'You Lose!!'
            let score = Number(computerScore.textContent);
            score++
            computerScore.textContent = score;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            board.textContent = 'You Win!!'
            let score = Number(humanScore.textContent);
            score++
            humanScore.textContent = score;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            board.textContent = 'You Lose!!'
            let score = Number(computerScore.textContent);
            score++
            computerScore.textContent = score;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            board.textContent = 'You Win!!'
            let score = Number(humanScore.textContent);
            score++
            humanScore.textContent = score;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            board.textContent = 'You Lose!!'
            let score = Number(computerScore.textContent);
            score++
            computerScore.textContent = score;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            board.textContent = 'You Win!!'
            let score = Number(humanScore.textContent);
            score++
            humanScore.textContent = score;
        }
    })
})