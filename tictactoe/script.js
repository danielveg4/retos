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

const resetGame = () => {
    resetButtonContainerElement.classList.remove('hidden');
    resetButtonElement.addEventListener('click', () => {
        console.log('reiniciando...');
        location.reload();
    })
}

const userWins = (userPlay) => {
    if (gameRules.some(rule => rule.every(index => userPlay.includes(index)))) {
        boardElement.style.display = 'none';
        winnerTextElement.textContent = 'USER WINS!';
        statusElement.textContent = '';
        resetGame(); 
    }
}

pcWins = (pcPlay) => {
    if (gameRules.some(rule => rule.every(index => pcPlay.includes(index)))) {
        boardElement.style.display = 'none';
        winnerTextElement.textContent = 'PC WINS!';
        statusElement.textContent = '';
        resetGame()
    }
}

const userMove = (event) => {
    const playerCellIndex = Number(event.target.dataset.index);
    userPlay.push(playerCellIndex);
    event.target.textContent = 'X';
    statusElement.textContent = 'PC turn';

    userWins(userPlay);

    setTimeout(() => {
        pcMove();
    }, 1500);
}

const pcMove = () => {
    const randomNumber = Math.floor(Math.random() * boardElement.children.length);
    if (boardElement.children[randomNumber].textContent === 'Y' || boardElement.children[randomNumber].textContent === 'X') return pcMove(); 
    pcPlay.push(randomNumber);
    boardElement.children[randomNumber].textContent = 'Y';
    statusElement.textContent = `User turn`;

    pcWins(pcPlay);
}


boardElement.addEventListener('click', (event) => {
    userMove(event);
})