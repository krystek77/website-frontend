import React from 'react';
import { Container, Inner, Wrapper } from './styles/section';

interface ISection {
  Wrapper: React.FC<{ page?: string }>;
}

export const Section: React.FC<{ page?: string }> & ISection = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};

Section.Wrapper = function SectionWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
export default Section;
