const berrySpecs = [
  {
    name: 'LEMONBERRY',
    frequency: 0.05
  },
  {
    name: 'STRAWBERRY',
    frequency: 0.2
  }
];

const weightedBerries = ((specs) => {
  berrySpecs
})(berrySpecs);

export const randomBerry = () => 'STRAWBERRY';

export const loadSavedAnimals = () => {
  try {
    const animals = localStorage.getItem('favAnimals');
    return !animals ? [] : JSON.parse(animals);
  } catch (err) {
    return [];
  }
};

export const saveFavAnimals = (state) => {
  try {
    const animals = JSON.stringify(state.animals);
    localStorage.setItem('favAnimals', animals);
  } catch {
    console.error('Failed to save favorite animals 😢');
  }
};
