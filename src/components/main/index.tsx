import React from 'react';
import { Container, Inner } from './styles/main';

export const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};
export default Main;
