import React from 'react';
import styled from 'styled-components';

import Nav from './shared/Nav.js';
import Header from './shared/Header.js';

const SubHeader = styled.h3`
color: lightgrey;
font-size: 1.1rem;
font-variant: small-caps;
display: inline;
` 

// change p to ul?
const List = styled.p`
display: inline;
font-variant: small-caps;

` 

const ListItem = styled.li`
text-align: center;
padding-bottom: 0.2rem;
`

const BigList = styled.ol`
list-style: none;
`

export default function Stack(){  
  return (
    <>
      <Header title={"Stack"} />
      <BigList>
        <ListItem>
          <SubHeader>Languages. </SubHeader>
          <List>Javascript, HTML, CSS, SQL, C++. </List>
        </ListItem>
        <ListItem>
          <SubHeader>Frontend Frameworks. </SubHeader>
          <List>React, Vue. </List>
        </ListItem>
        <ListItem>
          <SubHeader>Backend Frameworks. </SubHeader>
          <List>Node, Express. </List>
        </ListItem>
        <ListItem>
          <SubHeader>Databases. </SubHeader>
          <List>PostgreSQL. </List>
        </ListItem>
        <ListItem>
          <SubHeader>Management. </SubHeader>
          <List>Git, GitHub, Agile. </List>
        </ListItem>
        <ListItem>
          <SubHeader>Testing. </SubHeader>
          <List>Jest, Tape, Cypress, Chai, Mocha, CodeCov, ESLint. </List>
        </ListItem>
        <ListItem>
          <SubHeader>CI/CD. </SubHeader>
          <List>TravisCI, Heroku, Netlify. </List>
        </ListItem>
        <ListItem>
          <SubHeader>Serverless. </SubHeader>
          <List>Airtable, Netlify Lambda, Firebase. </List>
        </ListItem>
        <ListItem>
          <SubHeader>UI/UX. </SubHeader>
          <List>Figma, d3, styled-components, Bootstrap, MaterialUI. </List>
        </ListItem>
      </BigList>
      <Nav />
    </>
  );
}