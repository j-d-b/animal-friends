import React from 'react';
import { connect } from 'react-redux';

import { getBerry } from '../actions';

const AddBerry = ({ berry, dispatch }) => (
  <span>
    <button onClick={() => berry.type === 'EMPTY' && dispatch(getBerry())}>Get Berry</button>
    <span>{berry.isSearching && 'Searching for berries...'}</span>
  </span>
);

const mapStateToProps = ({ berry }) => ({ berry });

export default connect(mapStateToProps)(AddBerry);
