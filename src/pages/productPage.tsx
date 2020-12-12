import React from 'react';
import {
  Content,
  CapacityTitle,
  LineTitle,
  ProductLegend,
  MarkdownParagraph,
  AvailableModels,
} from '../components';
import { PAGES } from '../constants';
import { withRouter } from 'react-router-dom';
import { HeroContainer } from '../containers';
type Attribute = {
  id: string;
  name: string;
  value: string;
  unit: string;
};
type Product = {
  id: number;
  model: string;
  product_attr: Attribute[];
};
type RangeProducts = {
  category: {};
  description: string;
  id: number;
  kind: string;
  line: string;
  line_description: string | undefined;
  line_title: string | undefined;
  products: Product[];
};

export const ProductDetailsPage = withRouter((props) => {
  const [
    rangeProducts,
    setRangeProducts,
  ] = React.useState<RangeProducts | null>(null);
  const [currentProductID, setCurrentProductID] = React.useState<number>();

  const {
    match: {
      params: { slug },
    },
  } = props;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/lines/${slug}`);
      const data = await response.json();
      const id = data.products.map((product: Product) => product.id)[0];
      setRangeProducts(data);
      console.log('Line:', data);
      setCurrentProductID(id);
    };
    fetchData();
    return () => {};
  }, [slug]);

  let products: Product[] | null = null;
  let product: Product | undefined;
  if (!!rangeProducts) {
    products = rangeProducts?.products;
    if (!!products) {
      product = products.find((product) => product.id === currentProductID);
    }
  }
  console.log('Product', product);
  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Product Details',
          subtitle: 'Product details',
          image: { url: '' },
        }}
      />
      
      <Content page={PAGES.PRODUCT_PAGE}>
        <Content.Main>
          {/** capacity title */}
          <CapacityTitle>
            <CapacityTitle.AttributeWrapper>
              <CapacityTitle.Value>
                {!!product?.product_attr[0]?.unit
                  ? `${product?.product_attr[0]?.value}${product?.product_attr[0]?.unit}`
                  : `${product?.product_attr[0]?.value}`}
              </CapacityTitle.Value>
            </CapacityTitle.AttributeWrapper>
            <CapacityTitle.Title>
              {rangeProducts?.line_title}
            </CapacityTitle.Title>
          </CapacityTitle>
          {/** capacity title */}
          {/** line title */}
          <LineTitle>
            <LineTitle.AttributeWrapper>
              <LineTitle.Line>{rangeProducts?.line}</LineTitle.Line>
            </LineTitle.AttributeWrapper>
            <LineTitle.Title>{rangeProducts?.line_title}</LineTitle.Title>
          </LineTitle>
          {/** line title */}
          {/** product legend */}
          <ProductLegend>
            <ProductLegend.Name>Model:</ProductLegend.Name>
            <ProductLegend.Value>{product?.model}</ProductLegend.Value>
          </ProductLegend>
          <ProductLegend>
            <ProductLegend.Name>Sterownik:</ProductLegend.Name>
            <ProductLegend.Value>XControl</ProductLegend.Value>
          </ProductLegend>
          {/** product legend */}
          {/** line description */}
          {rangeProducts && rangeProducts.line_description && (
            <MarkdownParagraph
              text={rangeProducts.line_description}
              page={PAGES.PRODUCT_PAGE}
            />
          )}
          {/** line description */}
          {/** horizontal available models */}
          {products && products.length > 0 && (
            <AvailableModels horizontal>
              {products.map((product) => {
                let attributeName = '';
                let attributeValue = '';
                let attributeUnit = '';
                if (product.product_attr && product.product_attr.length > 0) {
                  attributeName = product.product_attr[0].name;
                  attributeValue = product.product_attr[0].value;
                  attributeUnit = product.product_attr[0].unit;
                }

                return (
                  <AvailableModels.ButtonWrapper
                    key={product.id}
                    horizontal
                    onClick={() => {
                      console.log('CHOOSEN ID', product.id);
                      setCurrentProductID(product.id);
                    }}
                  >
                    <AvailableModels.Label id={product.model}>
                      {product.model}
                    </AvailableModels.Label>
                    <AvailableModels.Button
                      type='button'
                      title={product.model}
                      aria-label={product.model}
                      aria-labelledby={product.model}
                    >
                      <AvailableModels.AttributeWrapper>
                        <AvailableModels.Name>
                          {attributeName}
                        </AvailableModels.Name>
                        <AvailableModels.Value>
                          {!!attributeUnit
                            ? `${attributeValue} ${attributeUnit}`
                            : `${attributeValue}`}
                        </AvailableModels.Value>
                      </AvailableModels.AttributeWrapper>
                      <AvailableModels.AttributeWrapper>
                        <AvailableModels.Model>
                          {product.model}
                        </AvailableModels.Model>
                      </AvailableModels.AttributeWrapper>
                    </AvailableModels.Button>
                  </AvailableModels.ButtonWrapper>
                );
              })}
            </AvailableModels>
          )}
          {/** vertical available models */}
          {products && products.length > 0 && (
            <AvailableModels>
              {products.map((product) => {
                let attributeName = '';
                let attributeValue = '';
                let attributeUnit = '';
                if (product.product_attr && product.product_attr.length > 0) {
                  attributeName = product.product_attr[0].name;
                  attributeValue = product.product_attr[0].value;
                  attributeUnit = product.product_attr[0].unit;
                }
                return (
                  <AvailableModels.ButtonWrapper
                    key={product.id}
                    onClick={() => {
                      console.log('CHOOSEN ID', product.id);
                      setCurrentProductID(product.id);
                    }}
                  >
                    <AvailableModels.Label id={product.model}>
                      {product.model}
                    </AvailableModels.Label>
                    <AvailableModels.Button
                      type='button'
                      title={product.model}
                      aria-label={product.model}
                      aria-labelledby={product.model}
                    >
                      <AvailableModels.AttributeWrapper>
                        <AvailableModels.Name>
                          {attributeName}
                        </AvailableModels.Name>
                        <AvailableModels.Value>
                          {!!attributeUnit
                            ? `${attributeValue} ${attributeUnit}`
                            : `${attributeValue}`}
                        </AvailableModels.Value>
                      </AvailableModels.AttributeWrapper>
                      <AvailableModels.AttributeWrapper>
                        <AvailableModels.Model>
                          {product.model}
                        </AvailableModels.Model>
                      </AvailableModels.AttributeWrapper>
                    </AvailableModels.Button>
                  </AvailableModels.ButtonWrapper>
                );
              })}
            </AvailableModels>
          )}
        </Content.Main>
      </Content>
    </React.Fragment>
  );
});

export default ProductDetailsPage;
