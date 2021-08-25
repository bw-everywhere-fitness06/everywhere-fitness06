import React from 'react';
import styled from 'styled-components';
import Logoimage from '../assets/logo.jpg'

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 50px;
    height: 50px;

    img{
        width: 6%;
        height: 7%;
    }
`;

const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color: #222;
    font-weight: 500;
`;

export function Logo(props) {
    return <LogoWrapper>
        <LogoImg><img src={Logoimage} alt="Fitness logo" /></LogoImg>
        <LogoText>The Future of Fitness</LogoText>
    </LogoWrapper>
}