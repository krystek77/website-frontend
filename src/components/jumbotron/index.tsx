import React from 'react';
import {
  WrapperLink,
  Pane,
  Title,
  Description,
  ButtonLink,
  Label,
} from './styles/jumbotron';
interface IJumbotron {
  Pane: React.FC;
  Title: React.FC;
  Description: React.FC;
  ButtonLink: React.FC<{
    to: string;
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Label: React.FC<{ id: string }>;
}

export const Jumbotron: React.FC<{
  title: string;
  ['aria-label']: string;
  ['aria-labelledby']: string;
  to: string;
}> &
  IJumbotron = ({ children, to, ...restProps }) => {
  return (
    <WrapperLink to={to} {...restProps}>
      {children}
    </WrapperLink>
  );
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.Description = function JumbotronDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};
Jumbotron.ButtonLink = function JumbotronButtonLink({
  children,
  to,
  ...restProps
}) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
Jumbotron.Label = function JumbotronLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
export default Jumbotron;
