const berry = (state = { type: '', isSelected: false }, action) => {
  switch (action.type) {
    case 'ADD_BERRY':
      return {
        type: action.berryType,
        isSelected: false
      };
    case 'SELECT_BERRY':
      return {
        type: state.type,
        isSelected: true
      };
    case 'GIVE_BERRY':
      return {
        type: '',
        isSelected: false
      };
    default:
      return state;
  }
};

export default berry;
