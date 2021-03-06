import React from 'react';

import AddAnimal from '../containers/AddAnimal';
import AddBerry from '../containers/AddBerry';
import ChangeSortDirection from '../containers/ChangeSortDirection';
import BerryContainer from '../containers/BerryContainer';
import AnimalsContainer from '../containers/AnimalsContainer';

const App = () => (
  <div>
    <h1>Animal Friends</h1>
    <AddAnimal />
    <ChangeSortDirection />
    <AddBerry />
    <BerryContainer />
    <AnimalsContainer />
    <p><i>Click a friend to favorite ⭐️</i></p>
  </div>
);

export default App;
