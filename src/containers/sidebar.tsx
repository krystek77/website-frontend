import React from 'react';
import { Sidebar, CompanyLogo } from '../components';
import {
  PageLinksContainer,
  UserLinksContainer,
  SocialLinksContainer,
} from '../containers';
import { MENU, ROUTES } from '../constants';

export const SidebarContainer = () => {
  return (
    <Sidebar>
      <CompanyLogo>
        <CompanyLogo.Label id='home'>Strona główna</CompanyLogo.Label>
        <CompanyLogo.Logo
          to={ROUTES.HOME}
          title='Strona główna'
          aria-label='Strona główna'
          aria-labelledby='home'
        >
          LOGO
        </CompanyLogo.Logo>
      </CompanyLogo>
      <PageLinksContainer menu={MENU.MENU_V} />
      <UserLinksContainer menu={MENU.MENU_USER_H} />
      <SocialLinksContainer menu={MENU.MENU_SOCIAL_H} />
    </Sidebar>
  );
};
export default SidebarContainer;
