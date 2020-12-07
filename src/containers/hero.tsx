import React from 'react';
import { Hero } from '../components/hero';

type Props = {
  title: string;
  subtitle: string;
  image: { url: string };
};

export const HeroContainer: React.FC<{ data: Props | null | undefined }> = ({
  data,
}) => {
  return data ? (
    <React.Fragment>
      <Hero.Wrapper>
        <Hero.Cover>
          <Hero.Title>{data.title}</Hero.Title>
          <Hero.SubTitle>{data.subtitle}</Hero.SubTitle>
        </Hero.Cover>
        <Hero background={data.image.url}></Hero>
      </Hero.Wrapper>
    </React.Fragment>
  ) : null;
};

export default HeroContainer;
