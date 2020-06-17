import React from 'react';

import Nav from '../shared/Nav.js';
import Header from '../shared/Header.js';
import Card from './Card.js'

export default function Projects(){ 
  return (
    <>
      <Header title={"Projects"} />
      <Card />
      <Nav />
    </>
  );
}