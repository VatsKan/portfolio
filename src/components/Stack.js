import React from 'react';
import styled from 'styled-components';

import Nav from './shared/Nav.js';
import Header from './shared/Header.js';




import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out`,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

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
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(()=>{
    const startAnimation = setTimeout(()=>{
      setInProp(true);
    }, 1)
    return () => clearTimeout(startAnimation)
  }, [])
  
  return (
    <>
    <Transition in={inProp} timeout={duration}>
    {state => (<div style={{...defaultStyle, ...transitionStyles[state]}}>
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
      </div>)
    }
    </Transition>
    </>
  );
}