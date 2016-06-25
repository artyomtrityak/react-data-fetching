import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// Containers
import Repos from './components/repos';
import Gists from './components/gists';

// NOTE:
// Replace <Repos /> to <Gists /> for complex data layer

const store = createStore(rootReducer);
render(
  <Provider store={store}>
    <Repos />
  </Provider>,
  document.getElementById('root')
);
