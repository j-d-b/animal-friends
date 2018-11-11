import { combineReducers } from 'redux';

import animals from './animals';
import berry from './berry';
import sortDirection from './sortDirection';

export default combineReducers({
  animals,
  berry,
  sortDirection
});
