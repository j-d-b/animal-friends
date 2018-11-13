import React from 'react';

import Animal from './Animal';

const getAge = (time, birthTime) => {
  const ageMinutes = Math.ceil((time - birthTime) / 60000);
  return ageMinutes >= 0 ? ageMinutes : 0;
};

const getSize = age => 120 * (1 - (Math.E ** (age/-2500))); // y = C(1 - e^-kt)

const Animals = ({ time, animals, toggleFavorite, giveBerry, berry, sortDirection }) => (
  <div>
    {[...animals].sort((a, b) => (
      sortDirection === 'ASCENDING'
        ? -(a.birthTime - b.birthTime)
        : a.birthTime - b.birthTime
    )).map(animal => {
      const age = getAge(time, animal.birthTime);
      return (
        <div key={animal.id}>
          {animal.isFavorite && '⭐️'}
          <Animal
            onClick={() => toggleFavorite(animal.id)}
            name={animal.name}
            isFavorite={animal.isFavorite}
            image={animal.image}
            age={age}
            size={getSize(age)}
            appliedBerries={animal.appliedBerries}
          />
          {berry.isSelected ? <button onClick={() => giveBerry(animal.id, berry.type, berry.effectDuration)}>Give Selected Berry</button> : ''}
        </div>
      );
    })}
  </div>
);

export default Animals;
