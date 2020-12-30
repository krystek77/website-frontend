import React from 'react';
import { HeroContainer } from '../containers';

export const AboutUsPage = () => {
  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'About Us',
          subtitle: 'About Us subtitle',
          image: { url: '' },
        }}
      />
      <main style={{ marginTop: '45px', padding: '2rem' }}>
        <h1>About Us Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil
        adipisci voluptates modi architecto ratione eligendi provident aut
        explicabo placeat, deserunt nisi, repellat accusamus ut sit soluta.
        Minima, officiis voluptates.
      </main>
    </React.Fragment>
  );
};

export default AboutUsPage;
