import React from 'react';
import styled from 'styled-components';
import logo from "./logo.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px; 
  padding-bottom: 20px; 
`;

const Container = styled.div`
  width: 2400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px; 

`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`

  display: flex;
  align-items: right;
  gap: 50px;
  margin-right: 0;
  list-style: none;
  font-family: 'Verdana'; 
  font-size: 40px; 
  color: black; 
  padding-top: 150px;
`;

const LogoImage = styled.img`
  display: block;
  width: 200%;
  height: auto;
  background-color: #6E80A2;
  border-radius: 10px;
  padding: 15px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const LogoContainer = styled.div`
 position: relative;
  width: 40%;

  &:hover {
    ${LogoImage} {
      background-color: #6786c2;
      transform: scale(1.1); /* Example: Scale the image slightly on hover */
    }
  }
`;



const ListItem = styled.li``;
//const Button = styled.button``;
const StyledImage = styled.img``;

function Navbar() {
    return (
      <Section>
        <Container>
          <Links>
            <LogoContainer>
              <LogoImage as={StyledImage} src={logo} alt="Logo" />
            </LogoContainer>
          </Links>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Github</ListItem>
              <ListItem>LinkedIn</ListItem>
            </List>
        </Container>
      </Section>
    );
  }
  
  export default Navbar;