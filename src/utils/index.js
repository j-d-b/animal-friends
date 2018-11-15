const minToMs = min => min * 60 * 1000;
const hrToMs = hr => hr * 60 * 60 * 1000;

const berries = [
  {
    type: 'CHERRY',
    image: '🍒',
    description: 'Small, sweet, and tart, the cherry is a lovely snack',
    effectDuration: 0,
    frequency: 0.65
  },
  {
    type: 'STRAWBERRY',
    image: '🍓',
    description: 'A classic treat known for its bright red color',
    effectDuration: minToMs(5),
    frequency: 0.25
  },
  {
    type: 'SPINBERRY',
    image: '🍈',
    description: 'A round berry with a rather bitter finish; a good energy source',
    effectDuration: minToMs(10),
    frequency: 0.05
  },
  {
    type: 'STARBERRY',
    image: '🌟',
    description: 'A beautiful star-shaped berry, shining brightly',
    effectDuration: hrToMs(24),
    frequency: 0.05
  }
];

const weightedBerries = berries.flatMap(berry => new Array(berry.frequency * 100).fill(berry));

export const randomBerry = () => weightedBerries[Math.floor(Math.random() * 100)];

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
