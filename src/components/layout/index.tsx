import React from 'react';
import { TopbarContainer } from '../../containers';
const SidebarContainer = React.lazy(() => import('../../containers/sidebar'));

export const Layout: React.FC = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = React.useState<boolean>(false);
  React.useEffect(() => {
    window.addEventListener('resize', function () {
      setToggleSidebar(false);
    });
  });
  return (
    <React.Fragment>
      <TopbarContainer
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <SidebarContainer toggleSidebar={toggleSidebar} />
      {children}
    </React.Fragment>
  );
};

export default Layout;
