'use strict';

function TicTacToe() {
  this.positions = ["", "", "", "", "", "", "", "", ""]
  this.winningPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  this.currentPlayer = "X"
  this.winner = ""
}

TicTacToe.prototype.changePlayer = function(){
  if (this.currentPlayer === "X") {
    this.currentPlayer = "0"
  } else {
    this.currentPlayer = "X"
  }
};

TicTacToe.prototype.playTurn = function(positionPlayed){
  if (this.winner === "") {
  this.positions[positionPlayed] = this.currentPlayer
  this.winnerCheck();
  this.changePlayer();
  }
};


TicTacToe.prototype.winnerCheck = function(){
  var playersMoves = [];
  var self = this;
  this.positions.forEach(function(position, index){
    if (self.currentPlayer === position) {
      playersMoves.push(index)
    }
  });
  this.winningPositions.forEach(function(position, index){
    if (self.arrayContainsArray(playersMoves, position)) {
      self.winner = self.currentPlayer;
    }
  });
};

TicTacToe.prototype.arrayContainsArray = function(superset, subset) {
  if (0 === subset.length) {
    return false;
  }
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
};

TicTacToe.prototype.fullBoard = function(){
  return this.positions.every(function(position){
    return position !== ""
  });
};
