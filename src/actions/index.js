import nanoid from 'nanoid';

import { randomBerry } from '../utils';

export const addAnimal = (name, image) => ({
  type: 'ADD_ANIMAL',
  id: nanoid(),
  birthTime: Date.now(),
  name,
  image
});

export const toggleFavorite = animalId => ({
  type: 'TOGGLE_FAVORITE',
  animalId
});

export const changeSortDirection = () => ({
  type: 'CHANGE_SORT_DIRECTION'
});

export const searchForBerry = () => ({
  type: 'SEARCH_FOR_BERRY'
});

export const pruneBerries = currTime => ({
  type: 'PRUNE_BERRIES',
  currTime
});

export const addBerry = berryType => ({
  type: 'ADD_BERRY',
  berryType
});

export const selectBerry = () => ({
  type: 'SELECT_BERRY'
});

export const giveBerry = (animalId, berryType) => ({
  type: 'GIVE_BERRY',
  animalId,
  berryType,
  expiresAt: Date.now() + (1000 * 60) // one minute
});

export const getBerry = () => {
  return dispatch => {
    dispatch(searchForBerry());
    setTimeout(() => dispatch(addBerry(randomBerry())), 2500);
  };
};
