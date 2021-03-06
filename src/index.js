import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { loadSavedAnimals, saveFavAnimals } from './utils';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(
  rootReducer,
  { animals: loadSavedAnimals() },
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(thunk)
);

store.subscribe(() => {
  saveFavAnimals({
    animals: store.getState().animals.filter(animal => animal.isFavorite)
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
