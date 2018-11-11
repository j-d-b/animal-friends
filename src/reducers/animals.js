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
          isFavorite: false,
          appliedBerries: []
        }
      ]
    case 'TOGGLE_FAVORITE':
      return state.map(animal => animal.id === action.animalId ? { ...animal, isFavorite: !animal.isFavorite } : animal);
    case 'GIVE_BERRY':
      return state.map(animal => (
        animal.id === action.animalId
          ? { ...animal, appliedBerries: [...animal.appliedBerries, action.berryType] }
          : animal
        )
      );
    default:
      return state;
  }
};

export default animals;
