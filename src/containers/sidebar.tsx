import React from 'react';
import { Sidebar } from '../components';
import {
  PageLinksContainer,
  UserLinksContainer,
  SocialLinksContainer,
  CompanyLogoContainer,
} from '../containers';
import { MENU, LOGO } from '../constants';

export const SidebarContainer = ({ showSidebar = false }) => {
  return (
    <Sidebar showSidebar={showSidebar}>
      <CompanyLogoContainer logo={LOGO.SIDEBAR} />
      <PageLinksContainer menu={MENU.MENU_V} />
      <UserLinksContainer menu={MENU.MENU_USER_H} />
      <SocialLinksContainer menu={MENU.MENU_SOCIAL_H} />
    </Sidebar>
  );
};
export default SidebarContainer;
