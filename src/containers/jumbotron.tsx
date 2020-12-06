import React from 'react';
import { Jumbotron } from '../components';
import { ROUTES } from '../constants';

export const JumbotronContainer: React.FC<{ page?: string }> = ({
  page = 'business',
}) => {
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

  return businesses && businesses.length > 0 ? (
    <Jumbotron.Container page={page}>
      <Jumbotron.Inner page={page}>
        {businesses.map(
          (item: {
            id: number;
            title: string;
            Description: string;
            image: { url: string };
            slug: string;
          }) => {
            const { image } = item;
            return (
              <React.Fragment key={item.id}>
                <Jumbotron.Label id={item.slug}>{item.title}</Jumbotron.Label>
                <Jumbotron
                  to={`${ROUTES.YOUR_BUSINESS}/${item.slug}`}
                  title={item.title}
                  aria-label={item.title}
                  aria-labelledby={item.slug}
                >
                  <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.Description description={item.Description} />
                    <Jumbotron.Label id={`${item.slug}_btn`}>
                      Dowiedz się więcej
                    </Jumbotron.Label>
                    <Jumbotron.Button
                      title={item.title}
                      aria-label={item.title}
                      aria-labelledby={`${item.slug}_btn`}
                    >
                      Zobacz więcej
                    </Jumbotron.Button>
                  </Jumbotron.Pane>
                  <Jumbotron.Pane background={image.url}></Jumbotron.Pane>
                </Jumbotron>
              </React.Fragment>
            );
          }
        )}
      </Jumbotron.Inner>
    </Jumbotron.Container>
  ) : null;
};
export default JumbotronContainer;
