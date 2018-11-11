import nanoid from 'nanoid';

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
  berryType
});
