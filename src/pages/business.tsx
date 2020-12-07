import React from 'react';
import { useBusiness } from '../hooks';
import { JumbotronContainer } from '../containers';
import { Content } from '../components';
import { PAGES } from '../constants';

export const BusinessPage = () => {
  const { businesses } = useBusiness();
  return (
    <React.Fragment>
      <header
        style={{
          marginTop: '45px',
          padding: '2rem',
          backgroundColor: '#33b2e8',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '350px',
        }}
      >
        <h1>Twój biznes</h1>
      </header>
      <Content page={PAGES.BUSINESSES_PAGE}>
        <main>
          <JumbotronContainer list={businesses} />
        </main>
      </Content>
    </React.Fragment>
  );
};

export default BusinessPage;
