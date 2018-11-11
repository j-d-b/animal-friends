import React from 'react';
import { connect } from 'react-redux';

import { addBerry, selectBerry } from '../actions';
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

const BerryContainer = ({ berry, dispatch }) => (
  <div>
    <button onClick={() => !berry.type && dispatch(addBerry('STRAWBERRY'))}>Get Berry</button>
    <Berry
      type={berry.type}
      isSelected={berry.isSelected}
      select={() => dispatch(selectBerry())}
    />
  </div>
);

const mapStateToProps = ({ berry }) => ({ berry });

export default connect(mapStateToProps)(BerryContainer);
