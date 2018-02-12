import Chess from 'chess.js';
import {
  FETCH_CHEESES_ERROR,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  ADD_CHEESE,
} from '../actions';

const initialState = new Chess();

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_CHEESES_ERROR:
    return {
      ...state,
      error: action.error,
      loading: false,
      cheeses: [],
    };
  case FETCH_CHEESES_REQUEST:
    return {
      ...state,
      error: null,
      loading: true,
    };
  case FETCH_CHEESES_SUCCESS:
    return {
      ...state,
      error: null,
      loading: false,
      cheeses: action.cheeses,
    };
  case ADD_CHEESE:
    return {
      ...state,
      cheeses: [...state.cheeses,
        action.cheeses],
    };
  default:
    return state;
  }
};

export default reducer;
