import React from 'react';
import { List } from '../components';
import { userLinks } from '../fixtures';
import { withComponent } from '../hoc';

interface IUserLinksContainer {
  menu?: string | undefined;
}

export const UserLinksContainer: React.FC<IUserLinksContainer> = ({
  menu = 'horizontal',
}) => {
  return (
    <List>
      <List.Wrapper menu={menu}>
        {userLinks.map((item) => {
          return (
            <List.Item key={item.id} menu={menu}>
              <List.Label id={`${item.label}_${menu}`}>{item.label}</List.Label>
              <List.Link
                to={item.url}
                menu={menu}
                title={item.label}
                aria-label={item.label}
                aria-labelledby={`${item.label}_${menu}`}
              >
                {withComponent(item.text)}
              </List.Link>
            </List.Item>
          );
        })}
      </List.Wrapper>
    </List>
  );
};

export default UserLinksContainer;
