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

  it('will change the current player to 0', function(){
    ticTacToe.changePlayer();
    expect(ticTacToe.currentPlayer).toEqual("0");
  });

  it('will change the current player back to X', function(){
    ticTacToe.changePlayer();
    ticTacToe.changePlayer();
    expect(ticTacToe.currentPlayer).toEqual("X");
  });

  it('allows a play to occur', function(){
    expect(ticTacToe.playTurn).to
  });
});
