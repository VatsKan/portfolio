import React from 'react'
import styled from 'styled-components'

import downarrow from "../../assets/icons/downarrow.svg";

import { motion } from "framer-motion";

const Card = styled.div`  
  margin: 0 0 1rem 0;
`

const CardHeader = styled.div`
  background: LightBlue;
`
//change to button?

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

const OpenCloseIcon = styled(motion.img)`
  width: 2rem;
  height: 2rem;
`

const CardBody = styled(motion.div)`
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

// framer motion variants

// this hiddenVariant isn't doing exactly what I want it to
// needs to happen after the cardBodyVariant is complete/or at the same time/or find some other way to do the animation
const hiddenVariant = {
  open: {
    display: "initial", 
  },
  closed: { 
    // transition: {
    //   when: "afterChildren"
    // },
    display: "none",
  },
}

const cardBodyVariant = {
  open: {
    transform: "scaleY(1)",
  },
  closed: { 
    transform: "scaleY(0)",
  },
}

const rotateVariant = {
  open: {
    rotateX: 0
  },
  closed: {
    rotateX: 180
  }
}

export default function ProjectCard({className, ...props}){
    const [openToggle, setOpenToggle] = React.useState(true); 

    const clickHandler = ()=>{
        setOpenToggle(!openToggle)
    }

    return  <Card className={className}>
      {/* note the className prop, is so that the 
      lastCard styling works for styled components 
      in the Projects.js file.
    */}
      <CardHeader onClick={clickHandler}>
        <TitleContainer>
          <ProjectTitle>{props.title}</ProjectTitle>
          <OpenCloseIcon src={downarrow}
             animate={openToggle ? "open" : "closed"}
             variants={rotateVariant}
             transition={{ duration: 0.5 }}
          />
        </TitleContainer>
        <HeaderSubtitleContainer>
          <HeaderSubtitle>{props.date}</HeaderSubtitle>
          <HeaderSubtitle>
            <Span>Website: </Span> 
            <Link href={props.website} target="_blank" rel="noreferrer">{props.website}</Link> 
          </HeaderSubtitle>
        </HeaderSubtitleContainer>
      </CardHeader>
      <motion.div
        animate={openToggle  ? "open" : "closed"}
        variants={hiddenVariant}
      >
        <CardBody
          animate={openToggle ? "open" : "closed"}
          variants={cardBodyVariant}
          >
            <BodyTitle><Span>Organisation:</Span> {props.organisation} </BodyTitle>
            <BodyTitle> <Span>Role:</Span> {props.role} </BodyTitle>
            <BodyText> {props.about} </BodyText> 
            <BodyTitle><Span>Github Frontend:</Span> <Link href={props.githubURL} target="_blank" rel="noreferrer">{props.githubURL}</Link></BodyTitle>
            <BodyTitle><Span>Github Backend:</Span> <Link href={props.githubURL2} target="_blank" rel="noreferrer">{props.githubURL2}</Link></BodyTitle>
            <BodyTitle><Span>Stack:</Span> {props.stack} </BodyTitle>
        </CardBody>
      </motion.div>
    </Card>
}