import React from 'react';
import { TopbarContainer, SidebarContainer } from '../../containers';

export const Layout: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <TopbarContainer
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <SidebarContainer showSidebar={showSidebar} />
      {children}
    </React.Fragment>
  );
};

export default Layout;
