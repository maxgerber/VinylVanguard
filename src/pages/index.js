import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import MainFont from '../assets/fonts/main-font.ttf';
import SplashImage from '../assets/images/looking-for-vinyl.png';

injectGlobal`
  @font-face {
    font-family: 'DIN Condensed Bold';
    src: url('${MainFont}');
  };
  :root {
    --blue: #0088B2;
    --black: #333333;
  }

  body {
    font-family: 'DIN Condensed Bold', sans-serif;
    margin: 0;
  }
`;

const Container = styled.main`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;
const Title = styled.h1`
  font-size: calc(2rem + 4vw);
  margin: 1rem 0 0 0;
  text-align: center;
  color: var(--black);
  text-transform: uppercase;
`;
const Subtitle = styled.h2`
  font-size: calc(1.5rem + 1.5vw);
  margin: 0;
  text-align: center;
  text-transform: lowercase;
  color: var(--blue);
`;
const BackgroundImg = styled.div`
  background: url("${props => (props.src ? props.src : '')}");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 1rem 0;
  width: 100vw;
  height: 45vw;
`;
const ButtonElement = styled.button`
  font-family: var(--MainFont);
  font-size: calc(1rem + 3vw);
  padding: 0.5rem 1.5rem;
  margin: 0 1.5rem;
  border-radius: 5%;
  text-transform: uppercase;
  border: none;
  background-color: white;
  cursor: pointer;
  color: var(--black);

  &:hover {
    background-color: var(--blue);
    color: white;
  }
`;
const ButtonText = styled.span`
  vertical-align: -webkit-baseline-middle;
`;

const Button = ({ text }) => {
  return (
    <ButtonElement>
      <ButtonText>{text}</ButtonText>
    </ButtonElement>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 3rem;
`;

export default () => (
  <Container>
    <Title>Vinyl Vanguard</Title>
    <Subtitle>Stylus over Substance</Subtitle>
    <BackgroundImg src={SplashImage}>
      <ButtonContainer>
        <Button text="Buy" />
        <Button text="Sell" />
      </ButtonContainer>
    </BackgroundImg>
  </Container>
);
