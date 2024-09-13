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

    const handleClick = (e) => {
        plays++;
        const grid = e.target;

        if (plays < 10) {
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            console.log(currentPlayer)
        }
    }

    grids.forEach((grid) => {
        grid.addEventListener('click', handleClick)
    })
    return {board, createPlayer}

})();


