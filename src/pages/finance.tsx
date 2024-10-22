import React from 'react';
import { HeroContainer } from '../containers';

export const FinancePage = () => {
  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Finance',
          subtitle: 'Finance subtitle',
          image: { url: '' },
        }}
      />
      <main style={{ marginTop: '45px', padding: '2rem' }}>
        <h1>Finance Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil
        adipisci voluptates modi architecto ratione eligendi provident aut
        explicabo placeat, deserunt nisi, repellat accusamus ut sit soluta.
        Minima, officiis voluptates.
      </main>
    </React.Fragment>
  );
};

export default FinancePage;
