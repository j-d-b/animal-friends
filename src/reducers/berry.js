const emptyBerry = {
  type: 'EMPTY',
  effectDuration: 0,
  isSearching: false,
  isSelected: false
};

const berry = (state = emptyBerry, action) => {
  switch (action.type) {
    case 'SEARCH_FOR_BERRY':
      return {
        ...state,
        isSearching: true
      };
    case 'ADD_BERRY':
      return {
        type: action.berryType,
        effectDuration: action.effectDuration,
        isSelected: false,
        isSearching: false
      };
    case 'SELECT_BERRY':
      return {
        ...state,
        isSelected: true,
        isSearching: false
      };
    case 'GIVE_BERRY':
      return emptyBerry;
    default:
      return state;
  }
};

export default berry;
