import React from 'react';
import {
  Container,
  Inner,
  Wrapper,
  Item,
  Link,
  NavLink,
  RegularLink,
  Label,
} from './styles/list';
interface IList {
  Wrapper: React.FC<{ menu: string }>;
  Item: React.FC<{ menu: string }>;
  Link: React.FC<{
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
    to: string;
    menu: string;
  }>;
  NavLink: React.FC<{
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
    to: string;
    menu: string;
    activeClassName: string;
  }>;
  RegularLink: React.FC<{
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
    url: string;
    rel?: string;
    target?: string;
    menu: string;
  }>;
  Label: React.FC<{ id: string }>;
}
export const List: React.FC & IList = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

List.Wrapper = function ListWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

List.Item = function ListItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

List.Link = function ListLink({ children, to, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

List.NavLink = function ListNavLink({ children, to, ...restProps }) {
  return (
    <NavLink to={to} {...restProps}>
      {children}
    </NavLink>
  );
};

List.RegularLink = function ListRegularLink({ children, url, ...restProps }) {
  return (
    <RegularLink href={url} {...restProps}>
      {children}
    </RegularLink>
  );
};

List.Label = function ListLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

export default List;
