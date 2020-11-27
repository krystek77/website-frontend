import React from 'react';
import { Container, Inner, Title } from './styles/sidebar';

interface ISidebar {
  Title: React.FC;
}
export const Sidebar: React.FC & ISidebar = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

Sidebar.Title = function SidebarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
export default Sidebar;
