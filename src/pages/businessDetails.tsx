import React from 'react';
import { Paragraph } from '../components';
import { withRouter } from 'react-router-dom';

export const BusinessDetailsPage = withRouter(({ ...restProps }) => {
  const { match } = restProps;
  return (
    <React.Fragment>
      <main style={{ marginTop: '45px', padding: '2rem' }}>
        <h2>Gościnność - slug: {match.params.slug}</h2>
        <Paragraph>
          As experts in healthcare laundry solutions, Primus offers a uniquely
          comprehensive and innovative range of hygienic barrier
          washer-extractors to simplify and optimize the setting up of your
          laundry. All our machines are designed with the highest quality
          components to ensure a long lifespan and optimized capacity in
          minimized space.
        </Paragraph>
        <Paragraph>
          Primus machines are a beacon of efficiency and outstanding hygiene to
          ensure user satisfaction. The patented technology developed by Primus,
          specifically for the healthcare industry, provides exquisite
          performance while being user-friendly, and facilitating easy control,
          monitoring and analysis.
        </Paragraph>
      </main>
    </React.Fragment>
  );
});

export default BusinessDetailsPage;
