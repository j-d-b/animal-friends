import React from 'react';
import { connect } from 'react-redux';

import Animals from '../components/Animals';
import { toggleFavorite, AnimalTypeFilters } from '../actions';

const { useState, useEffect } = React;

const AnimalContainer = ({ animals, sortDirection, toggleFavorite }) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval30Sec = setInterval(() => setTime(Date.now()), 30000);
    return () => clearInterval(interval30Sec);
  });

  return (
    <Animals
      animals={animals}
      sortDirection={sortDirection}
      toggleFavorite={toggleFavorite}
      time={time}
    />
  );
};

const mapStateToProps = ({ animals, sortDirection }) => ({ animals, sortDirection });

const mapDispatchToProps = dispatch => ({
  toggleFavorite: id => dispatch(toggleFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalContainer);
