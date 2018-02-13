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

  onDragStart(piece) {
    console.log(piece.notation);
  }

  onMovePiece(piece, from, to) {
    console.log(this.props);
    const moveObj = { from, to };
    this.props.dispatch(makeMove(moveObj));
  }

  render() {
    const pieces = ['R@a1',
      'N@b1',
      'B@c1',
      'Q@d1',
      'K@e1',
      'B@f1',
      'N@g1',
      'R@h1',
      'P@a2',
      'P@b2',
      'P@c2',
      'P@d2',
      'P@e2',
      'P@f2',
      'P@g2',
      'P@h2',
      'p@a7',
      'p@b7',
      'p@c7',
      'p@d7',
      'p@e7',
      'p@f7',
      'p@g7',
      'p@h7',
      'r@a8',
      'n@b8',
      'b@c8',
      'q@d8',
      'k@e8',
      'b@f8',
      'n@g8',
      'r@h8'];
    return (
      <ChessBoard
        onMovePiece={(piece, fromSquare, toSquare) =>
          this.onMovePiece(piece, fromSquare, toSquare)}
        pieces={pieces}
        onDragStart={(piece, fromSquare) =>
          this.onDragStart(piece, fromSquare)}
      />
    );
  }
}

const mapStateToProps = state => ({
  board: state,
});
export default connect(mapStateToProps)(ChessGame);
