const gameBoard = document.querySelector('.game-board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset-button');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', handleReset);

function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    checkForWin();
    switchPlayer();
  }
}

function checkForWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (
      cells[condition[0]].textContent === currentPlayer &&
      cells[condition[1]].textContent === currentPlayer &&
      cells[condition[2]].textContent === currentPlayer
    ) {
      gameOver = true;
      alert(`Player ${currentPlayer} wins!`);
      break;
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function handleReset() {
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameOver = false;
}