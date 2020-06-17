import React from 'react';
import styled from 'styled-components';

import Nav from './shared/Nav.js';
import Header from './shared/Header.js'
// import Profile from './shared/Profile.js';

const Para = styled.p`
  text-indent: 1.2rem;
  padding: 0 0.4rem 0 0.4rem;
  text-align: justify;
  hyphens: auto;
`

// const FirstPara = styled(Para)`
//   text-indent: 0;
// `

const LastPara = styled(Para)`
  margin: 0 0 3rem 0;
`

const Link = styled.a`
  text-decoration: none;
  color: green;
  hyphens: none;
`

export default function About(){
  return <>
    <Header title={"About"} />
    <Para>
    I am a driven and enthusiastic software developer interested in developing 
    applications for social good.
    </Para>
    <Para>
    My first coding langauage was a C++ course I did during my Mathematics degree 
    (First Class BSc with Hons) at University of London. I learned here that I loved 
    the logic of programming and satisfaction that comes from problem-solvng.
    </Para>
    <LastPara>
      I decided to learn web development through a selective 
      four month Full-Stack development course with Founders 
      and Coders. I learned a lot of new javascript 
      based <Link href={"/Stack"}>technologies</Link> in this program 
      through <Link href={"/Projects"}>projects</Link>, research, 
      agile group work, code reviews and presentations. 
    </LastPara>
    <Nav />
  </>
}