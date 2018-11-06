const sortDirection = (state = 'ASCENDING', action) => {
  switch (action.type) {
    case 'CHANGE_SORT_DIRECTION':
      return state === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING';
    default:
      return state;
  }
};

export default sortDirection;
