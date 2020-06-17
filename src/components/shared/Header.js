import React from 'react';
import styled from 'styled-components';

import Profile from './Profile.js'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    margin: 0 0 3rem 0;
`

const Title = styled.h1`
    position: relative;
    top: 4rem;
    font-size: 2rem;
    font-family: Merienda;
`

export default function Header({ title }){
    return <HeaderContainer>
        <Title>{title}</Title>
        <Profile/>
    </HeaderContainer>
}