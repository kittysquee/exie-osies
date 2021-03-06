'use strict';

describe('TicTacToe', function(){
  var ticTacToe;
  beforeEach(function(){
    ticTacToe = new TicTacToe();
  });

  it('is initialized with an empty positions array', function(){
    expect(ticTacToe.positions).toEqual(["", "", "", "", "", "", "", "", ""]);
  });

  it('is initialized with a winning positions array', function(){
    expect(ticTacToe.winningPositions).toEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]])
  });

  it('is initialized with a currentPlayer', function(){
    expect(ticTacToe.currentPlayer).toEqual("⚔️");
  });

  it('will change the current player to 0', function(){
    ticTacToe.changePlayer();
    expect(ticTacToe.currentPlayer).toEqual("⭕️");
  });

  it('will change the current player back to ⚔️', function(){
    ticTacToe.changePlayer();
    ticTacToe.changePlayer();
    expect(ticTacToe.currentPlayer).toEqual("⚔️");
  });

  it('allows a play to occur', function(){
    ticTacToe.playTurn(1);
    expect(ticTacToe.positions).toEqual(["", "⚔️", "", "", "", "", "", "", ""]);
  });

  it('doesn\'t allow multiple plays on the same spot', function(){
    ticTacToe.playTurn(0);
    ticTacToe.playTurn(0);
    expect(ticTacToe.positions).not.toEqual(["⭕️", "", "", "", "", "", "", "", ""])
  });

  it('allows multiple plays to occur', function(){
    ticTacToe.playTurn(1);
    ticTacToe.playTurn(3);
    ticTacToe.playTurn(5);
    expect(ticTacToe.positions).toEqual(["", "⚔️", "", "⭕️", "", "⚔️", "", "", ""]);
  });

  it('checks for the winner', function(){
    ticTacToe.playTurn(0);
    ticTacToe.playTurn(5);
    ticTacToe.playTurn(1);
    ticTacToe.playTurn(8);
    ticTacToe.playTurn(2);
    expect(ticTacToe.winner).toEqual("⚔️")
  });

  it('allows no more plays when someone has won', function(){
    ticTacToe.playTurn(0);
    ticTacToe.playTurn(5);
    ticTacToe.playTurn(1);
    ticTacToe.playTurn(8);
    ticTacToe.playTurn(2);
    ticTacToe.playTurn(6);
    expect(ticTacToe.positions).toEqual(["⚔️", "⚔️", "⚔️", "", "", "⭕️", "", "", "⭕️"])
  });

  it('game over when no more plays can be made', function(){
    ticTacToe.playTurn(1);
    ticTacToe.playTurn(0);
    ticTacToe.playTurn(2);
    ticTacToe.playTurn(5);
    ticTacToe.playTurn(3);
    ticTacToe.playTurn(6);
    ticTacToe.playTurn(4);
    ticTacToe.playTurn(7);
    ticTacToe.playTurn(8);
    expect(ticTacToe.fullBoard()).toBe(true);
  });
});
