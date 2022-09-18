import React from 'react'
import styled from 'styled-components'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
`
const Button = styled.button`
    flex: 1;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>this is my fav product</Desc>
        <InputContainer>
            <Input placeholder='Email' />
            <Button>
                <IosShareOutlinedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter