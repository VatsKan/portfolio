import React from 'react';

import Nav from './shared/Nav.js';
import Header from './shared/Header.js';
import styled from 'styled-components';
import downarrow from "../assets/icons/downarrow.svg";

const Card = styled.div`
  background: LightBlue;
`
const CardHeader = styled.div``
const ProjectTitle = styled.h3``

const TitleContainer = styled.div`
  display: flex;
`

const HeaderSubtitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
const HeaderSubtitle = styled.h4`
  padding: 0 0 0 0.5rem;
`
const Span = styled.span``
const OpenIcon = styled.img``
const CloseIcon = styled.img`
  transform: rotate(180deg); 
`
const CardBody = styled.div`
  background: MintCream;
`
const BodyTitle = styled.h4``
const BodyText = styled.p``

export default function Projects(){
  const open = true; //change to a state

  //turn Card into a component and all info as props. 
  return (
    <>
      <Header title={"Projects"} />
      <Card>
        <CardHeader>
          <TitleContainer>
            <ProjectTitle>Cardley</ProjectTitle>
            {open ? <OpenIcon src={downarrow}/> : <CloseIcon src={downarrow}/>}
          </TitleContainer>
          <HeaderSubtitleContainer>
            <HeaderSubtitle><Span>Website:</Span> http://netlify </HeaderSubtitle>
            <HeaderSubtitle><Span>Date:</Span> May 2020 </HeaderSubtitle>
          </HeaderSubtitleContainer>
        </CardHeader>
        <CardBody>
          <BodyTitle> <Span>Role:</Span> Scrum Master</BodyTitle>
            <BodyTitle><Span>Organisation:</Span> Founders and Coders</BodyTitle>
            <BodyTitle><Span>Github Backend:</Span> url</BodyTitle>
            <BodyTitle><Span>Github Frontend:</Span> url</BodyTitle>
            <BodyText>Created a REACT flash card application and a RESTful API backend in an agile team. Implemented SCRUM methadologies for group work and user research. Designed the application using Figma prototyping.</BodyText> 
            <BodyTitle><Span>Stack:</Span> REACT, JEST, NODE/EXPRESS, POSTGRESQL, TRAVIS, HEROKU, NETLIFY, GIT + GITHUB, Figma.</BodyTitle>
        </CardBody>
      </Card>
      <Nav />
    </>
  );
}