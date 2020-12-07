import React from 'react';
import { useBusiness } from '../hooks';
import { JumbotronContainer, HeroContainer } from '../containers';
import { Content } from '../components';
import { PAGES } from '../constants';

export const BusinessPage = () => {
  const { businesses } = useBusiness();
  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Business',
          subtitle: 'Business subtitle',
          image: { url: '' },
        }}
      />
      <Content page={PAGES.BUSINESSES_PAGE}>
        <main>
          <JumbotronContainer list={businesses} />
        </main>
      </Content>
    </React.Fragment>
  );
};

export default BusinessPage;
