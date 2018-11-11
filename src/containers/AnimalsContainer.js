import React from 'react';
import { connect } from 'react-redux';

import Animals from '../components/Animals';
import { toggleFavorite, giveBerry } from '../actions';

const { useState, useEffect } = React;

const AnimalContainer = ({ animals, berry, sortDirection, toggleFavorite, giveBerry }) => {
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
      giveBerry={giveBerry}
      time={time}
      berry={berry}
    />
  );
};

const mapStateToProps = ({ animals, sortDirection, berry }) => ({ animals, sortDirection, berry });

const mapDispatchToProps = dispatch => ({
  toggleFavorite: animalId => dispatch(toggleFavorite(animalId)),
  giveBerry: (animalId, berryType) => dispatch(giveBerry(animalId, berryType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalContainer);
