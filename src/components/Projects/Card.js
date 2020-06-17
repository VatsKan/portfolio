import React from 'react'
import styled from 'styled-components'

import downarrow from "../../assets/icons/downarrow.svg";

const Card = styled.div`
  background: LightBlue;
`

const CardHeader = styled.div``

const ProjectTitle = styled.h3`
  margin: 0.5rem 0 0 0;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.5rem 0 0.5rem;
`

const HeaderSubtitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
const HeaderSubtitle = styled.p`
  padding: 0 0 0 0.5rem;
  font-style: italic;
  margin: 0.5rem 0;
`
const Span = styled.span`
  font-weight: bold;
`
const OpenIcon = styled.img`
`
// width: 1.3rem;
// height: 1.3rem;

const CloseIcon = styled(OpenIcon)`
  transform: rotate(180deg); 
`
const CardBody = styled.div`
  background: MintCream;
  padding: 0.5rem;
`
const BodyTitle = styled.p`
  margin: 0
`
const BodyText = styled.p`
  font-style: italic;
`

const Link = styled.a`
  color: green;
`

export default function ProjectCard(){
    const open = true; //change to a state

    return  <Card>
    <CardHeader>
      <TitleContainer>
        <ProjectTitle>Cardley</ProjectTitle>
        {open ? <OpenIcon src={downarrow}/> : <CloseIcon src={downarrow}/>}
      </TitleContainer>
      <HeaderSubtitleContainer>
        <HeaderSubtitle>May 2020 </HeaderSubtitle>
        <HeaderSubtitle><Span>Website:</Span> http://netlify </HeaderSubtitle>
      </HeaderSubtitleContainer>
    </CardHeader>
    <CardBody>
      <BodyTitle> <Span>Role:</Span> Scrum Master</BodyTitle>
        <BodyTitle><Span>Organisation:</Span> Founders and Coders</BodyTitle>
        <BodyText>Created a REACT flash card application and a RESTful API backend in an agile team. Implemented SCRUM methadologies for group work and user research. Designed the application using Figma prototyping.</BodyText> 
        <BodyTitle><Span>Github Backend:</Span> <Link href={"https://github.com/fac19/Cardley---backend"} target="_blank" rel="noreferrer">https://github.com/fac19/Cardley---backend</Link></BodyTitle>
        <BodyTitle><Span>Github Frontend:</Span> <Link href={"https://github.com/fac19/Cardley"} target="_blank" rel="noreferrer">https://github.com/fac19/Cardley</Link></BodyTitle>
        <BodyTitle><Span>Stack:</Span> React | Jest | Node | Express | postgreSQL | Travis | Heroku | Netlify | Git | GitHub | Figma</BodyTitle>
    </CardBody>
  </Card>
}