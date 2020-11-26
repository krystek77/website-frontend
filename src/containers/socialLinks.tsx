import React from 'react';
import { List } from '../components';
import { socialLinks } from '../fixtures';
import { withComponent } from '../hoc';

interface ISocialLinksContainer {
  menu?: string | undefined;
}

export const SocialLinksContainer: React.FC<ISocialLinksContainer> = ({
  menu = 'horizontal',
}) => {
  return (
    <List>
      <List.Wrapper menu={menu}>
        {socialLinks.map((item) => {
          return (
            <List.Item key={item.id} menu={menu}>
              <List.Link to={item.url} menu={menu}>
                {withComponent(item.text)}
              </List.Link>
            </List.Item>
          );
        })}
      </List.Wrapper>
    </List>
  );
};

export default SocialLinksContainer;
