import React from 'react';

const Animal = ({ name, age, size, image, onClick, appliedBerries }) => (
  <span>
    <span onClick={onClick} style={{ fontSize: `calc(1rem + ${size}px`, 'cursor': 'pointer' }}>
      {image}
    </span>
    <span style={{ color: appliedBerries.includes('STRAWBERRY') && 'red'}}>{name}</span>
    <span> Age: {age} min</span>
  </span>
);

export default Animal;
