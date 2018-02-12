import React from 'react';
import ChessBoard from 'react-chess';
import Chess from 'chess.js';

export default class ChessGame extends React.Component {
  constructor(props) {
    super(props);

    this.myGame = new Chess();
  }

  onMovePiece(piece, fromSquare, toSquare) {
    // Update this.myGame based on the arguments.  If stuff goes wrong then change pieces on board
    // this.forceUpdate()
    console.log('piece is', piece);
    console.log('fromSquare is', fromSquare);
    console.log('toSquare is', toSquare);
    console.log('this is myGame', this.myGame);
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
