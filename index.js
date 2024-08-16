const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of winPatterns) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes('') ? null : 'Tie';
};

const handleClick = (event) => {
    const index = event.target.dataset.index;
    if (board[index] || checkWinner()) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        setTimeout(() => alert(winner === 'Tie' ? "It's a tie!" : `${winner} wins!`), 10);
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    board.fill('');
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
