import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
` 
const Left = styled.div`
    flex : 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    ` 
const Logo = styled.h1`
    
    `

const Desc = styled.p`
    margin: 20px 0;
`    

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
        flex: 1;
        padding: 2px;
    ` 

const Title = styled.div`
margin-bottom: 30px;
`

const List = styled.h3`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
        flex: 1;
        padding: 2px;
    ` 
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`   

const Payment = styled.img`
width: 50%;
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
                <SocialIcon color='385999'>
                    <FacebookIcon  />
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>UseFullLinks</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fasion</ListItem>
                <ListItem>Women Fasion</ListItem>
                <ListItem>Accesory</ListItem>
                <ListItem>My Accoun</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Term</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{marginRight :"10px"}} />address</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight :"10px"}} />1212312321</ContactItem>
            <ContactItem><EmailIcon style={{marginRight :"10px"}} />soltaniali.1994@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer