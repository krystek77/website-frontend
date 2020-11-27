import React from 'react';
import { Topbar, CompanyLogo } from '../components';
import { ROUTES, MENU } from '../constants';
import { PageLinksContainer, UserLinksContainer } from '../containers';
import { HiMenuAlt2 } from 'react-icons/hi';

export const TopbarContainer = () => {
  return (
    <Topbar>
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
      <Topbar.Navigation>
        <PageLinksContainer menu={MENU.MENU_H} />
        <UserLinksContainer menu={MENU.MENU_USER_H} />
      </Topbar.Navigation>
      <Topbar.Label id='hamburger'>Show or hide navigation</Topbar.Label>
      <Topbar.Hamburger
        type='button'
        title='Show or hide navigation'
        aria-label='Show or hide navigation'
        aria-labelledby='hamburger'
      >
        <HiMenuAlt2 />
      </Topbar.Hamburger>
    </Topbar>
  );
};
export default TopbarContainer;
