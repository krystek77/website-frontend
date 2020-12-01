import React from 'react';
import { Layout } from '../components';
const SliderContainer = React.lazy(() => import('../containers/slider'));

export const HomePage = () => {
  return (
    <Layout>
      <SliderContainer />
      <main>
        <h1>Home Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil
        adipisci voluptates modi architecto ratione eligendi provident aut
        explicabo placeat, deserunt nisi, repellat accusamus ut sit soluta.
        Minima, officiis voluptates.
      </main>
    </Layout>
  );
};

export default HomePage;
