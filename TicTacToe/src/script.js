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

            // Check rows
            if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) return gameBoard[0];
            if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) return gameBoard[3];
            if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) return gameBoard[0];

            // Check columns
            if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) return gameBoard[0];
            if (gameBoard[1] !== '' && gameBoard[4] === gameBoard[4] && gameBoard[4] === gameBoard[7]) return gameBoard[1];
            if (gameBoard[2] !== '' && gameBoard[5] === gameBoard[5] && gameBoard[7] === gameBoard[8]) return gameBoard[2];

            // Check diagonals
            if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) return gameBoard[0];
            if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) return gameBoard[3];

        }
    }

    grids.forEach((grid) => {
        grid.addEventListener('click', playRound);
    });


    return {createPlayer, playRound}

})();


