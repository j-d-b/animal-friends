import React from 'react';

const Animal = ({ name, age, size, image, isFavorite, toggleFavorite }) => (
  <div onClick={toggleFavorite}>
    {isFavorite && '⭐️'}
    <span style={{ fontSize: `calc(1rem + ${size}px`, 'cursor': 'pointer' }}>
      {image}
    </span>
    {name} Age: {age} min
  </div>
);

export default Animal;
