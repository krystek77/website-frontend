import React from 'react';
import {
  Container,
  Inner,
  Cover,
  Title,
  SubTitle,
  Wrapper,
} from './styles/hero';

interface IHero {
  Wrapper: React.FC;
  Cover: React.FC;
  Title: React.FC;
  SubTitle: React.FC;
}
export const Hero: React.FC<{ background: string }> & IHero = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Hero.Wrapper = function HeroCover({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Hero.Cover = function HeroCover({ children, ...restProps }) {
  return <Cover {...restProps}>{children}</Cover>;
};
Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Hero.SubTitle = function HeroSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
export default Hero;
