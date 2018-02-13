import React from 'react';
import ChessBoard from 'react-chess';
import { connect } from 'react-redux';
import Chess from './chess-logic';
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
    return (
      <ChessBoard
        onMovePiece={(piece, fromSquare, toSquare) =>
          this.onMovePiece(piece, fromSquare, toSquare)}
        pieces={this.props.board}
        onDragStart={(piece, fromSquare) =>
          this.onDragStart(piece, fromSquare)}
      />
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
});
export default connect(mapStateToProps)(ChessGame);


// player attempts move-> sends a move request to state -> check move rq against 'state.legal moves' ->update state if legal ->trigger re render with new state