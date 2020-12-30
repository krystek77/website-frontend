import React from 'react';
import { pageLinks } from '../fixtures';
import { List } from '../components';
import { MENU } from '../constants';

interface IPageLinksContainer {
  menu?: string | undefined;
}

export const PageLinksContainer: React.FC<IPageLinksContainer> = ({
  menu = MENU.MENU_H,
}) => {
  return (
    <List>
      <List.Wrapper menu={menu}>
        {pageLinks.map((item) => {
          return (
            <List.Item key={item.id} menu={menu}>
              <List.Label id={`${item.label}_${menu}`}>{item.label}</List.Label>
              <List.NavLink
                to={item.url}
                menu={menu}
                title={item.label}
                aria-label={item.label}
                aria-labelledby={`${item.label}_${menu}`}
                activeClassName='active'
              >
                {item.text}
              </List.NavLink>
            </List.Item>
          );
        })}
      </List.Wrapper>
    </List>
  );
};
export default PageLinksContainer;
