import Chess from 'chess.js';
import { MAKE_MOVE } from '../actions';

const initialState = new Chess();
console.log(initialState.board());

const reducer = (state = initialState, action) => {
  if (action.type === MAKE_MOVE) {
    if (state.move(action.move)) {
      console.log(state.board());
      const moveInfo = state.history({ verbose: true });
      console.log(moveInfo);
    } else console.log('invalid move');
  }
};

export default reducer;
