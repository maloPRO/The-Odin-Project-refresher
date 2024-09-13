const game = (function () {
    const board = {
        gameBoard: ['a1', 'a2', 'a3', 'b1', 'b2','b3', 'c1', 'c2', 'c3'],
    
    }

    const createPlayer = (name, symbol) => {
        return {name, symbol}
    }

    const grids = document.querySelectorAll('.box');
    const player1 = createPlayer('Player One', 'X');
    const player2 = createPlayer('Player Two', 'O');
    let currentPlayer = 1;
    let plays = 0;

    const playRound = (e) => {
        
        const grid = e.target;
        grid.classList.add('clicked')

        if (currentPlayer === 1 ) {
            grid.textContent = player1.symbol;
        } else {
            grid.textContent = player2.symbol;
        }
        currentPlayer = currentPlayer === 1 ? 2 : 1;

        
    }


    grids.forEach((grid) => {
        grid.addEventListener('click', playRound);

    })
    return {board, createPlayer}

})();


