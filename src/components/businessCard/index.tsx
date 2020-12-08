import React from 'react';
import {
  Container,
  Inner,
  Article,
  Title,
  Description,
  Link,
  Label,
  Image,
} from './styles/businessCard';

interface IBusinessCard {
  Article: React.FC;
  Title: React.FC;
  Description: React.FC;
  Link: React.FC<{
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
    to: string;
  }>;
  Label: React.FC<{ id: string }>;
  Image: React.FC<{ src: string; alt: string }>;
}

export const BusinessCard: React.FC & IBusinessCard = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};

BusinessCard.Article = function BusinessCardArticle({
  children,
  ...restProps
}) {
  return <Article>{children}</Article>;
};
BusinessCard.Title = function BusinessCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
BusinessCard.Description = function BusinessCardDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};
BusinessCard.Link = function BusinessCardLink({ children, to, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
      <span>+</span>
    </Link>
  );
};
BusinessCard.Image = function BusinessCardImage({
  children,
  src,
  alt,
  ...restProps
}) {
  return (
    <Image {...restProps}>
      <img src={src} alt={alt} />
    </Image>
  );
};
BusinessCard.Label = function BusinessCardLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
export default BusinessCard;
