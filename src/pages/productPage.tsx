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
  ProductFeatures,
  Tabs,
  AttributeWrapper,
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
type Image = {
  id: number;
  url: string | undefined;
  alternativeText: string | undefined;
  formats: { thumbnail: { url: string } };
};
type Product = {
  id: number;
  model: string;
  product_attr: Attribute[];
  product_images: Image[];
};
type Controller = {
  id: number;
  text: string;
};
type WholeFeature = {
  id: number;
  content: string;
  image: Image | null;
};
type Feature = {
  id: number;
  title: string;
  whole_feature: WholeFeature[];
};
type ProductsLine = {
  category: {};
  description: string;
  id: number;
  kind: string;
  line: string;
  line_description: string | undefined;
  line_title: string | undefined;
  line_image: Image | null;
  products: Product[];
  controllers: Controller[];
  productFeatures: Feature[];
  standard: { id: number; content: string | undefined } | null;
  options: { id: number; content: string | undefined } | null;
};

export const ProductDetailsPage = withRouter((props) => {
  const [line, setLine] = React.useState<ProductsLine | null>(null);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [mainProductImage, setMainProductImage] = React.useState<Image | null>(
    null
  );

  const {
    match: {
      params: { slug },
    },
  } = props;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/lines/${slug}`);
      const data = await response.json();
      setLine(data);

      const productIDs = data.products.map((product: Product) => product.id);
      if (productIDs.length > 0) {
        const product = data.products.find(
          (product: Product) => product.id === productIDs[0]
        );
        setProduct(product);
        if (product.product_images.length > 0) {
          const mainProductImage = product.product_images[0];
          setMainProductImage(mainProductImage);
        } else {
          setMainProductImage(null);
        }
      } else {
        setProduct(null);
      }
    };

    fetchData();
    return () => {};
  }, [slug]);

  React.useEffect(() => {
    console.log('Product changed');
    window.scrollTo(0, 0);
  }, [product]);

  console.log('render');
  console.log('Line:', line);
  console.log('Product:', product);
  console.log('Image:', mainProductImage);
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
      {line ? (
        <React.Fragment>
          <SectionTitle page={PAGES.PRODUCT_PAGE}>
            <SectionTitle.Title page={PAGES.PRODUCT_PAGE}>
              {!!product?.product_attr[0]?.unit
                ? `${product?.product_attr[0]?.value}${product?.product_attr[0]?.unit}`
                : `${product?.product_attr[0]?.value}`}{' '}
              {line?.line_title}
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
              <section style={{ display: 'flex' }}>
                <div style={{ flexShrink: 0, marginRight: '2.5rem' }}>
                  {/** product gallery */}
                  {product && product.product_images.length > 0 ? (
                    <ProductGallery>
                      <React.Fragment>
                        <ProductGallery.ViewportImage
                          src={mainProductImage?.url}
                          alt={mainProductImage?.alternativeText}
                        />
                        <ProductGallery.ViewportThumbnails>
                          {product.product_images.map((image) => {
                            const imageURL = image.url;
                            return (
                              <ProductGallery.Thumbnail
                                key={image.id}
                                url={imageURL}
                                active={imageURL === mainProductImage?.url}
                                onClick={() => {
                                  setMainProductImage(image);
                                }}
                              />
                            );
                          })}
                        </ProductGallery.ViewportThumbnails>
                      </React.Fragment>
                    </ProductGallery>
                  ) : null}

                  {/** product gallery */}
                </div>
                <div>
                  {/** capacity title */}
                  <CapacityTitle>
                    <CapacityTitle.Title>
                      {line?.line_title}
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
                      <LineTitle.Line>{line?.line}</LineTitle.Line>
                    </LineTitle.AttributeWrapper>
                    <LineTitle.Title>{line?.line_title}</LineTitle.Title>
                  </LineTitle>
                  {/** line title */}
                  {/** product legend - model */}
                  <ProductLegend>
                    <ProductLegend.Name>Model:</ProductLegend.Name>
                    <ProductLegend.Value>{product?.model}</ProductLegend.Value>
                  </ProductLegend>
                  {/** product legend - model */}
                  {/** product legend - controllers */}
                  {line?.controllers && line.controllers.length > 0 && (
                    <ProductLegend>
                      <ProductLegend.Name>Sterowniki:</ProductLegend.Name>
                      {line.controllers.map((controller) => {
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
                  {line && line.line_description && (
                    <MarkdownParagraph
                      text={line.line_description}
                      page={PAGES.PRODUCT_PAGE}
                    />
                  )}
                  {/** line description */}
                  {/** horizontal available models */}
                  {line?.products && line?.products.length > 0 && (
                    <AvailableModels horizontal>
                      <AvailableModels.TitleWrapper href='specyfikacja' />
                      {line.products.map((product) => {
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
                              setMainProductImage(product.product_images[0]);
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
              </section>

              <section>
                {/** tabs - wyposażenie */}
                {product && product.product_attr.length > 0 && (
                  <h3 style={{ textTransform: 'uppercase' }}>
                    {product.product_attr[0]?.unit
                      ? `Wyposażenie - ${product.product_attr[0]?.value} ${product.product_attr[0]?.unit}`
                      : `Wyposażenie - ${product.product_attr[0]?.value}`}{' '}
                    {line?.line_title}
                  </h3>
                )}
                {line && line.standard && (
                  <Tabs>
                    <Tabs.TabLinksWrapper>
                      <Tabs.TabLink tab={0}>Standard</Tabs.TabLink>
                      <Tabs.TabLink tab={1}>Opcje</Tabs.TabLink>
                    </Tabs.TabLinksWrapper>

                    <Tabs.TabContentWrapper>
                      <Tabs.TabContent content={0}>
                        <Tabs.ReactMarkdownContent
                          inner={line && line?.standard}
                        />
                      </Tabs.TabContent>
                      <Tabs.TabContent content={1}>
                        <Tabs.ReactMarkdownContent
                          inner={line && line?.options}
                        />
                      </Tabs.TabContent>
                    </Tabs.TabContentWrapper>
                  </Tabs>
                )}
                {/** tabs */}
              </section>
              {/** product features */}
              <section>
                <ProductFeatures>
                  {product && product.product_attr.length > 0 && (
                    <ProductFeatures.Title>
                      {product.product_attr[0]?.unit
                        ? `Cechy - ${product.product_attr[0]?.value} ${product?.product_attr[0]?.unit}`
                        : `Cechy - ${product.product_attr[0]?.value}`}{' '}
                      {line?.line_title}
                    </ProductFeatures.Title>
                  )}
                  {line && line.productFeatures.length > 0 && (
                    <ProductFeatures.List>
                      {line.productFeatures.map((feature) => {
                        const featureID = feature.id;
                        const title = feature.title;
                        const whole_feature = feature.whole_feature;
                        return (
                          <ProductFeatures.ListItem key={featureID}>
                            <ProductFeatures.ListItemTitle>
                              {title}
                            </ProductFeatures.ListItemTitle>
                            <ProductFeatures.ContentWrapper>
                              {whole_feature &&
                                whole_feature.length > 0 &&
                                whole_feature.map((item) => {
                                  const wholeFeatureID = item.id;
                                  const content = item.content;
                                  const image = item.image;
                                  return (
                                    <ProductFeatures.Content
                                      key={wholeFeatureID}
                                      src={image?.url}
                                      alt={image?.alternativeText}
                                      content={content}
                                    />
                                  );
                                })}
                            </ProductFeatures.ContentWrapper>
                          </ProductFeatures.ListItem>
                        );
                      })}
                    </ProductFeatures.List>
                  )}
                </ProductFeatures>
                {/** product features */}
              </section>
              <section
                style={{
                  display: 'flex',
                  padding: '2rem 2.5rem',
                  scrollBehavior: 'smooth',
                }}
                id='specyfikacja'
              >
                <div
                  style={{ flexShrink: 0, width: '320px', marginRight: '25px' }}
                >
                  {/** vertical available models */}
                  {line?.products && line?.products.length > 0 && (
                    <AvailableModels>
                      {line?.products.map((product) => {
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
                </div>
                <div style={{ flexShrink: 1, width: '100%' }}>
                  {/** tabs */}
                  <Tabs>
                    <Tabs.TabLinksWrapper>
                      <Tabs.TabLink tab={0}>Specyfikacja</Tabs.TabLink>
                      <Tabs.TabLink tab={1}>
                        Dokumentacja techniczna
                      </Tabs.TabLink>
                      <Tabs.TabLink tab={2}>
                        Materiały informacyjne
                      </Tabs.TabLink>
                    </Tabs.TabLinksWrapper>
                    <Tabs.TabContentWrapper>
                      <Tabs.TabContent content={0}>
                        {product &&
                          product.product_attr.map((attr) => {
                            return (
                              <AttributeWrapper
                                attribute={attr}
                                key={attr.id}
                              />
                            );
                          })}
                      </Tabs.TabContent>
                      <Tabs.TabContent content={1}>
                        Content dokumentacja techniczna
                      </Tabs.TabContent>
                      <Tabs.TabContent content={2}>
                        Content materiały informacyjne
                      </Tabs.TabContent>
                    </Tabs.TabContentWrapper>
                  </Tabs>
                  {/** tabs */}
                </div>
              </section>
            </Content.Main>
          </Content>
        </React.Fragment>
      ) : (
        <div>Loading data</div>
      )}
    </React.Fragment>
  );
});

export default ProductDetailsPage;
