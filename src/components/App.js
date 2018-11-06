import React from 'react';

import AddAnimal from '../containers/AddAnimal';
import AnimalsContainer from '../containers/AnimalsContainer';
import ChangeSortDirection from '../containers/ChangeSortDirection';

const App = () => (
  <div>
    <h1>Animal Friends</h1>
    <AddAnimal />
    <ChangeSortDirection />
    <AnimalsContainer />
    <p><i>Click to favorite ⭐️</i></p>
  </div>
);

export default App;
