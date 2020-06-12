import React from 'react';
import styled from 'styled-components';

import Nav from './shared/Nav.js';
import Profile from './shared/Profile.js';

const Para = styled.p`
  text-indent: 1.2rem;
`
const FirstPara = styled(Para)`
  text-indent: 0;
`
const LastPara = styled(Para)`
  margin: 0 0 3rem 0;
`

export default function About(props){
  return <>
    <Profile />
    <h1>About</h1>
    <FirstPara>
    I am a driven and enthusiastic software developer interested in developing 
    applications for social good.
    </FirstPara>
    <Para>
    My first coding langauage was a C++ course I did during my Mathematics degree 
    (First Class BSc with Hons) at University of London. I learned here that I loved 
    the logic of programming and satisfaction that comes from problem-solvng.
    </Para>
    <LastPara>
      I decided to learn web development through a selective 
      four month Full-Stack development course with Founders 
      and Coders. I learned a lot of new javascript based 
      technologies in this program through projects, research, 
      agile group work, code reviews and presentations. 
    </LastPara>
    <Nav />
  </>;
}