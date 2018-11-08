const animals = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ANIMAL':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          type: action.animalType,
          image: action.image,
          birthTime: action.birthTime,
          isFavorite: false
        }
      ]
    case 'TOGGLE_FAVORITE':
      return state.map(animal => animal.id === action.id ? { ...animal, isFavorite: !animal.isFavorite } : animal)
    default:
      return state;
  }
};

export default animals;
