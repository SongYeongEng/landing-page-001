import React from 'react';
import styled from 'styled-components';
import project3 from './project3.png';
import msr from './msr.png';
import lcgh from './lcgh.png';
import vrshop from './vrshop.png';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 3400px;
  margin: 0 auto;
  height: 100vh; /* Set the height to 100% of the viewport height */
`;

const ProductBox = styled.div`
  flex: 1 0 48%;
  margin-bottom: 16px;
  overflow: hidden;
  position: relative;
`;

const ProductImage = styled.img`
  width: 70%;
  height: auto;
  display: block;
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProductBox}:hover & {
    opacity: 1;
  }
`;

const ProductText = styled.p`
  text-align: center;
`;


const ProductShowcase = () => {
  return (
    <ProductContainer>
      <ProductBox>
        <ProductImage src={msr} alt="Platformer game" />
        <ProductOverlay>
          <ProductText>Midnight Snack Run Platformer game</ProductText>
        </ProductOverlay>
      </ProductBox>
      <ProductBox>
        <ProductImage src={vrshop} alt="Vr App" />
        <ProductOverlay>
          <ProductText>Vr Shopping System App</ProductText>
        </ProductOverlay>
      </ProductBox>
      <ProductBox>
        <ProductImage src= {project3} alt="School Projects" />
        <ProductOverlay>
          <ProductText>School Projects</ProductText>
        </ProductOverlay>
      </ProductBox>
      <ProductBox>
        <ProductImage src={lcgh} alt="Product 4" />
        <ProductOverlay>
          <ProductText>Skill Training Progress</ProductText>
        </ProductOverlay>
      </ProductBox>
    </ProductContainer>
  );
};

export default ProductShowcase;
