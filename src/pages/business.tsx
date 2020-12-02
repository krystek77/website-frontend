import React from 'react';
import { JumbotronContainer } from '../containers';
import { Main } from '../components';

export const BusinessPage = () => {
  return (
    <React.Fragment>
      <header style={{ marginTop: '45px', padding: '2rem' }}>
        <h1>Your business Page</h1>
      </header>
      <Main>
        <JumbotronContainer />
      </Main>
    </React.Fragment>
  );
};

export default BusinessPage;
