import React from 'react';
import { MemoizedSidebar } from '../components';
import {
  PageLinksContainer,
  UserLinksContainer,
  SocialLinksContainer,
  CompanyLogoContainer,
} from '../containers';
import { MENU, LOGO } from '../constants';

export const SidebarContainer: React.FC<{ toggleSidebar: boolean }> = ({
  toggleSidebar = false,
}) => {
  return (
    <MemoizedSidebar toggleSidebar={toggleSidebar}>
      <CompanyLogoContainer logo={LOGO.SIDEBAR} />
      <PageLinksContainer menu={MENU.MENU_V} />
      <UserLinksContainer menu={MENU.MENU_USER_H} logo={LOGO.SIDEBAR} />
      <SocialLinksContainer menu={MENU.MENU_SOCIAL_H} />
    </MemoizedSidebar>
  );
};
export const MemoizedSidebarContainer: React.FC<{
  toggleSidebar: boolean;
}> = React.memo(SidebarContainer);
export default MemoizedSidebarContainer;
