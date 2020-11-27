import React from 'react';
import { Topbar } from '../components';
import { LOGO, MENU } from '../constants';
import {
  PageLinksContainer,
  UserLinksContainer,
  CompanyLogoContainer,
} from '../containers';
import { HiMenuAlt2 } from 'react-icons/hi';

export const TopbarContainer = () => {
  return (
    <Topbar>
      <CompanyLogoContainer logo={LOGO.TOPBAR} />
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
