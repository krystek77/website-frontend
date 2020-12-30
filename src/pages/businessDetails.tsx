import React from 'react';
import { ROUTES, MENU, PAGES } from '../constants';
import {
  Content,
  List,
  MarkdownContent,
  Section,
  SectionTitle,
  BusinessCard,
  LaundryProjectCard,
} from '../components';
import { HeroContainer } from '../containers';
import { useBusiness } from '../hooks';
import { withRouter } from 'react-router-dom';

export const BusinessDetailsPage = withRouter(({ ...restProps }) => {
  const { businesses } = useBusiness();
  const {
    history,
    match: {
      params: { slug },
    },
  } = restProps;

  let business = null;
  let laundry_projects = null;
  if (businesses && businesses.length > 0) {
    business = businesses.find((item) => item.slug === slug);
    laundry_projects = business && business.laundryprojects;
  }

  React.useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, [history]);
  console.log(laundry_projects);
  return (
    <React.Fragment>
      <HeroContainer data={business} />
      {business && (
        <React.Fragment>
          {/** section title */}
          <SectionTitle page={PAGES.BUSINESS_DETAILS_PAGE}>
            <SectionTitle.Title page={PAGES.BUSINESS_DETAILS_PAGE}>
              {business.title}
            </SectionTitle.Title>
            <SectionTitle.Label id='Businesses'>Twój biznes</SectionTitle.Label>
            <SectionTitle.Link
              to={ROUTES.YOUR_BUSINESS}
              title='Wróc przeglądu segmentów pralni'
              aria-label='Wróc przeglądu segmentów pralni'
              aria-labelledby='Businesses'
            >
              Wróc do przeglądania segmentów pralni
            </SectionTitle.Link>
          </SectionTitle>
          {/** section title */}
          {/** main section */}
          <Content page={PAGES.BUSINESS_DETAILS_PAGE}>
            <Content.Main page={PAGES.BUSINESS_DETAILS_PAGE}>
              <MarkdownContent content={business.introduction} />
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
                      <List.Item
                        key={item.id}
                        menu={MENU.MENU_V}
                        active={item.slug === slug}
                      >
                        <List.Label id={item.slug}>{item.title}</List.Label>
                        <List.NavLink
                          title={item.title}
                          aria-label={item.title}
                          aria-labelledby={item.slug}
                          menu={MENU.MENU_V}
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
          {/** main section */}
        </React.Fragment>
      )}

      {/** sections */}
      <Section.Wrapper page={PAGES.BUSINESS_DETAILS_PAGE}>
        <SectionTitle page={PAGES.BUSINESS_DETAILS_PAGE}>
          <SectionTitle.Title page={PAGES.BUSINESS_DETAILS_PAGE}>
            Najlepsze rozwiązania dla Twojegj pralni
          </SectionTitle.Title>
        </SectionTitle>
        <Section>
          {laundry_projects?.map((project) => {
            return (
              <LaundryProjectCard key={project.id}>
                <LaundryProjectCard.Title title={project.title} />
                <LaundryProjectCard.Requirments project={project} />
                <LaundryProjectCard.Title title='Rozwiązania' />
                <LaundryProjectCard.Solutions project={project} />
              </LaundryProjectCard>
            );
          })}
        </Section>
        <SectionTitle page={PAGES.BUSINESS_DETAILS_PAGE}>
          <SectionTitle.Title page={PAGES.BUSINESS_DETAILS_PAGE}>
            Rekomendowanie serie urządzeń
          </SectionTitle.Title>
        </SectionTitle>
        <Section>Sekcja 2</Section>
        <SectionTitle page={PAGES.BUSINESS_DETAILS_PAGE}>
          <SectionTitle.Title page={PAGES.BUSINESS_DETAILS_PAGE}>
            Pozostałe segmenty pralni
          </SectionTitle.Title>
        </SectionTitle>
        <Section>
          {businesses &&
            businesses.length > 0 &&
            businesses.map((item) => {
              return (
                <BusinessCard key={item.id}>
                  <BusinessCard.Article>
                    <BusinessCard.Title>{item.title}</BusinessCard.Title>
                    <BusinessCard.Image
                      src={item.image.url}
                      alt={item.image.alternativeText}
                    />
                    <BusinessCard.MarkDownDescription text={item.Description} />
                    <BusinessCard.Label id={item.slug}>
                      {item.title}
                    </BusinessCard.Label>
                    <BusinessCard.Link
                      to={`${ROUTES.YOUR_BUSINESS}/${item.slug}`}
                      title={item.title}
                      aria-label={item.title}
                      aria-labelledby={item.slug}
                    >
                      Zobacz
                    </BusinessCard.Link>
                  </BusinessCard.Article>
                </BusinessCard>
              );
            })}
        </Section>
      </Section.Wrapper>
      {/** sections */}
    </React.Fragment>
  );
});

export default BusinessDetailsPage;
