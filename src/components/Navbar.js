import React from 'react';
import styled from 'styled-components';
import logo from "./logo.png";
import linkedin from "./linkedin.png"
import github from "./github.png"
import './fonts.css';

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px; 
  padding-bottom: 20px; 
`;

const Container = styled.div`
  width: 3400px;
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
  font-family: 'MonoRegular', sans-serif;
  font-size: 30px; 
  color: black; 
  padding-top: 150px;
`;

const LogoImage = styled.img`
  display: block;
  width: 180%;
  height: auto;
  background-color: #6E80A2;
  border-radius: 10px;
  padding: 15px;
  min-width: 350px;
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


const ListItem = styled.li`
  padding: 10px 35px; /* Adjust padding as needed */
  border-radius: 10px; /* Adjust border-radius as needed */
  background-color: #E1CC8A;

 &:hover {
    background-color: #e0e0e0; /* Change background color on hover */
    transition: background-color 0.3s ease; /* Add a smooth transition effect */
  }
`;
//const Button = styled.button``;
const StyledImage = styled.img``;

const LinkedInIcon = styled.img`
  width: 30px; /* Set the width of the LinkedIn icon */
  height: auto;
`;

const GithubIcon = styled.img`
  width: 30px; /* Set the width of the LinkedIn icon */
  height: auto;
`;

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
              <ListItem>
              <GithubIcon src={github} alt="Github" />
              </ListItem>
              <ListItem>
                <LinkedInIcon src={linkedin} alt="LinkedIn" />
              </ListItem>
            </List>
        </Container>
      </Section>
    );
  }
  
  export default Navbar;