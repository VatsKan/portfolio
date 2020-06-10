import React from 'react';
import Nav from './shared/Nav.js';
import Profile from './shared/Profile.js'

export default function Stack(props){
  return (
    <>
      <Profile />
      <h1>Stack</h1>
      <Nav />
    </>
  );
}