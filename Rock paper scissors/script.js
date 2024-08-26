const choice = ['rock', 'paper', 'scissors'];


let getComputerChoice = () => {
    return choice[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice())