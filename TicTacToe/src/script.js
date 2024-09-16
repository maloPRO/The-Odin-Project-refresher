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
    
            // Set symbol for current player and update the game board
            const currentSymbol = (currentPlayer === 1) ? player1.symbol : player2.symbol;
            grid.textContent = currentSymbol;
            gameBoard[grid.id] = currentSymbol;
    
            // Switch players
            currentPlayer = currentPlayer === 1 ? 2 : 1;
    
            // Check for win conditions
            const winner = checkWinner(gameBoard, currentSymbol);
            if (winner) {
                alert(`${winner} wins!`);
                return winner;
            }
            
            if (!document.querySelector('.unclicked')) {
                alert('It\'s a draw!');
                return 'draw';
            }
        }
    }
    
    // Function to check if the current player has won
    const checkWinner = (gameBoard, symbol) => {
        // Check rows
        if (gameBoard[0] === symbol && gameBoard[1] === symbol && gameBoard[2] === symbol) return symbol;
        if (gameBoard[3] === symbol && gameBoard[4] === symbol && gameBoard[5] === symbol) return symbol;
        if (gameBoard[6] === symbol && gameBoard[7] === symbol && gameBoard[8] === symbol) return symbol;
    
        // Check columns
        if (gameBoard[0] === symbol && gameBoard[3] === symbol && gameBoard[6] === symbol) return symbol;
        if (gameBoard[1] === symbol && gameBoard[4] === symbol && gameBoard[7] === symbol) return symbol;
        if (gameBoard[2] === symbol && gameBoard[5] === symbol && gameBoard[8] === symbol) return symbol;
    
        // Check diagonals
        if (gameBoard[0] === symbol && gameBoard[4] === symbol && gameBoard[8] === symbol) return symbol;
        if (gameBoard[2] === symbol && gameBoard[4] === symbol && gameBoard[6] === symbol) return symbol;
    
        return null;
    }
    

    grids.forEach((grid) => {
        grid.addEventListener('click', playRound);
    });

    return {createPlayer, playRound}

})();


