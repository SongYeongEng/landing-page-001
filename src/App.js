import React from 'react';
import FirstScene from './components/FirstScene';
//import './App.css';
import WorkScene from './components/WorksScene';
import styled from "styled-components"

const Container = styled.div`
 height: 100vh;
 background-color: red;
`

function App() {
  return (
    <Container>
      <WorkScene/>
    </Container>
  );
}

export default App;
