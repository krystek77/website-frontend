import React from 'react';
import { CompanyLogo } from '../components';
import { ROUTES, LOGO } from '../constants';

export const CompanyLogoContainer: React.FC<{
  logo?: string;
  toggleSidebar?: boolean;
}> = ({ logo = LOGO.TOPBAR, toggleSidebar = true }) => {
  return (
    <CompanyLogo logo={logo} toggleSidebar={toggleSidebar}>
      <CompanyLogo.Label id='home'>Strona główna</CompanyLogo.Label>
      <CompanyLogo.Logo
        to={ROUTES.HOME}
        title='Strona główna'
        aria-label='Strona główna'
        aria-labelledby='home'
        logo={logo}
      >
        LOGO
      </CompanyLogo.Logo>
    </CompanyLogo>
  );
};

export default CompanyLogoContainer;
