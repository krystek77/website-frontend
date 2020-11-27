import React from 'react';
import { Sidebar } from '../components';
import {
  PageLinksContainer,
  UserLinksContainer,
  SocialLinksContainer,
} from '../containers';
import { MENU } from '../constants';

export const SidebarContainer = () => {
  return (
    <Sidebar>
      <h1>LOGO</h1>
      <PageLinksContainer menu={MENU.MENU_V} />
      <UserLinksContainer menu={MENU.MENU_USER_H} />
      <SocialLinksContainer menu={MENU.MENU_SOCIAL_H} />
    </Sidebar>
  );
};
export default SidebarContainer;
