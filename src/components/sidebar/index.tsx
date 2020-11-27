import React from 'react';
import { Container, Inner, Title } from './styles/sidebar';

interface ISidebar {
  Title: React.FC;
}
export const Sidebar: React.FC<{ showSidebar: boolean }> & ISidebar = ({
  children,
  ...restProps
}) => {
  const { showSidebar } = restProps;
  return (
    <Container showSidebar={showSidebar}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Sidebar.Title = function SidebarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
export default Sidebar;
