import React from 'react';
import { Content } from '../components';
import { HeroContainer, ProductCardContainer } from '../containers';
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
          <ProductCardContainer list={lines} />
        </Content.Main>
      </Content>
    </React.Fragment>
  );
};

export default ProductsPage;
