import React from 'react';
import { Container, Inner } from './styles/spinner';
export const Spinner: React.FC = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};
export default Spinner;
