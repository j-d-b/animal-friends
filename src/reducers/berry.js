const berry = (state = { type: 'EMPTY', isSelected: false, isSearching: false }, action) => {
  switch (action.type) {
    case 'SEARCH_FOR_BERRY':
      return {
        ...berry,
        isSearching: true
      };
    case 'ADD_BERRY':
      return {
        type: action.berryType,
        isSelected: false,
        isSearching: false
      };
    case 'SELECT_BERRY':
      return {
        type: state.type,
        isSelected: true,
        isSearching: false
      };
    case 'GIVE_BERRY':
      return {
        type: 'EMTPY',
        isSelected: false,
        isSearching: false
      };
    default:
      return state;
  }
};

export default berry;
