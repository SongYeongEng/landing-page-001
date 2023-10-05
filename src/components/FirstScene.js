import React from 'react';
import styled, { keyframes } from 'styled-components';
import Works from './Works'

const moveWave = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(2);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(2);
  }
`;

const WaveWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`;

const WaveWrapperInner = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  background-image: linear-gradient(180deg, #6e9ca0 0%, #26393b 100%);
`;

const Wave = styled.div`
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
`;

const WaveTop = styled(Wave)`
  background-size: 50% 100px;
  animation: ${moveWave} 3s;
  -webkit-animation: ${moveWave} 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  z-index: 15;
  opacity: 0.5;
  position: absolute;
`;

const WaveMiddle = styled(Wave)`
  background-size: 50% 120px;
  animation: ${moveWave} 10s linear infinite;
  z-index: 10;
  opacity: 0.75;
  position: absolute;
`;

const WaveBottom = styled(Wave)`
  background-size: 50% 100px;
  animation: ${moveWave} 15s linear infinite;
  z-index: 5;
  position: absolute;
`;

const DivBoss = styled.div`
  z-index: 20;
  position: relative;
`;

const WaveComponent = () => {
  return (
    <div>
      <DivBoss>
       <Works/>
      </DivBoss>
      <WaveWrapper className="waveWrapper waveAnimation">
        <WaveWrapperInner className="bgTop">
          <WaveTop className="waveTop" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }} />
        </WaveWrapperInner>
        <WaveWrapperInner className="bgMiddle">
          <WaveMiddle className="waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }} />
        </WaveWrapperInner>
        <WaveWrapperInner className="bgBottom">
          <WaveBottom className="waveBottom" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }} />
        </WaveWrapperInner>
      </WaveWrapper>
    </div>
  );
};

export default WaveComponent;