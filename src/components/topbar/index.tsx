import React from 'react';
import {
  Container,
  Inner,
  Logo,
  Navigation,
  Hamburger,
  Label,
} from './styles/topbar';
interface ITopbar {
  Logo: React.FC<{
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
    to: string;
  }>;
  Navigation: React.FC;
  Hamburger: React.FC<{
    type: 'button';
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Label: React.FC<{ id: string }>;
}
export const Topbar: React.FC & ITopbar = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

Topbar.Logo = function TopbarLogo({ children, to, ...restProps }) {
  return <Logo to={to}>{children}</Logo>;
};
Topbar.Navigation = function TopbarNavigation({ children, ...restProps }) {
  return <Navigation>{children}</Navigation>;
};

Topbar.Label = function TopbarLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
Topbar.Hamburger = function TopbarHamburger({ children, ...restProps }) {
  return <Hamburger {...restProps}>{children}</Hamburger>;
};

export default Topbar;
