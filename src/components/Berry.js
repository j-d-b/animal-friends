import React from 'react';

const BerryImage = ({ type }) => {
  switch (type) {
    case 'STRAWBERRY':
      return '🍓';
    default:
      return '';
  }
};

const BerryDescription = ({ type }) => {
  switch (type) {
    case 'STRAWBERRY':
      return 'A classic treat known for its bright red color';
    case 'EMPTY':
      return '';
    default:
      return '';
  }
};

const Berry = ({ type, isSelected, selectBerry }) => {
  return (
    <span
      onClick={() => type !== 'EMPTY' && selectBerry()}
      style={{
        backgroundColor: isSelected ? 'orange' : '',
        cursor: 'pointer'
      }}
    >
      <BerryImage type={type} />
      {isSelected && <BerryDescription type={type} />}
    </span>
  );
};

export default Berry;
