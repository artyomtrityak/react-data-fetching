import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// Repositories list container
import Repos from './components/repos';


const store = createStore(rootReducer);
render(
  <Provider store={store}>
    <Repos />
  </Provider>,
  document.getElementById('root')
);
