import React from 'react';

const getAge = (time, birthTime) => {
  const ageMinutes = Math.ceil((time - birthTime) / 60000);
  return ageMinutes >= 0 ? ageMinutes : 0;
};

const getSize = age => 120 * (1 - (Math.E ** (age/-70))); // y = C(1 - e^-kt)

const AnimalArea = ({ time, animals, toggleFavorite, sortDirection }) => (
  <div>
    {[...animals].sort((a, b) => (
      sortDirection === 'ASCENDING'
        ? -(a.birthTime - b.birthTime)
        : a.birthTime - b.birthTime
    )).map(animal => {
      const age = getAge(time, animal.birthTime);
      const size = getSize(age);
      return (
        <div key={animal.id} onClick={() => toggleFavorite(animal.id)}>
          {animal.favorite && '⭐️'}
          <span style={{ fontSize: `calc(1rem + ${size}px`, 'cursor': 'pointer' }}>
            {animal.image}
          </span>
          {animal.name} Age: {age} min
        </div>
      );
    })}
  </div>
);

export default AnimalArea;
