import React from 'react';
import {
  SectionTitle,
  Content,
  ProductGallery,
  CapacityTitle,
  LineTitle,
  ProductLegend,
  MarkdownParagraph,
  AvailableModels,
} from '../components';
import { PAGES, ROUTES } from '../constants';
import { withRouter } from 'react-router-dom';
import { HeroContainer } from '../containers';
type Attribute = {
  id: string;
  name: string;
  value: string;
  unit: string;
};
type ProductImage = {
  id: number;
  url: string;
  alternativeText: string;
  formats: { thumbnail: { url: string } };
};
type Product = {
  id: number;
  model: string;
  product_attr: Attribute[];
  product_images: ProductImage[];
};
type Controller = {
  id: string;
  text: string;
};
type RangeProducts = {
  category: {};
  description: string;
  id: number;
  kind: string;
  line: string;
  line_description: string | undefined;
  line_title: string | undefined;
  line_image: ProductImage;
  products: Product[];
  controllers: Controller[];
};

export const ProductDetailsPage = withRouter((props) => {
  const [
    rangeProducts,
    setRangeProducts,
  ] = React.useState<RangeProducts | null>(null);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [mainImage, setMainImage] = React.useState<ProductImage | null>(null);

  const {
    match: {
      params: { slug },
    },
  } = props;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/lines/${slug}`);
      const data = await response.json();
      const id = data.products.map((product: Product) => product.id)[1];
      const product = data.products.find(
        (product: Product) => product.id === id
      );

      /**
       * Get image from product for instance FX65
       *
       */
      const mainImage = product.product_images[0];

      /**
       * Get image from line of products for instance line_FX
       * const mainImage = data.line_image;
       */

      setRangeProducts(data);
      setProduct(product);
      setMainImage(mainImage);
    };
    fetchData();
    return () => {};
  }, [slug]);

  console.log('render');
  console.log('Line:', rangeProducts);
  console.log('Product:', product);
  console.log('Image:', mainImage);
  const currentProductID = product && product.id;

  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Product Details',
          subtitle: 'Product details',
          image: { url: '' },
        }}
      />
      <SectionTitle page={PAGES.PRODUCT_PAGE}>
        <SectionTitle.Title page={PAGES.PRODUCT_PAGE}>
          {!!product?.product_attr[0]?.unit
            ? `${product?.product_attr[0]?.value}${product?.product_attr[0]?.unit}`
            : `${product?.product_attr[0]?.value}`}{' '}
          {rangeProducts?.line_title}
        </SectionTitle.Title>
        <SectionTitle.Label id='Produkty'>Produkty</SectionTitle.Label>
        <SectionTitle.Link
          to={ROUTES.PRODUCTS}
          title='Wróc do prouktów'
          aria-label='Wróc do prouktów'
          aria-labelledby='Produkty'
        >
          Wróc do Produkty
        </SectionTitle.Link>
      </SectionTitle>
      <Content page={PAGES.PRODUCT_PAGE}>
        <Content.Main>
          <div style={{ display: 'flex' }}>
            <div style={{ flexShrink: 0, marginRight: '2.5rem' }}>
              {/** product gallery */}
              <ProductGallery>
                {mainImage && (
                  <React.Fragment>
                    <ProductGallery.ViewportImage
                      src={mainImage.url}
                      alt={mainImage.alternativeText}
                    />
                    <ProductGallery.ViewportThumbnails>
                      {product &&
                        product.product_images.map((image) => {
                          const thumbnail = image.url;

                          return (
                            <ProductGallery.Thumbnail
                              key={image.id}
                              url={thumbnail}
                              active={thumbnail === mainImage.url}
                              onClick={() => {
                                setMainImage(image);
                              }}
                            />
                          );
                        })}
                    </ProductGallery.ViewportThumbnails>
                  </React.Fragment>
                )}
              </ProductGallery>
              {/** product gallery */}
            </div>
            <div>
              {/** capacity title */}
              <CapacityTitle>
                <CapacityTitle.Title>
                  {rangeProducts?.line_title}
                </CapacityTitle.Title>
                <CapacityTitle.Value>
                  {!!product?.product_attr[0]?.unit
                    ? `${product?.product_attr[0]?.value}${product?.product_attr[0]?.unit}`
                    : `${product?.product_attr[0]?.value}`}
                </CapacityTitle.Value>
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
              {/** product legend - model */}
              <ProductLegend>
                <ProductLegend.Name>Model:</ProductLegend.Name>
                <ProductLegend.Value>{product?.model}</ProductLegend.Value>
              </ProductLegend>
              {/** product legend - model */}
              {/** product legend - controllers */}
              {rangeProducts?.controllers &&
                rangeProducts.controllers.length > 0 && (
                  <ProductLegend>
                    <ProductLegend.Name>Sterowniki:</ProductLegend.Name>
                    {rangeProducts.controllers.map((controller) => {
                      return (
                        <ProductLegend.Link
                          to=''
                          title=''
                          aria-label=''
                          aria-labelledby=''
                          key={controller.id}
                        >
                          {controller.text}
                        </ProductLegend.Link>
                      );
                    })}
                  </ProductLegend>
                )}
              {/** product legend - controllers */}
              {/** line description */}
              {rangeProducts && rangeProducts.line_description && (
                <MarkdownParagraph
                  text={rangeProducts.line_description}
                  page={PAGES.PRODUCT_PAGE}
                />
              )}
              {/** line description */}
              {/** horizontal available models */}
              {rangeProducts?.products && rangeProducts?.products.length > 0 && (
                <AvailableModels horizontal>
                  <AvailableModels.TitleWrapper id='specyfikacja' />
                  {rangeProducts.products.map((product) => {
                    let attributeName = '';
                    let attributeValue = '';
                    let attributeUnit = '';
                    if (
                      product.product_attr &&
                      product.product_attr.length > 0
                    ) {
                      attributeName = product.product_attr[0].name;
                      attributeValue = product.product_attr[0].value;
                      attributeUnit = product.product_attr[0].unit;
                    }

                    return (
                      <AvailableModels.ButtonWrapper
                        key={product.id}
                        horizontal
                        onClick={() => {
                          setProduct(product);
                          setMainImage(product.product_images[0]);
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
                          active={currentProductID === product.id}
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
            </div>
          </div>

          {/** vertical available models */}
          {rangeProducts?.products && rangeProducts?.products.length > 0 && (
            <AvailableModels>
              {rangeProducts?.products.map((product) => {
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
                      setProduct(product);
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
                      active={currentProductID === product.id}
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
