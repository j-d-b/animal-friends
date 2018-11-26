import React from 'react';
import { connect } from 'react-redux';

import { selectBerry } from '../actions';
import Berry from '../components/Berry';

const mapStateToProps = ({ berry }) => ({
  berry,
  isSelected: berry.isSelected
});

const mapDispatchToProps = dispatch => ({ selectBerry: () => dispatch(selectBerry()) });

export default connect(mapStateToProps, mapDispatchToProps)(Berry);
