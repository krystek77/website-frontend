import React from 'react';
import {
  Wrapper,
  Link,
  Title,
  Frame,
  Image,
  InfoWrapper,
  Info,
  Name,
  Value,
  Label,
  Overlay,
  Button,
} from './styles/productCard';

interface IProductCard {
  Link: React.FC<{
    to: string;
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Title: React.FC;
  Frame: React.FC<{ src: string; alt: string }>;
  InforWrapper: React.FC;
  Info: React.FC;
  Name: React.FC;
  Value: React.FC;
  Label: React.FC<{ id: string }>;
  Overlay: React.FC;
  Button: React.FC<{
    type: 'button';
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
}

export const ProductCard: React.FC<{
  filtered: boolean;
  category: string;
}> &
  IProductCard = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

ProductCard.Link = function ProductCardTitle({ children, to, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
ProductCard.Title = function ProductCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
ProductCard.Frame = function ProductCardFrame({
  src,
  alt,
  children,
  ...restProps
}) {
  return (
    <Frame {...restProps}>
      <Image src={src} alt={alt} />
      {children}
    </Frame>
  );
};
ProductCard.InforWrapper = function ProductCardInfoWrapper({
  children,
  ...restProps
}) {
  return <InfoWrapper {...restProps}>{children}</InfoWrapper>;
};
ProductCard.Info = function ProductCardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
ProductCard.Button = function ProductCardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
ProductCard.Name = function ProductCardName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
ProductCard.Value = function ProductCardValue({ children, ...restProps }) {
  return <Value {...restProps}>{children}</Value>;
};

ProductCard.Label = function ProductCardLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
ProductCard.Overlay = function ProductCardOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};
export default ProductCard;
