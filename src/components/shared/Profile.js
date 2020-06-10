import React from 'react';
import vatsalAvatar from "../../images/vatsal-avatar.jpg";
import linkedin from "../../images/linkedin.svg";
import cvIcon from "../../images/cv.svg";
import github from "../../images/github.svg";
import styled from 'styled-components'
import resume from '../../images/resume.pdf' 

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
`
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`
const Svg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0%;
`
const Link = styled.a`
  display: block;
  text-align: center;
`
const LinkText = styled.p`
  color: green;
`
export default function Profile(){
  return(
    <ProfileContainer>
      <Link href="https://www.linkedin.com/in/vatsal-kanoria-12891a1a0/" target="_blank" rel="noreferrer">
        <Svg src={linkedin} />
        <LinkText>LinkedIn</LinkText>
      </Link>
      <Link href={resume} target="_blank" rel="noreferrer">
        <Svg src={cvIcon}/>
        <LinkText>CV</LinkText>
      </Link>
      <Link href="https://github.com/VatsKan" target="_blank" rel="noreferrer">
        <Svg src={github} />
        <LinkText>GitHub</LinkText>
      </Link>
      <Link href="/">
        <Avatar  alt="Vatsal Picture" src={vatsalAvatar} />
      </Link>
    </ProfileContainer>
  )
}