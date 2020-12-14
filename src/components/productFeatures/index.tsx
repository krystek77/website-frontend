import React from 'react';
import {
  Container,
  Inner,
  Title,
  List,
  ListItem,
  ListItemTitle,
  ContentWrapper,
  Content,
} from './styles/productFeatures';
interface IProductFeatures {
  Title: React.FC;
  List: React.FC;
  ListItem: React.FC;
  ListItemTitle: React.FC<{ active?: boolean }>;
  ContentWrapper: React.FC<{ active?: boolean }>;
  Content: React.FC<{ src: string; alt: string; text: string }>;
}
export const ProductFeatures: React.FC & IProductFeatures = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};
ProductFeatures.Title = function ProductFeaturesTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};
ProductFeatures.List = function ProductFeaturesList({
  children,
  ...restProps
}) {
  return <List {...restProps}>{children}</List>;
};
ProductFeatures.ListItem = function ProductFeaturesListItem({
  children,
  ...restProps
}) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
ProductFeatures.ListItemTitle = function ProductFeaturesListItemTitle({
  children,
  ...restProps
}) {
  return (
    <ListItemTitle {...restProps}>
      <button type='button'>+</button>
      <h4>{children}</h4>
    </ListItemTitle>
  );
};

ProductFeatures.ContentWrapper = function ProductFeaturesContentWrapper({
  children,
  ...restProps
}) {
  return <ContentWrapper {...restProps}>{children}</ContentWrapper>;
};

ProductFeatures.Content = function ProductFeaturesContent({
  src,
  alt,
  text,
  ...restProps
}) {
  return (
    <Content {...restProps}>
      <div className='image-container'>
        <img className='image-container__image' src={src} alt={alt} />
      </div>
      <p className='text'>{text}</p>
    </Content>
  );
};

export default ProductFeatures;
