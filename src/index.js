import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChessGame from './ChessGame';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ChessGame />
  </Provider>,
  document.getElementById('root'),
);

