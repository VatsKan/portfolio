import React from 'react'
import Nav from './shared/Nav.js';

export default function Error(){
  return (
    <>
      <h1>This route doesn't exist. Return <a href="/">Home</a></h1>
      <Nav />
    </>
  )
}