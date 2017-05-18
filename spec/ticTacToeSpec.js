'use strict';

describe('TicTacToe', function(){
  var ticTacToe;
  beforeEach(function(){
    ticTacToe = new TicTacToe();
  });

  it('is initialized with an empty positions array', function(){
    expect(ticTacToe.position).toEqual(["", "", "", "", "", "", "", "", ""]);
  });
});
