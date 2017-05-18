var ticTacToe = new TicTacToe;

var boardMarker = function(position) {
  if (ticTacToe.winner === ""){
  document.getElementById(position).innerText = ticTacToe.currentPlayer;}
};

var cells = document.getElementsByClassName('cell');

Array.prototype.forEach.call(cells, function(cell) {
  cell.addEventListener('click', function() {
    boardMarker(this.id);
    ticTacToe.playTurn(this.id.split("-")[1]);
    if (ticTacToe.winner !== ""){
      document.getElementById("winner-display").innerText = "The winner is " + ticTacToe.winner + "!";
    } else if (ticTacToe.fullBoard()) {
      document.getElementById("winner-display").innerText = "Game over!";
    }
  });
});
