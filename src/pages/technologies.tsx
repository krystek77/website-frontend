import React from 'react';
import { PAGES, ROUTES } from '../constants';
import { SectionTitle, Content } from '../components';
import { HeroContainer } from '../containers';
import { technologies } from '../fixtures';

export const TechnologiesPage = () => {
  const [translateX, setTranslateX] = React.useState<number>(0);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const offset = 100;
  const length = technologies.length;
  const totalWidth = 4 * offset;

  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Technology',
          subtitle: 'Technology subtitle',
          image: { url: '' },
        }}
      />
      <SectionTitle page={PAGES.TECHNOLOGIES_PAGE}>
        <SectionTitle.Title page={PAGES.TECHNOLOGIES_PAGE}>
          Technologie pralnicze robiące różnice
        </SectionTitle.Title>
      </SectionTitle>
      <Content page={PAGES.TECHNOLOGIES_PAGE}>
        <Content.Main>
          <div
            style={{
              margin: '0 auto',
              overflow: `hidden`,
            }}
          >
            <div style={{ width: '25%' }}>
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  width: '100%',
                  transition: 'all 1s ease-out',
                  listStyle: 'none',
                  padding: '0',
                  transform: `translateX(${translateX}%)`,
                }}
              >
                {technologies && technologies.length > 0
                  ? technologies.map((item) => {
                      const url = item.thumbnail.url;
                      const alternativeText = item.thumbnail.alternativeText;
                      return (
                        <li
                          key={item.id}
                          style={{
                            width: '100%',
                            padding: '1rem',
                            flexShrink: 0,
                          }}
                        >
                          <a
                            href={`${ROUTES.TECHNOLOGIES}/${item.slug}`}
                            style={{
                              display: 'block',
                              color: 'black',
                            }}
                          >
                            <div>
                              <em
                                style={{
                                  fontSize: '1.2rem',
                                  fontStyle: 'normal',
                                  lineHeight: 1.6,
                                  textTransform: 'uppercase',
                                }}
                              >
                                {item.productsName}
                              </em>
                              <h3
                                style={{
                                  whiteSpace: 'normal',
                                  marginBottom: 0,
                                  lineHeight: 1.6,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'flex-start',
                                  fontSize: '1.6rem',
                                  height: '70px',
                                }}
                              >
                                <span
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: '1.8rem',
                                  }}
                                >
                                  {item.name}
                                </span>
                                <span
                                  style={{
                                    textTransform: 'lowercase',
                                    fontSize: '1.2rem',
                                    fontWeight: 'lighter',
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {item.shortDesc}
                                </span>
                              </h3>
                              <small
                                style={{ fontSize: '1.4rem', lineHeight: 1.6 }}
                              >
                                {item.advantage}
                              </small>
                            </div>

                            <picture
                              style={{
                                border: '1px solid hsl(0, 0%, 90%)',
                                borderRadius: '0.4rem',
                                display: 'block',
                              }}
                            >
                              <img
                                style={{
                                  maxWidth: '100%',
                                  display: 'block',
                                  margin: '0 auto',
                                }}
                                src={`../assets/images/technologies/${url}.png`}
                                alt={alternativeText}
                              />
                            </picture>
                          </a>
                          <a
                            href='/'
                            style={{
                              display: 'block',
                              backgroundColor: '#006f9e',
                              textAlign: 'center',
                              color: 'white',
                              padding: '1rem',
                              marginTop: '1rem',
                              borderRadius: '0.4rem',
                              marginLeft: 'auto',
                              width: 'max-content',
                            }}
                          >
                            więcej
                          </a>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '1.5rem 1rem 1.5rem',
              }}
            >
              <button
                title='w prawo'
                disabled={currentIndex === 0}
                style={{
                  backgroundColor: '#cc0800',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  margin: '0.2rem',
                  borderRadius: '0.4rem',
                  cursor: 'pointer',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  outline: 'none',
                }}
                onClick={() => {
                  if (currentIndex * offset > 0) {
                    setCurrentIndex((prevIndex) => prevIndex - 1);
                    setTranslateX((prevState) => prevState + 100);
                  }
                }}
              >
                {'<'}
              </button>
              <button
                title='w lewo'
                disabled={
                  currentIndex * offset + totalWidth === offset * length
                }
                style={{
                  backgroundColor: '#cc0800',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  margin: '0.2rem',
                  borderRadius: '0.4rem',
                  cursor: 'pointer',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  outline: 'none',
                }}
                onClick={() => {
                  if (currentIndex * offset + totalWidth < length * offset) {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                    setTranslateX((prevState) => prevState - 100);
                  }
                }}
              >
                {'>'}
              </button>
            </div>
          </div>
        </Content.Main>
      </Content>
    </React.Fragment>
  );
};

export default TechnologiesPage;
