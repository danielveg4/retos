const statusElement = document.getElementById('status');
const boardElement = document.getElementById('board');
const resetButtonContainerElement = document.getElementById('reset-button');
const winnerTextElement = document.getElementById('winner');
const resetButtonElement = document.getElementById('reset-game');

const gameRules = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
];

let userPlay = [];
let pcPlay = [];

const reloadPage = () => {
    console.log('reiniciando...');
    location.reload();
}

const resetGame = () => {
    resetButtonContainerElement.classList.remove('hidden');
    resetButtonElement.addEventListener('click', reloadPage)
}

const checkWinner = (player, playerMoves, message) => {
    if (gameRules.some(rule => rule.every(index => playerMoves.includes(index)))) {
        boardElement.style.display = 'none';
        winnerTextElement.textContent = message;
        statusElement.textContent = '';
        resetGame();
    }
}

const checkForDraw = () => {
    const allMoves = [...userPlay, ...pcPlay];
    if (allMoves.length === 9) {
        boardElement.style.display = 'none';
        winnerTextElement.textContent = 'Draw!';
        resetGame();
    }
}

const userWins = () => checkWinner('user', userPlay, 'USER WINS!');
const pcWins = () => checkWinner('pc', pcPlay, 'PC WINS!');

const userMove = (event) => {
    if (statusElement.textContent !== 'User turn') return;

    const playerCellIndex = Number(event.target.dataset.index);
    userPlay.push(playerCellIndex);
    event.target.textContent = 'X';
    statusElement.textContent = 'PC turn';

    userWins(userPlay);
    checkForDraw();

    setTimeout(() => {
        pcMove();
    }, 1500);
}

const pcMove = () => {
    const emptyCells = Array.from(boardElement.children).filter(cell => 
        cell.textContent !== 'Y' && cell.textContent !== 'X'
    );
    if (emptyCells.length === 0) return;

    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const randomNumber = Number(randomCell.dataset.index);

    pcPlay.push(randomNumber);
    randomCell.textContent = 'Y';
    statusElement.textContent = `User turn`;

    pcWins();
    checkForDraw();
};



boardElement.addEventListener('click', (event) => {
    userMove(event);
})