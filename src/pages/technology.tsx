import React from 'react';
import { PAGES } from '../constants';
import { SectionTitle, Content } from '../components';
import { HeroContainer } from '../containers';

import RADAX from '../images/radax.png';
import CASCADEDRUM from '../images/cascadedrum.png';
import XCONTROL_FLEX_PLUS from '../images/xcontrolflexplus.png';
import EVO4 from '../images/evo4.png';
export const TechnologyPage = () => {
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
              // maxWidth: '1170px',
              margin: '0 auto',
              // border: '1px solid #008e6e',
              overflow: `hidden`,
            }}
          >
            <div style={{ width: '25%' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  width: '100%',
                  transform: 'translateX(0%)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    padding: '1rem',
                    flexShrink: 0,
                  }}
                >
                  <a
                    href='/'
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
                        SUSZARKI
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
                          Radax
                        </span>
                        <span
                          style={{
                            textTransform: 'lowercase',
                            fontSize: '1.2rem',
                            fontWeight: 'lighter',
                            lineHeight: 1.6,
                          }}
                        >
                          kombinacja osiowego i radialnego przepływu powietrza
                        </span>
                      </h3>
                      <small style={{ fontSize: '1.4rem', lineHeight: 1.6 }}>
                        Oszczędność
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
                        src={RADAX}
                        alt='Radax'
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
                </div>
                <div
                  style={{
                    width: '100%',
                    padding: '1rem',
                    flexShrink: 0,
                    // border: '1px solid green',
                  }}
                >
                  <a href='/' style={{ display: 'block', color: 'black' }}>
                    <div>
                      <em
                        style={{
                          fontSize: '1.2rem',
                          fontStyle: 'normal',
                          lineHeight: 1.6,
                          textTransform: 'uppercase',
                        }}
                      >
                        Pralnicowirówki
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
                          Cascade DRUM
                        </span>
                        <span
                          style={{
                            textTransform: 'lowercase',
                            fontSize: '1.2rem',
                            fontWeight: 'lighter',
                            lineHeight: 1.6,
                          }}
                        >
                          unikalna perforacja bębna wewnętrznego
                        </span>
                      </h3>
                      <small style={{ fontSize: '1.4rem', lineHeight: 1.6 }}>
                        Oszczędność
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
                        src={CASCADEDRUM}
                        alt='Cascade Drum'
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
                </div>
                <div
                  style={{
                    width: '100%',
                    padding: '1rem',
                    flexShrink: 0,
                    // border: '1px solid green',
                  }}
                >
                  <a href='/' style={{ display: 'block', color: 'black' }}>
                    <div>
                      <em
                        style={{
                          fontSize: '1.2rem',
                          fontStyle: 'normal',
                          lineHeight: 1.6,
                          textTransform: 'uppercase',
                        }}
                      >
                        Pralnicowirówki
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
                          Xcontrol FLEX PLUS
                        </span>
                        <span
                          style={{
                            textTransform: 'lowercase',
                            fontSize: '1.2rem',
                            fontWeight: 'lighter',
                            lineHeight: 1.6,
                          }}
                        >
                          bardziej przyjazny użytkownikowi sterownik dotykowy
                        </span>
                      </h3>
                      <small style={{ fontSize: '1.4rem', lineHeight: 1.6 }}>
                        Ergonomia
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
                        src={XCONTROL_FLEX_PLUS}
                        alt='XControl FLEX PLUS'
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
                </div>
                <div
                  style={{
                    width: '100%',
                    padding: '1rem',
                    flexShrink: 0,
                    // border: '1px solid green',
                  }}
                >
                  <a href='/' style={{ display: 'block', color: 'black' }}>
                    <div>
                      <em
                        style={{
                          fontSize: '1.2rem',
                          fontStyle: 'normal',
                          lineHeight: 1.6,
                          textTransform: 'uppercase',
                        }}
                      >
                        Suszarki
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
                          EVO4
                        </span>
                        <span
                          style={{
                            textTransform: 'lowercase',
                            fontSize: '1.2rem',
                            fontWeight: 'lighter',
                            lineHeight: 1.6,
                          }}
                        >
                          technologia suszarek z pompą ciepła
                        </span>
                      </h3>
                      <small style={{ fontSize: '1.4rem', lineHeight: 1.6 }}>
                        Ekologia
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
                        src={EVO4}
                        alt='EVO4'
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
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '1rem 2.5rem',
              }}
            >
              <button>next</button>
              <button>prev</button>
            </div>
          </div>
        </Content.Main>
      </Content>
    </React.Fragment>
  );
};

export default TechnologyPage;
