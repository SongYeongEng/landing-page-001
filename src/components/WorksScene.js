import React from 'react'
import Navbar from './Navbar'
import styled from "styled-components"
import bread from './bread.png';
import cloud from './cloud.png';
import './fonts.css';




const Section = styled.div`
 height: 100vh;
 background: linear-gradient(180deg, #ecd8ac 0%, #6e9ca0 100%);
 display: flex;
 flex-direction: column;
 align-content: center;
 justify-content: space-between;
`
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;

`

const Left = styled.div`
flex:5;
padding-bottom: 0%;

`

const Right = styled.div`
flex:5;
`

const Title = styled.h1`
  text-align: right;
  font-size: 80px;
  font-family: 'MonoRegular';
  padding-top: 45%;
  
`


const Img = styled.img`
 width: 100%;
 height: 100%;
`
function WorksScene() {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
         <Title>Hi,I am Yeong Eng and i will code for living.</Title> 
        </Left>
        <Right>

          <Img src={bread} />
        </Right>
      </Container>

    </Section>

  )
}

export default WorksScene