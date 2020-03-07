/**
 * Handle players turn.
 */
 const player = document.getElementById("player");
 const cells = document.querySelectorAll(".game__main__cell");

let clicks: number = 0;

const turn = () => {
  (clicks % 2 === 0) ? player.innerText = "Player 2" : player.innerText = "Player 1";
  clicks++;
};

cells.forEach(cell => {
  cell.addEventListener("click", turn, false);
});

/**
 *
 */
const board = document.getElementById("board");

const play = event => {

};

/**
 *
 */
const reset = () => {

};
