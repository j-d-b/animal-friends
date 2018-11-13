import React from 'react';
import { connect } from 'react-redux';

import { getBerry, selectBerry } from '../actions';
import Berry from '../components/Berry';

const BerryContainer = ({ berry, dispatch }) => (
  <div>
    <button onClick={() => berry.type === 'EMPTY' && dispatch(getBerry())}>Get Berry</button>
    {berry.isSearching && 'Searching for berries...'}
    <Berry
      type={berry.type}
      isSelected={berry.isSelected}
      selectBerry={() => dispatch(selectBerry())}
    />
  </div>
);

const mapStateToProps = ({ berry }) => ({ berry });

export default connect(mapStateToProps)(BerryContainer);
