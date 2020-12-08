import React from 'react';
import { ROUTES, MENU, PAGES } from '../constants';
import {
  Content,
  List,
  MarkdownParagraph,
  RegularList,
  Section,
  SectionTitle,
  BusinessCard,
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
  if (businesses && businesses.length > 0) {
    business = businesses.find((item) => item.slug === slug);
  }
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
      <HeroContainer data={business} />
      {business && (
        <Content page={PAGES.BUSINESS_DETAILS_PAGE}>
          <Content.Main page={PAGES.BUSINESS_DETAILS_PAGE}>
            <h2>{business.title}</h2>
            {/** Regular items list */}
            <RegularList>
              <RegularList.List>
                {business.business_list.map((item) => {
                  return (
                    <RegularList.Item key={item.id}>
                      {item.text}
                    </RegularList.Item>
                  );
                })}
              </RegularList.List>
            </RegularList>
            {/** Regular items list */}
            {/** paragraphs */}
            {business.paragraph.map((item) => {
              return <MarkdownParagraph key={item.id} text={item.text} />;
            })}
            {/** paragraphs */}
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
      {/** sections */}
      <Section.Wrapper page={PAGES.BUSINESS_DETAILS_PAGE}>
        <SectionTitle page={PAGES.BUSINESS_DETAILS_PAGE}>
          <SectionTitle.Title page={PAGES.BUSINESS_DETAILS_PAGE}>
            Najlepsze rozwiązania dla Twojego biznesu
          </SectionTitle.Title>
        </SectionTitle>
        <Section>Sekcja 1</Section>
        <SectionTitle page={PAGES.BUSINESS_DETAILS_PAGE}>
          <SectionTitle.Title page={PAGES.BUSINESS_DETAILS_PAGE}>
            Rekomendowanie serie urządzeń
          </SectionTitle.Title>
        </SectionTitle>
        <Section>Sekcja 2</Section>
        <SectionTitle page={PAGES.BUSINESS_DETAILS_PAGE}>
          <SectionTitle.Title page={PAGES.BUSINESS_DETAILS_PAGE}>
            Pozostałe biznesy
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
