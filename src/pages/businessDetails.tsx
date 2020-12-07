import React from 'react';
import { ROUTES, MENU, PAGES } from '../constants';
import { Content, List, Hero } from '../components';
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
      {business && (
        <React.Fragment>
          <Hero.Wrapper>
            <Hero.Cover>
              <Hero.Title>{business.title}</Hero.Title>
              <Hero.SubTitle>{business.subtitle}</Hero.SubTitle>
            </Hero.Cover>
            <Hero background={business.image.url}></Hero>
          </Hero.Wrapper>
        </React.Fragment>
      )}
      {business && (
        <Content page={PAGES.BUSINESS_DETAILS_PAGE}>
          <Content.Main page={PAGES.BUSINESS_DETAILS_PAGE}>
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
          </Content.Main>
          <Content.Aside>
            <Content.Label id='twoj_biznes'>Twój biznes</Content.Label>
            <Content.TitleLink
              to={ROUTES.YOUR_BUSINESS}
              title='Twój biznes'
              aria-label='Twój biznes'
              aria-labelledby='twoj_biznes'
            >
              Twój biznes
            </Content.TitleLink>
            <List>
              <List.Wrapper menu={MENU.MENU_V}>
                {businesses.map((item) => {
                  return (
                    <List.Item key={item.id} menu={MENU.MENU_V}>
                      <List.Label id={item.slug}>{item.title}</List.Label>
                      <List.NavLink
                        title={item.title}
                        aria-label={item.title}
                        aria-labelledby={item.slug}
                        menu={MENU.MENU_V}
                        activeClassName='active'
                        to={`${ROUTES.YOUR_BUSINESS}/${item.slug}`}
                      >
                        {item.title}
                      </List.NavLink>
                    </List.Item>
                  );
                })}
              </List.Wrapper>
            </List>
          </Content.Aside>
        </Content>
      )}
    </React.Fragment>
  );
});

export default BusinessDetailsPage;
