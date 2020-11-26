import React from 'react';
import { Container, Inner } from './styles/sidebar';

interface ISidebar {}
export const Sidebar: React.FC & ISidebar = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default Sidebar;
