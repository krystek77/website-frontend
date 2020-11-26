import React from 'react';
import { Topbar } from '../components';
import { ROUTES, MENU } from '../constants';
import { PageLinksContainer, UserLinksContainer } from '../containers';
import { HiMenuAlt2 } from 'react-icons/hi';

export const TopbarContainer = () => {
  return (
    <Topbar>
      <Topbar.Label id='home'>Strona główna</Topbar.Label>
      <Topbar.Logo
        to={ROUTES.HOME}
        title='Strona główna'
        aria-label='Strona główna'
        aria-labelledby='home'
      >
        LOGO
      </Topbar.Logo>
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
