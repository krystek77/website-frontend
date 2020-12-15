import React from 'react';
import ReactMarkdown from 'react-markdown';
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

interface IProductFeaturesContext {
  active: boolean;
  setActive: (active: boolean) => void;
}

const defaultValueContext = {
  active: false,
  setActive: (active: boolean) => {},
};

const ProductFeaturesContext = React.createContext<IProductFeaturesContext>(
  defaultValueContext
);
const ProductFeaturesContextProvider: React.FC = ({ children }) => {
  const [active, setActive] = React.useState<boolean>(false);
  return (
    <ProductFeaturesContext.Provider value={{ active, setActive }}>
      {children}
    </ProductFeaturesContext.Provider>
  );
};

const useProductFeaturesContext = () =>
  React.useContext(ProductFeaturesContext);

interface IProductFeatures {
  Title: React.FC;
  List: React.FC;
  ListItem: React.FC;
  ListItemTitle: React.FC;
  ContentWrapper: React.FC;
  Content: React.FC<{
    src: string | undefined;
    alt: string | undefined;
    content: string;
  }>;
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
  return (
    <ProductFeaturesContextProvider>
      <ListItem {...restProps}>{children}</ListItem>
    </ProductFeaturesContextProvider>
  );
};
ProductFeatures.ListItemTitle = function ProductFeaturesListItemTitle({
  children,
  ...restProps
}) {
  const { active, setActive } = useProductFeaturesContext();
  return (
    <ListItemTitle
      {...restProps}
      active={active}
      onClick={() => setActive(!active)}
    >
      <button type='button'>+</button>
      <h4>{children}</h4>
    </ListItemTitle>
  );
};

ProductFeatures.ContentWrapper = function ProductFeaturesContentWrapper({
  children,
  ...restProps
}) {
  const { active } = useProductFeaturesContext();
  return (
    <ContentWrapper {...restProps} active={active}>
      {children}
    </ContentWrapper>
  );
};

ProductFeatures.Content = function ProductFeaturesContent({
  src,
  alt,
  content,
  ...restProps
}) {
  return (
    <Content {...restProps}>
      {src ? (
        <div className='image-container'>
          <img className='image-container__image' src={src} alt={alt} />
        </div>
      ) : null}
      <ReactMarkdown className='content'>{content}</ReactMarkdown>
    </Content>
  );
};

export default ProductFeatures;
