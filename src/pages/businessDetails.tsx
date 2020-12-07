import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useBusiness } from '../hooks';
import { Paragraph } from '../components';
import { withRouter } from 'react-router-dom';

export const BusinessDetailsPage = withRouter(({ ...restProps }) => {
  const { businesses } = useBusiness();
  const {
    match: {
      params: { slug },
    },
  } = restProps;

  let business = null;
  if (businesses && businesses.length > 0) {
    business = businesses.find((item) => item.slug === slug);
  }

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
      {business && (
        <React.Fragment>
          <main>
            <h2>{business.title}</h2>
            <Paragraph>
              As experts in healthcare laundry solutions, Primus offers a
              uniquely comprehensive and innovative range of hygienic barrier
              washer-extractors to simplify and optimize the setting up of your
              laundry. All our machines are designed with the highest quality
              components to ensure a long lifespan and optimized capacity in
              minimized space.
            </Paragraph>
            <Paragraph>
              Primus machines are a beacon of efficiency and outstanding hygiene
              to ensure user satisfaction. The patented technology developed by
              Primus, specifically for the healthcare industry, provides
              exquisite performance while being user-friendly, and facilitating
              easy control, monitoring and analysis.
            </Paragraph>
          </main>
          <aside>
            <h3>
              <Link to={ROUTES.YOUR_BUSINESS}>Twój bizness</Link>
            </h3>
            <ul>
              {businesses.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={`${ROUTES.YOUR_BUSINESS}/${item.slug}`}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </React.Fragment>
      )}
    </React.Fragment>
  );
});

export default BusinessDetailsPage;
