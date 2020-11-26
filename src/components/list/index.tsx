import React from 'react';
import { Container, Inner, Wrapper, Item, Link } from './styles/list';
interface IList {
  Wrapper: React.FC<{ menu: string }>;
  Item: React.FC<{ menu: string }>;
  Link: React.FC<{
    to: string;
    menu: string;
  }>;
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
export default List;
