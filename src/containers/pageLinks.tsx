import React from 'react';
import { pageLinks } from '../fixtures';
import { List } from '../components';

interface IPageLinksContainer {
  menu?: string | undefined;
}

export const PageLinksContainer: React.FC<IPageLinksContainer> = ({
  menu = 'horizontal',
}) => {
  return (
    <List>
      <List.Wrapper menu={menu}>
        {pageLinks.map((item) => {
          return (
            <List.Item key={item.id} menu={menu}>
              <List.Link to={item.url} menu={menu}>
                {item.text}
              </List.Link>
            </List.Item>
          );
        })}
      </List.Wrapper>
    </List>
  );
};
export default PageLinksContainer;
