import React, { useState } from 'react';
import { connect } from 'react-redux';
import nanoid from 'nanoid';

import { addAnimal } from '../actions';

const animalOptions = ['🐕', '🐈', '🐟', '🐍', '🐖', '🐑', '🐓', '🦔'];

const AddAnimal = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(animalOptions[0]);

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(addAnimal(name, image));
        setName('');
      }}>
        <span>New Friend: </span>
        <input
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          value={name}
          required
        />

        <span> Type: </span>
        <select value={image} onChange={e => setImage(e.target.value)}>
          {animalOptions.map(animal => <option key={animal} value={animal}>{animal}</option>)}
        </select>

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default connect()(AddAnimal);
