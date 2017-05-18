'use strict';

function TicTacToe() {
  this.position = ["", "", "", "", "", "", "", "", ""]
  // this.winningPositions = [[position[0], position[1], position[2]],
  //                         [position[3], position[4], position[5]],
  //                         [position[6], position[7], position[8]],
  //                         [position[0], position[3], position[6]],
  //                         [position[1], position[4], position[7]],
  //                         [position[2], position[5], position[8]],
  //                         [position[0], position[4], position[8]],
  //                         [position[2], position[4], position[6]]]
  this.currentPlayer = "X"
};

TicTacToe.prototype.changePlayer = function(){
  if (this.currentPlayer === "X") {
    this.currentPlayer = "0"
  } else {
    this.currentPlayer = "X"
  }
};
