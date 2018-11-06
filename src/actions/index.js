import nanoid from 'nanoid';

export const addAnimal = (name, image) => ({
  type: 'ADD_ANIMAL',
  id: nanoid(),
  birthTime: Date.now(),
  name,
  image
});

export const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  id
});

export const changeSortDirection = () => ({
  type: 'CHANGE_SORT_DIRECTION'
});
