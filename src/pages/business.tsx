import React from 'react';
import { Main, Jumbotron } from '../components';
import { ROUTES } from '../constants';

export const BusinessPage = () => {
  const [businesses, setBusinesses] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/businesses');
      const data = await response.json();
      setBusinesses(data);
      console.log(data);
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <header style={{ marginTop: '45px', padding: '2rem' }}>
        <h1>Your business Page</h1>
      </header>
      <Main>
        {/* <h2>Poważnie o Twojej pralni</h2> */}
        <div
          style={{
            backgroundColor: '#161616',
            maxWidth: '1140px',
            margin: '0 auto',
          }}
        >
          {businesses && businesses.length > 0
            ? businesses.map(
                (item: {
                  id: number;
                  title: string;
                  Description: string;
                  image: { url: string };
                }) => {
                  const { image } = item;
                  return (
                    <React.Fragment key={item.id}>
                      <Jumbotron.Label id='goscinnosc'>
                        {item.title}
                      </Jumbotron.Label>
                      <Jumbotron
                        to={`${ROUTES.YOUR_BUSINESS}/${item.id}`}
                        title={item.title}
                        aria-label={item.title}
                        aria-labelledby='goscinnosc'
                      >
                        <Jumbotron.Pane>
                          <Jumbotron.Title>{item.title}</Jumbotron.Title>
                          <Jumbotron.Description
                            description={item.Description}
                          />
                          <Jumbotron.Label id='goscinnosc_btn'>
                            Dowiedz się więcej
                          </Jumbotron.Label>
                          <Jumbotron.Button
                            title={item.title}
                            aria-label={item.title}
                            aria-labelledby='goscinnosc_btn'
                          >
                            Zobacz więcej
                          </Jumbotron.Button>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane background={image.url}></Jumbotron.Pane>
                      </Jumbotron>
                    </React.Fragment>
                  );
                }
              )
            : null}
        </div>
      </Main>
    </React.Fragment>
  );
};

export default BusinessPage;
