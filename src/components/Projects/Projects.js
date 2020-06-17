import React from 'react';
import styled from 'styled-components';

import Nav from '../shared/Nav.js';
import Header from '../shared/Header.js';
import Card from './Card.js'

const LastCard = styled(Card)`
  margin-bottom: 4.5rem;
`

export default function Projects(){ 
  return (
    <>
      <Header title={"Projects"} />
      <Card />
      <LastCard />
      <Nav />
    </>
  );
}