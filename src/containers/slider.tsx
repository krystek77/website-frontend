import React from 'react';
import { Slider, Decorator } from '../components';
import { randomNumber } from '../utils';

export const SliderContainer: React.FC = () => {
  const [sliders, setSliders] = React.useState<any[]>([]);
  const [activeSlide, setActiveSlide] = React.useState<number>(1);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/sliders', {
        method: 'GET',
      });
      const data = await response.json();
      setSliders(data);
      setActiveSlide(data[randomNumber(0, data.length - 1)].id);
    };
    fetchData();
    return () => {};
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => {
      const indexActiveSlide = sliders.findIndex(
        (item: { id: number }) => item.id === activeSlide
      );
      const length = sliders.length;
      if (indexActiveSlide + 1 < length) {
        const idNextSlide = sliders[indexActiveSlide + 1].id;
        setActiveSlide(idNextSlide);
      } else {
        setActiveSlide(sliders[0].id);
      }
    }, 10000);
    return () => {
      clearInterval(id);
    };
  }, [sliders, activeSlide]);

  const activeSlider =
    sliders &&
    sliders.length > 0 &&
    sliders.find((item) => item.id === activeSlide);
  const backgroundImage =
    activeSlider &&
    activeSlider?.images.find(
      (item: { caption: string }) => item.caption === 'background'
    );
  const contentImage =
    activeSlider &&
    activeSlider?.images.find(
      (item: { caption: string }) => item.caption === 'content'
    );

  return sliders && sliders.length > 0 ? (
    <Slider>
      <Slider.Wrapper>
        {sliders.map(
          (item: {
            id: number;
            direction: string;
            title: string;
            slider_list: Array<{ id: number; text: string }>;
            description: string | null;
            buttonLabel: string;
            published_at: string;
          }) => {
            return (
              item.id === activeSlide && (
                <Slider.Slide key={item.id} direction={item.direction}>
                  <Slider.Panel>
                    <Slider.Title>{item.title}</Slider.Title>
                    <Slider.Published>
                      {item.published_at.slice(0, 10)}
                    </Slider.Published>
                    <Slider.Label id={item.title.replace(' ', '')}>
                      {item.title}
                    </Slider.Label>
                    <Slider.Image contentImage={contentImage} />
                    <Slider.List list={item.slider_list} />
                    <Slider.Description description={item.description} />
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
                  <Slider.Panel
                    backgroundImg={backgroundImage && backgroundImage.url}
                  >
                    <Decorator top='0px' left='0px' pattern='111110000' />
                    <Decorator bottom='0px' left='0px' pattern='000010111' />
                    <Decorator top='50%' right='0px' pattern='011011001' />
                  </Slider.Panel>
                </Slider.Slide>
              )
            );
          }
        )}
      </Slider.Wrapper>
      <Slider.ControlPanel>
        {sliders.map(
          (item: { id: number; title: string; buttonLabel: string }) => {
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
                  aria-labelledby={item.id.toString()}
                  active={item.id === activeSlide}
                >
                  {item.buttonLabel}
                </Slider.ControlButton>
              </React.Fragment>
            );
          }
        )}
      </Slider.ControlPanel>
    </Slider>
  ) : null;
};

export default SliderContainer;
