import React from 'react';
import { Layout, Slider, Decorator } from '../components';
import { slider } from '../fixtures';
import { randomNumber } from '../utils';

export const HomePage = () => {
  const [activeSlide, setActiveSlide] = React.useState<string>(
    slider[randomNumber(0, slider.length - 1)].id
  );

  React.useEffect(() => {
    const id = setInterval(() => {
      const indexActiveSlide = slider.findIndex(
        (item) => item.id === activeSlide
      );
      const length = slider.length;
      if (indexActiveSlide + 1 < length) {
        const idNextSlide = slider[indexActiveSlide + 1].id;
        setActiveSlide(idNextSlide);
      } else {
        setActiveSlide(slider[0].id);
      }
    }, 10000);
    return () => {
      clearInterval(id);
    };
  }, [activeSlide]);

  return (
    <Layout>
      {slider && slider.length > 0 ? (
        <Slider>
          <Slider.Wrapper>
            {slider.map((item) => {
              return (
                item.id === activeSlide && (
                  <Slider.Slide key={item.id} direction={item.direction}>
                    <Slider.Panel>
                      <Slider.Title>{item.title}</Slider.Title>
                      <Slider.Label id={item.title.replace(' ', '')}>
                        {item.title}
                      </Slider.Label>
                      <Slider.Image contentImg={item.contentImg} />
                      <Slider.List list={item.list} />
                      <Slider.Description description={item.description}>
                        {item.description}
                      </Slider.Description>
                      <Slider.ActionLinkButton
                        to='/'
                        title={item.title}
                        aria-label={item.title}
                        aria-labelledby={item.title.replace(' ', '')}
                      >
                        Zobacz więcej
                      </Slider.ActionLinkButton>
                      <Decorator top='0px' left='0px' pattern='010110010' />
                      {/* <Decorator bottom='0px' right='0px' pattern='000010111' /> */}
                    </Slider.Panel>
                    <Slider.Panel backgroundImg={item.backgroundImg}>
                      <Decorator top='0px' left='0px' pattern='111110000' />
                      <Decorator bottom='0px' left='0px' pattern='000010111' />
                      <Decorator top='50%' right='0px' pattern='011011001' />
                    </Slider.Panel>
                  </Slider.Slide>
                )
              );
            })}
          </Slider.Wrapper>
          <Slider.ControlPanel>
            {slider.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <Slider.Label id={item.id.toString()}>
                    {item.title}
                  </Slider.Label>
                  <Slider.ControlButton
                    key={item.id}
                    type='button'
                    onClick={() => setActiveSlide(item.id)}
                    title={item.title}
                    aria-label={item.title}
                    aria-labelledby={item.id}
                    active={item.id === activeSlide}
                  >
                    {item.buttonLabel}
                  </Slider.ControlButton>
                </React.Fragment>
              );
            })}
          </Slider.ControlPanel>
        </Slider>
      ) : null}

      <main>
        <h1>Home Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil
        adipisci voluptates modi architecto ratione eligendi provident aut
        explicabo placeat, deserunt nisi, repellat accusamus ut sit soluta.
        Minima, officiis voluptates.
      </main>
    </Layout>
  );
};

export default HomePage;
