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
            if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') alert('Player One wins');
            if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') alert('Player One wins');
            if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') alert('Player One wins');

            if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') alert('Player Two wins');
            if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') alert('Player Two wins');
            if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') alert('Player Two wins');

            // Check columns
            if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') alert('Player One wins');
            if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') alert('Player One wins');
            if (gameBoard[2] === 'X' && gameBoard[8] === 'X' && gameBoard[8] === 'X') alert('Player One wins');

            if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') alert('Player Two wins');
            if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') alert('Player Two wins');
            if (gameBoard[2] === 'O' && gameBoard[8] === 'O' && gameBoard[8] === 'O') alert('Player Two wins');

            // Check diagonals
            if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') alert('Player One wins');
            if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') alert('Player One wins');

            if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') alert('Player Two wins');
            if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') alert('Player Two wins');
        }
    }

    grids.forEach((grid) => {
        grid.addEventListener('click', playRound);
    });
    
    return {createPlayer}

})();


