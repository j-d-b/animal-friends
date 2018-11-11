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
   default:
    return '';
 }
};

const Berry = ({ type, isSelected, select }) => {
  return (
    <span
      onClick={select}
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
