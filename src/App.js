import React from 'react';
import FirstScene from './components/FirstScene';
//import './App.css';
import WorkScene from './components/WorksScene';
import styled from "styled-components"


function App() {
  return (
    <div>
      <WorkScene/>
      <WaveSection>
        <FirstScene/>
      </WaveSection>
      

      </div>
  );
}

export default App;

const WaveSection = styled.div`
  position: relative;
  height: 100vh; /* Adjust the height based on your layout */
`;