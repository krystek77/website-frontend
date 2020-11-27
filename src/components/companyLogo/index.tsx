import React from 'react';
import { Container, Inner, Logo, Label } from './styles/companyLogo';

interface IComponayLogo {
  Logo: React.FC<{
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
    to: string;
  }>;
  Label: React.FC<{ id: string }>;
}
export const CompanyLogo: React.FC & IComponayLogo = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};
CompanyLogo.Logo = function CompanyLogoLogo({ children, to, ...restProps }) {
  return <Logo to={to}>{children}</Logo>;
};

CompanyLogo.Label = function CompanyLogoLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
export default CompanyLogo;
