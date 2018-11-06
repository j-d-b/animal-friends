import React from 'react';
import { connect } from 'react-redux';

import AnimalArea from '../components/AnimalArea';
import { toggleFavorite, AnimalTypeFilters } from '../actions';

const { useState, useEffect } = React;

const AnimalContainer = (props) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval30Sec = setInterval(() => setTime(Date.now()), 30000);
    return () => clearInterval(interval30Sec);
  });

  return <AnimalArea {...props} time={time} />;
};

const mapStateToProps = ({ animals, sortDirection }) => ({ animals, sortDirection });

const mapDispatchToProps = dispatch => ({
  toggleFavorite: id => dispatch(toggleFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalContainer);
