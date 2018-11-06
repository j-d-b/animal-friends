import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const loadSavedAnimals = () => {
  try {
    const animals = window.localStorage.getItem('favAnimals');
    return animals === null ? [] : JSON.parse(animals);
  } catch (err) {
    return [];
  }
};

const saveFavAnimals = (state) => {
  try {
    const animals = JSON.stringify(state.animals);
    window.localStorage.setItem('favAnimals', animals);
  } catch {
    // write error
  }
};

const store = createStore(
  rootReducer,
  { animals: loadSavedAnimals() },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveFavAnimals({
    animals: store.getState().animals.filter(animal => animal.favorite)
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
