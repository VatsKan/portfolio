import React from 'react';
import styled from 'styled-components';

import vatsalAvatar from "../../assets/images/vatsal-avatar.jpg";
import linkedin from "../../assets/icons/linkedin.svg";
import cvIcon from "../../assets/icons/cv.svg";
import github from "../../assets/icons/github.svg";
import resume from '../../assets/documents/resume.pdf';

const ProfileContainer = styled.div`
  float: right;
  margin: 0.5rem;
`
const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  text-decoration: none;
  margin: 0.3rem;
  `
const LinkText = styled.p`
  color: green;
  margin: 0;
  @media only screen and (max-width: 600px){
    display: none;
  }
`
const Name = styled.h2`
  margin: 0;
  float: right;
  padding: 0 10px 0 0;
  font-family: Handlee;
  font-size: 1.4rem;
`

export default function Profile(){
  return(
    <ProfileContainer>
      <AvatarContainer>
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
        <Link href="/">
          <Avatar  alt="Vatsal Picture" src={vatsalAvatar} />
        </Link>
      </AvatarContainer>
      <Name>Vatsal Kanoria</Name>
    </ProfileContainer>
  )
}