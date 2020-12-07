import React from 'react';
import { Jumbotron } from '../components';
import { ROUTES } from '../constants';

export const JumbotronContainer: React.FC<{ page?: string; list: any[] }> = ({
  page = 'business',
  list,
}) => {
  return list && list.length > 0 ? (
    <Jumbotron.Container page={page}>
      <Jumbotron.Inner page={page}>
        {list.map((item) => {
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
                <Jumbotron.Pane
                  background={image && image.url}
                ></Jumbotron.Pane>
              </Jumbotron>
            </React.Fragment>
          );
        })}
      </Jumbotron.Inner>
    </Jumbotron.Container>
  ) : null;
};
export default JumbotronContainer;
