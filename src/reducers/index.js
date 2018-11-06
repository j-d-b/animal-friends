import { combineReducers } from 'redux';

import animals from './animals';
import sortDirection from './sortDirection';

export default combineReducers({
  animals,
  sortDirection
});
