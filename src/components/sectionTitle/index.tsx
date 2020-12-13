import React from 'react';
import {
  Container,
  Inner,
  Title,
  SubTitle,
  Link,
  Label,
} from './styles/sectionTitle';
interface ISectionTitle {
  Title: React.FC<{ page?: string }>;
  SubTitle: React.FC<{ page?: string }>;
  Link: React.FC<{
    page?: string;
    to: string;
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Label: React.FC<{ id: string }>;
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
SectionTitle.SubTitle = function SectionTitleSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
SectionTitle.Link = function SectionTitleLink({ children, to, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
SectionTitle.Label = function SectionTitleLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
export default SectionTitle;
