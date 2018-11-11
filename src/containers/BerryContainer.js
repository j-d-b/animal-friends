import React from 'react';
import { connect } from 'react-redux';

import { addBerry, searchForBerry, selectBerry } from '../actions';
import Berry from '../components/Berry';

const berrySpecs = [
  {
    name: 'LEMONBERRY',
    frequency: 0.05
  },
  {
    name: 'STRAWBERRY',
    frequency: 0.2
  }
];

const weightedBerries = ((specs) => {
  berrySpecs
})(berrySpecs);

const randomBerry = () => 'STRAWBERRY';

const getBerry = (berryExists, dispatch) => {
  if (!berryExists) {
    dispatch(searchForBerry());
    window.setTimeout(() => dispatch(addBerry(randomBerry())), 2500);
  }
};

const BerryContainer = ({ berry, dispatch }) => (
  <div>
    <button onClick={() => getBerry(berry.type, dispatch)}>Get Berry</button>
    {berry.isSearching && 'Searching for berries...'}
    <Berry
      type={berry.type}
      isSelected={berry.isSelected}
      select={() => dispatch(selectBerry())}
    />
  </div>
);

const mapStateToProps = ({ berry }) => ({ berry });

export default connect(mapStateToProps)(BerryContainer);
