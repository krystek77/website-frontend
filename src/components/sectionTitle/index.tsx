import React from 'react';
import { Container, Inner, Title } from './styles/sectionTitle';
interface ISectionTitle {
  Title: React.FC<{ page?: string }>;
}
export const SectionTitle: React.FC<{ page?: string }> & ISectionTitle = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};

SectionTitle.Title = function SectionTitleTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
export default SectionTitle;
