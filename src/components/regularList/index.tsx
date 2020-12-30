import React from 'react';
import { Container, Inner, List, Item } from './styles/regularList';
interface IRegularList {
  List: React.FC;
  Item: React.FC;
}
export const RegularList: React.FC & IRegularList = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

RegularList.List = function RegularListList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
RegularList.Item = function RegularListItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

export default RegularList;
