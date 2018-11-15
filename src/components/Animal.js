import React from 'react';

const Animal = ({ name, age, size, image, onClick, appliedBerries }) => {
  const hasBerry = berryType => appliedBerries.some(({ type }) => type === berryType);

  return (
    <span>
      <span onClick={onClick} style={{ fontSize: `calc(1rem + ${size}px`, 'cursor': 'pointer' }}>
        <span style={
          {
            display: 'inline-block',
            transform: hasBerry('SPINBERRY') && 'rotate(180deg)',
            boxShadow: hasBerry('STARBERRY') && '0 0 15px gold'
          }}
        >
          {image}
        </span>
      </span>
      {hasBerry('CHERRY') && '😊'}
      <span style={{ color: hasBerry('STRAWBERRY') && 'red'}}>{name}</span>
      <span> Age: {age} min</span>
    </span>
  );
};

export default Animal;
