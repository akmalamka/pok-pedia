import React from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Details } from './components';

const PokemonList = (): JSX.Element => (
  <Main colorInvert={true}>
    <Container>
      <Details />
    </Container>
  </Main>
);

export default PokemonList;
