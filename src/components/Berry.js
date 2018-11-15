import React from 'react';

const Berry = ({ berry, isSelected, selectBerry }) => {
  return (
    <span
      onClick={() => berry.type !== 'EMPTY' && selectBerry()}
      style={{
        backgroundColor: isSelected ? 'orange' : '',
        cursor: 'pointer'
      }}
    >
      {berry.image}
      {isSelected && berry.description}
    </span>
  );
};

export default Berry;
