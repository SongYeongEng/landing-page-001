import React from 'react';
import styled from 'styled-components';
import logo from "./logo.png";
import linkedin from "./whiteLinkedIn.png"
import github from "./whiteGitHub.svg"
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
  color: white; 
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
  background-color: rgba(235, 235, 235, 0.3); /* Use RGBA for background color with opacity */


 &:hover {
  background-color: rgba(235, 235, 235, 0.7); /* Use RGBA for background color with opacity */

    transition: background-color 0.3s ease; /* Add a smooth transition effect */
  }

  ${(props) =>
    props.hire &&
    `
    background-color:#BB5A5A;
    &:hover {
      background-color: #EA6868;
    }
    
  `}

`;
//const Button = styled.button``;
const StyledImage = styled.img``;

const LinkedInIcon = styled.img`
  width: 30px; /* Set the width of the LinkedIn icon */
  padding-top: 1px;
  height: 80%;
`;

const GithubIcon = styled.img`
  width: 45px; /* Set the width of the LinkedIn icon */
  height: 100%;

`;

const LinkedInLink = styled.a`
  padding: 10px 35px; /* Adjust padding as needed */
  border-radius: 10px; /* Adjust border-radius as needed */
  background-color: rgba(235, 235, 235, 0.3); /* Use RGBA for background color with opacity */


 &:hover {
  background-color: rgba(235, 235, 235, 0.7); /* Use RGBA for background color with opacity */

    transition: background-color 0.3s ease; /* Add a smooth transition effect */
  }
`;

const GithubLink = styled.a`
 padding: 10px 35px; /* Adjust padding as needed */
  border-radius: 10px; /* Adjust border-radius as needed */
  background-color: rgba(235, 235, 235, 0.3); /* Use RGBA for background color with opacity */


 &:hover {
  background-color: rgba(235, 235, 235, 0.7); /* Use RGBA for background color with opacity */

    transition: background-color 0.3s ease; /* Add a smooth transition effect */
  }
`;


function Navbar() {

  const handleHireClick = () => {
    
    window.location.href = 'mailto:esy.minmax@gmail.com';

  };

  
  const handleProjectClick = () => {
    
    const secondPageElement = document.getElementById('secondPage');

    if (secondPageElement) {
      secondPageElement.scrollIntoView({ behavior: 'smooth' });
    }

  };


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
          <ListItem onClick={handleProjectClick}>Projects</ListItem>
          <GithubLink href="https://github.com/SongYeongEng">
            <GithubIcon src={github} alt="Github" />
          </GithubLink>
          <LinkedInLink href="https://www.linkedin.com/in/engsongyeong/">
              <LinkedInIcon src={linkedin} alt="LinkedIn" />
          </LinkedInLink>
          <ListItem hire onClick={handleHireClick}>Hire</ListItem>
        </List>
      </Container>
    </Section>
  );
}

export default Navbar;