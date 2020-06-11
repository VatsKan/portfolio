import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: Cornsilk;
  padding: 0.5rem 0rem 0.7rem 0rem;
  margin: 0;
  width: 100%;
  position: fixed;
  bottom: 0; 
`

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
