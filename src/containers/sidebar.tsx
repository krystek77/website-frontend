import React from 'react';
import { Sidebar } from '../components';
import {
  PageLinksContainer,
  UserLinksContainer,
  SocialLinksContainer,
  CompanyLogoContainer,
} from '../containers';
import { MENU, LOGO } from '../constants';

export const SidebarContainer = ({ toggleSidebar = false }) => {
  return (
    <Sidebar toggleSidebar={toggleSidebar}>
      <CompanyLogoContainer logo={LOGO.SIDEBAR} />
      <PageLinksContainer menu={MENU.MENU_V} />
      <UserLinksContainer menu={MENU.MENU_USER_H} logo={LOGO.SIDEBAR} />
      <SocialLinksContainer menu={MENU.MENU_SOCIAL_H} />
    </Sidebar>
  );
};
export default SidebarContainer;
