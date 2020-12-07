import React from 'react';
import { useBusiness } from '../hooks';
import { JumbotronContainer } from '../containers';
import { Main } from '../components';

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
      <Main>
        <JumbotronContainer list={businesses} />
      </Main>
    </React.Fragment>
  );
};

export default BusinessPage;
