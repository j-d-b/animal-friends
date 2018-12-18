import React from 'react';
import styled from '@emotion/styled';

import Title from '../components/Title';
import AddAnimal from '../containers/AddAnimal';
import AddBerry from '../containers/AddBerry';
import ChangeSortDirection from '../containers/ChangeSortDirection';
import BerryContainer from '../containers/BerryContainer';
import AnimalsContainer from '../containers/AnimalsContainer';

const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 2rem;
`;

const AppBox = styled.div`
  max-width: 600px;
  padding: 1rem;
  background-color: white;
  box-shadow: 2px 2px 4px 2px #ddd;
  border-radius: 4px;
  text-align: center;
`;

const App = () => (
  <PageBody>
    <AppBox>
      <Title>Animal Friends</Title>
      <AddAnimal />
      <ChangeSortDirection />
      <AddBerry />
      <BerryContainer />
      <AnimalsContainer />
      <p><i>Click a friend to favorite ⭐️</i></p>
    </AppBox>
  </PageBody>
);

export default App;
