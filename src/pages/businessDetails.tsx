import React from 'react';
import { Paragraph } from '../components';
import { withRouter } from 'react-router-dom';

type Item = {
  id: number;
  title: string;
  Description: string;
  image: { url: string; alternativeText: string };
  slug: string;
};

export const BusinessDetailsPage = withRouter(({ ...restProps }) => {
  const {
    match: {
      params: { slug },
    },
  } = restProps;
  const [businessDetails, setBusinessDetails] = React.useState<Item | null>(
    null
  );
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetch(`/businesses/${slug}`);
        const data = await responseData.json();
        setBusinessDetails(data);
      } catch (error) {}
    };
    fetchData();
    return () => {};
  }, [slug]);

  console.log(businessDetails);

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
      <main>
        <h2>Gościnność - slug: {slug}</h2>
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
