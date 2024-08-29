const choice = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');
let humanScore = document.getElementById('hScore');
let computerScore = document.getElementById('cScore');
let board = document.querySelector('.board');
let rounds = 0;

let getComputerChoice = () => {
    return choice[Math.floor(Math.random() * 3)];
}

const playGame = (choice) => {
    const humanChoice = choice;
    const computerChoice = getComputerChoice();

    if (rounds < 5) {
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
        rounds++;
    } else {
        gameOver()
    }
}

const gameOver = () => {
    humanScore.textContent = '0';
    computerScore.textContent = '0';
    board.textContent = 'GAME OVER';
    
    const newGame = document.createElement('button');
    newGame.classList.add('newGame');

    board.classList.add('newBoard');
    board.appendChild(newGame);
    newGame.innerHTML = 'New Game';

    newGame.addEventListener('click', () =>  {
        window.location.reload();
    })
}

const gameRound = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            playGame(this.id)
        })
    })
}

window.onload = gameRound()