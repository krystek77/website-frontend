import React from 'react';
import { Container, Inner, Title } from './styles/sidebar';

interface ISidebar {
  Title: React.FC;
}
export const Sidebar: React.FC<{ toggleSidebar: boolean }> & ISidebar = ({
  children,
  ...restProps
}) => {
  const { toggleSidebar } = restProps;
  return (
    <Container toggleSidebar={toggleSidebar}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Sidebar.Title = function SidebarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
export const MemoizedSidebar: React.FC<{ toggleSidebar: boolean }> = React.memo(
  Sidebar
);
export default MemoizedSidebar;
