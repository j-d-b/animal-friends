import React from 'react';
import { connect } from 'react-redux';

import { changeSortDirection } from '../actions';

const ChangeSortDirection = ({ sortDirection, dispatch }) => (
  <div>
    <span>Sort Age: </span>
    <button onClick={() => dispatch(changeSortDirection())}>{sortDirection}</button>
  </div>
);

const mapStateToProps = ({ sortDirection }) => ({ sortDirection });

export default connect(mapStateToProps)(ChangeSortDirection);
