import React from 'react';
import { useBusiness } from '../hooks';
import { JumbotronContainer, HeroContainer } from '../containers';
import { Content } from '../components';
import { PAGES } from '../constants';
import { withRouter } from 'react-router-dom';

export const BusinessPage = withRouter(({ history }) => {
  const { businesses } = useBusiness();

  React.useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, [history]);

  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Business',
          subtitle: 'Business subtitle',
          image: { url: '' },
        }}
      />
      <Content page={PAGES.BUSINESSES_PAGE}>
        <main>
          <JumbotronContainer list={businesses} />
        </main>
      </Content>
    </React.Fragment>
  );
});

export default BusinessPage;
