import React from 'react';
import ChessBoard from 'react-chess';
import Chess from 'chess.js';
import { connect } from 'react-redux';
import { makeMove } from './actions';

export class ChessGame extends React.Component {
  constructor(props) {
    super(props);

    this.chess = new Chess();
  }

  onMovePiece(piece, from, to) {
    const moveObj = { from, to };
    this.props.dispatch(makeMove(moveObj));
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

export default connect()(ChessGame);
