const game = (function () {
    let gameBoard = [
            'a1', 'a2', 'a3',
            'b1', 'b2','b3',
            'c1', 'c2', 'c3'
        ]

    const createPlayer = (name, symbol) => {
        return {name, symbol}
    }

    const grids = document.querySelectorAll('.box');
    const player1 = createPlayer('Player One', 'X');
    const player2 = createPlayer('Player Two', 'O');
    let currentPlayer = 1;

    const playRound = (e) => {
        
        const grid = e.target;
        if (grid.classList.contains('unclicked')) {

            grid.classList.remove('unclicked');
            grid.textContent = (currentPlayer === 1) ? player1.symbol : player2.symbol;

            currentPlayer = currentPlayer === 1 ? 2 : 1;
            gameBoard[grid.id] = grid.textContent;
        }
    }

    grids.forEach((grid) => {
        grid.addEventListener('click', playRound);
    });
    
    return {createPlayer}

})();


