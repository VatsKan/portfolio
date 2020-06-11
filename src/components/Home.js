import React from 'react';
import Nav from './shared/Nav.js'
import styled from 'styled-components';

import vatsalPic from "../assets/images/vatsal-pic.jpg";
import linkedin from "../assets/icons/linkedin.svg";
import cvIcon from "../assets/icons/cv.svg";
import github from "../assets/icons/github.svg";
import resume from '../assets/documents/resume.pdf';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Name = styled.h1`
  margin: 3rem 0 0 0;
  font-family: Handlee;
  font-size: 2rem;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 800px){
    width: 60vw;
    min-width: 240px;
  }
`
const MainPic = styled.img`
  border-radius: 50%;
  margin: 1rem;
  width: 35vw;
  height: 35vw;
  @media only screen and (max-width: 800px){
    width: 70vw;
    height: 70vw;
  }
`
const Svg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0%;
`
const Link = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  margin: 0.5rem;
`
const LinkText = styled.p`
  color: green;
  margin: 0;
`


export default function Home(props){
  return (
    <HomeContainer>
      <Name>Vatsal Kanoria</Name>
      <MainPic  alt="Vatsal Picture" src={vatsalPic} />
      <LinkContainer>
        <Link href={resume} target="_blank" rel="noreferrer">
          <Svg src={cvIcon}/>
          <LinkText>CV</LinkText>
        </Link>
        <Link href="https://www.linkedin.com/in/vatsal-kanoria-12891a1a0/" target="_blank" rel="noreferrer">
          <Svg src={linkedin} />
          <LinkText>LinkedIn</LinkText>
        </Link>
        <Link href="https://github.com/VatsKan" target="_blank" rel="noreferrer">
          <Svg src={github} />
          <LinkText>GitHub</LinkText>
        </Link>
      </LinkContainer>
      <Nav />
    </HomeContainer>
  );
} 


