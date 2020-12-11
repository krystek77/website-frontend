import React from 'react';
import AvailableModels from '../components/availableModels';
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

  console.log('ID', currentProductID);
  console.log('products', products);
  console.log('product', product);

  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Product Details',
          subtitle: 'Product details',
          image: { url: '' },
        }}
      />

      <main style={{ marginTop: '45px', padding: '2rem' }}>
        <h1>Product Details Page</h1>
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
      </main>
    </React.Fragment>
  );
});

export default ProductDetailsPage;
