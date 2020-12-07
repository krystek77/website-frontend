import React from 'react';
import { JumbotronContainer } from '../containers';
import { Main } from '../components';
import BusinessDetailsPage from './businessDetails';

type Item = {
  id: number;
  title: string;
  Description: string;
  image: { url: string };
  slug: string;
};

export const BusinessPage = () => {
  const [businesses, setBusinesses] = React.useState<Item[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/businesses');
      const data = await response.json();
      setBusinesses(data);
    };
    fetchData();
    return () => {};
  }, []);
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
