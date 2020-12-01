import React from 'react';
import { Topbar } from '../components';
import { LOGO, MENU } from '../constants';
import {
  PageLinksContainer,
  UserLinksContainer,
  CompanyLogoContainer,
} from '../containers';
import { HiMenuAlt2, HiMenuAlt3 } from 'react-icons/hi';

interface ITopbarContainer {
  toggleSidebar: boolean;
  setToggleSidebar: (toggleSidebar: boolean) => void;
}
export const TopbarContainer: React.FC<ITopbarContainer> = ({
  toggleSidebar = true,
  setToggleSidebar,
  ...restProps
}) => {
  return (
    <Topbar>
      <CompanyLogoContainer logo={LOGO.TOPBAR} toggleSidebar={toggleSidebar} />
      <Topbar.Navigation>
        <PageLinksContainer menu={MENU.MENU_H} />
        <UserLinksContainer menu={MENU.MENU_USER_H} logo={LOGO.TOPBAR} />
      </Topbar.Navigation>
      <Topbar.Label id='hamburger'>Show or hide navigation</Topbar.Label>
      <Topbar.Hamburger
        type='button'
        title='Show or hide navigation'
        aria-label='Show or hide navigation'
        aria-labelledby='hamburger'
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        {toggleSidebar ? <HiMenuAlt3 /> : <HiMenuAlt2 />}
      </Topbar.Hamburger>
    </Topbar>
  );
};

export default TopbarContainer;
