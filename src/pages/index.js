import React from 'react';
import styled, { injectGlobal } from 'styled-components';

const Container = styled.main`
  display: flex;
  ${'' /* align-items: center; */} justify-content: center;
  height: 95vh;
  overflow: auto;
`;
const Title = styled.h1`
  text-transform: uppercase;
`;
export default () => (
  <Container>
    <Title>Vinyl Vanguard</Title>
  </Container>
);
