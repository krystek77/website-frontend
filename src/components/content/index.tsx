import React from 'react';
import {
  Container,
  Inner,
  Main,
  Aside,
  TitleLink,
  Label,
} from './styles/content';

interface IContent {
  Main: React.FC<{ page?: string }>;
  Aside: React.FC;
  TitleLink: React.FC<{
    to: string;
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Label: React.FC<{ id: string }>;
}

export const Content: React.FC<{ page?: string }> & IContent = ({
  children,
  page,
  ...restProps
}) => {
  return (
    <Container page={page} {...restProps}>
      <Inner page={page} {...restProps}>
        {children}
      </Inner>
    </Container>
  );
};

Content.Main = function ContentMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};
Content.Aside = function ContentMain({ children, ...restProps }) {
  return <Aside {...restProps}>{children}</Aside>;
};
Content.TitleLink = function ContentTitleLink({ children, to, ...restProps }) {
  return (
    <TitleLink to={to} {...restProps}>
      {children}
    </TitleLink>
  );
};
Content.Label = function ContentLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

export default Content;
