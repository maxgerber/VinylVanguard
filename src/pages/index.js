import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import MainFont from '../assets/fonts/main-font.ttf';
import SplashImage from '../assets/images/looking-for-vinyl.png';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');
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
  margin: 2rem 0 0 0;
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
  line-height: 0.7;
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
  padding: 1rem 2rem;
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

const ButtonContainer = styled.nav`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 3rem;
`;

const AddressHeading = styled.section`
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 1.8rem;
  letter-spacing: 0.05rem;
  margin: 3rem 0 0.5rem 0;
  text-align: center;
`;

export default () => (
  <Container>
    <Title>Vinyl Vanguard</Title>
    <Subtitle>Stylus over Substance</Subtitle>
    <AddressHeading>
      Wood Street Indoor Market, Walthamstow, London E17 3HX
    </AddressHeading>
    <BackgroundImg src={SplashImage}>
      <ButtonContainer>
        <Button text="Buy/Sell" />
        <Button text="About Us" />
      </ButtonContainer>
    </BackgroundImg>
  </Container>
);
