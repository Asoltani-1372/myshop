import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'


const Container = styled.div`
`
const ImageContainer = styled.div`
`
const Wrapper = styled.div`
    
`
const Image = styled.img`
`
const InfoContainer = styled.div`
`
const Tittle = styled.h1`
`
const Desc = styled.p`
`
const Price = styled.span`
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Tittle>Product Title</Tittle>
                <Desc>this is product Decribtion</Desc>
                <Price></Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>    
  )
}

export default Product