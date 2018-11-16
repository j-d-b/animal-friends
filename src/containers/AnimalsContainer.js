import React from 'react';
import { connect } from 'react-redux';

import Animals from '../components/Animals';
import { pruneBerries, toggleFavorite, giveBerry } from '../actions';

const { useState, useEffect } = React;

const AnimalContainer = ({ animals, berry, sortDirection, toggleFavorite, giveBerry, pruneBerries }) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    pruneBerries(time);
    const interval30Sec = setInterval(() => {
      setTime(Date.now());
      pruneBerries(time);
    }, 30000);
    return () => clearInterval(interval30Sec);
  }, []);

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
  giveBerry: (animalId, berry) => dispatch(giveBerry(animalId, berry.type, berry.effectDuration)),
  pruneBerries: currTime => dispatch(pruneBerries(currTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalContainer);
