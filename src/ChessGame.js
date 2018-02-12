import React from 'react';
import ChessBoard from 'react-chess';
import Chess from 'chess.js';

export default class ChessGame extends React.Component {
  constructor(props) {
    super(props);

    this.chess = new Chess();
  }

  onMovePiece(piece, from, to) {
    // Update this.myGame based on the arguments.  If stuff goes wrong then change pieces on board
    // this.forceUpdate()
    // console.log('piece is', piece);
    // console.log('fromSquare is', from);
    // console.log('toSquare is', to);
    console.log('this is myGame', this.chess);
    // while (!this.chess.game_over()) {
    //   const moves = this.chess.moves();
    //   const move = moves[Math.floor(Math.random() * moves.length)];
    //   this.chess.move(move);
    // }
    // console.log(this.chess.pgn());
  }

  render() {
    return (
      <ChessBoard
        onMovePiece={(piece, fromSquare, toSquare) =>
          this.onMovePiece(piece, fromSquare, toSquare)}

      />
    );
  }
}
