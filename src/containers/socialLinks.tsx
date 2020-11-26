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
              <List.Label id={`${item.label}_${menu}`}>{item.label}</List.Label>
              <List.RegularLink
                url={item.url}
                menu={menu}
                title={item.label}
                aria-label={item.label}
                aria-labelledby={`${item.label}_${menu}`}
                rel='noopener noreferrer'
                target='_blank'
              >
                {withComponent(item.text)}
              </List.RegularLink>
            </List.Item>
          );
        })}
      </List.Wrapper>
    </List>
  );
};

export default SocialLinksContainer;
