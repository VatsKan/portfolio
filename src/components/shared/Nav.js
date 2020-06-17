import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: Cornsilk;
  margin: 0;
  padding: 0.5rem 0rem 0.7rem 0rem;
  width: 100%;
  position: fixed;
  bottom: 0; 
  left: 0; 
  `
  //note that left: 0 is a fix as nav bar is slightly off place on other pages otherwise.

const ListItem = styled.li`
  list-style-type: none;
  margin: 0 1rem 0 1rem;
`

const Button = styled.a`
  text-decoration: none;
  color: green;
`

export default function Nav(){
  return(
    <NavContainer>
      <Button as={Link} to="/"><ListItem>Home</ListItem></Button>
      <Button as={Link} to="/about"><ListItem>About</ListItem></Button>
      <Button as={Link} to="/projects"><ListItem>Projects</ListItem></Button>
      <Button as={Link} to="/stack"><ListItem>Stack</ListItem></Button>
    </NavContainer>
    // <NavContainer>
    //   <ListItem>Home</ListItem>
    //   <ListItem>About</ListItem>
    //   <ListItem>Projects</ListItem>
    //   <ListItem>Stack</ListItem>
    // </NavContainer>
    // <NavContainer>
    //   <a href="/">Home</a>
    //   <a href="/about">About</a>
    //   <a href="/projects">Projects</a>
    //   <a href="/stack">Stack</a>
    // </NavContainer>
  )
}
