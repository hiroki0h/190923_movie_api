import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import reducers from './store/modules';

import { Provider } from 'react-redux';
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devTools);

console.log(store.getState());

ReactDOM.render(
// Provider의 props로 store 설정
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('wrapper')
);

