var ticTacToe = new TicTacToe;

var boardMarker = function(position) {
  document.getElementById(position).innerText = ticTacToe.currentPlayer;
};

var cells = document.getElementsByClassName('cell');

Array.prototype.forEach.call(cells, function(cell) {
  cell.addEventListener('click', function() {
    boardMarker(this.id);
    ticTacToe.playTurn(this.id.split("-")[1]);
  });
});
