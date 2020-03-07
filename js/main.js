var player = document.getElementById("player");
var cells = document.querySelectorAll(".game__main__cell");
/**
 * Handle players turn.
 */
var clicks = 0;
var turn = function () {
    (clicks % 2 === 0) ? player.innerText = "Player 2" : player.innerText = "Player 1";
    clicks++;
};
cells.forEach(function (cell) {
    cell.addEventListener("click", turn, false);
});
