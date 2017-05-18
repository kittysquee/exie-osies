'use strict';

describe('TicTacToe', function(){
  var ticTacToe;
  beforeEach(function(){
    ticTacToe = new TicTacToe();
  });

  it('is initialized with an empty positions array', function(){
    expect(ticTacToe.position).toEqual(["", "", "", "", "", "", "", "", ""]);
  });

  it('is initialized with a currentPlayer', function(){
    expect(ticTacToe.currentPlayer).toEqual("X");
  });

  it('will change the current player', function(){
    ticTacToe.changePlayer()
    expect(ticTacToe.currentPlayer).toEqual("0");
  });
});
