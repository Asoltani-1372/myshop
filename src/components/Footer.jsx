import React from 'react'
import styled from 'styled-components'
import {FacebookIcon , InstagramIcon , TwitterIcon } from '@mui/icons-material/Facebook';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
` 
const Left = styled.div`
    flex : 1;
    ` 
const Logo = styled.h1`
    
    `

const Right = styled.div`
        flex: 1;
    ` 
    
const Center = styled.div`
        flex: 1;
    ` 
const Desc = styled.div`

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Myshop
            </Logo>
            <Desc>this is my description</Desc>
            <SocialContainer>
                <SocialIcon>
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon>
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer