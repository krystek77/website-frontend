import React from 'react';
import { Content, ProductCard, Paragraph } from '../components';
import { HeroContainer } from '../containers';
import { PAGES } from '../constants';

type Category = {
  lines: any[];
};
export const ProductsPage = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/categories');
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchData();
    return () => {};
  }, []);

  const lines =
    categories &&
    categories
      .map((item) => {
        return item.lines.reduce((acc, element) => {
          return acc.concat(element);
        }, []);
      })
      .reduce((acc, element) => {
        return acc.concat(element);
      }, []);

  console.log(lines);
  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Products',
          subtitle: 'Products subtitle',
          image: { url: '' },
        }}
      />
      <Content page={PAGES.PRODUCTS}>
        <Content.Main page={PAGES.PRODUCTS}>
          {lines &&
            lines.length > 0 &&
            lines.map((item: any) => {
              return (
                <ProductCard key={item.id}>
                  <ProductCard.Label id={item.line}>
                    {item.line}
                  </ProductCard.Label>
                  <ProductCard.Link
                    to={''}
                    title={item.line}
                    aria-label={item.line}
                    aria-labelledby={item.line}
                  >
                    <ProductCard.Title>{item.line}</ProductCard.Title>
                    <ProductCard.Frame
                      src={item.line_image && item.line_image.formats.small.url}
                      alt={item.line_image && item.line_image.alternativeText}
                    >
                      {/** overlay */}
                      <ProductCard.Overlay>
                        <Paragraph light>{item.description}</Paragraph>
                      </ProductCard.Overlay>
                    </ProductCard.Frame>
                    <ProductCard.Label
                      id={`${item.line}_btn`}
                    >{`${item.line}_btn`}</ProductCard.Label>
                    <ProductCard.Button
                      type='button'
                      title='Zobacz więcej'
                      aria-label={`${item.line}_btn`}
                      aria-labelledby={`${item.line}_btn`}
                    >
                      Zobacz więcej
                    </ProductCard.Button>
                    <ProductCard.InforWrapper>
                      {item.line_attr &&
                        item.line_attr.length > 0 &&
                        item.line_attr.map((attr: any) => {
                          return (
                            <ProductCard.Info key={attr.id}>
                              <ProductCard.Name>{attr.name}</ProductCard.Name>
                              <ProductCard.Value>
                                {!!attr.unit
                                  ? `${attr.value} ${attr.unit}`
                                  : `${attr.value}`}
                              </ProductCard.Value>
                            </ProductCard.Info>
                          );
                        })}
                    </ProductCard.InforWrapper>
                  </ProductCard.Link>
                </ProductCard>
              );
            })}
        </Content.Main>
      </Content>
    </React.Fragment>
  );
};

export default ProductsPage;
