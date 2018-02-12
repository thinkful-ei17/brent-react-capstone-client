import Chess from 'chess.js';
import { MAKE_MOVE } from '../actions';

const initialState = new Chess();

const reducer = (state = initialState, action) => {
  if (action.type === MAKE_MOVE) {
    if (state.move(action.move)) {
      console.log(state.ascii());
      console.log(state.history());
    } else console.log('invalid move');
  }
};

export default reducer;
