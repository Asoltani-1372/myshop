import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


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

const SocialIcon = styled.div`
`    

const SocialContainer = styled.div`
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