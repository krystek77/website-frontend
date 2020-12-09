import React from 'react';
import { Content, SectionTitle, Paragraph } from '../components';
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
      <SectionTitle page={PAGES.PRODUCTS}>
        <SectionTitle.Title page={PAGES.PRODUCTS}>
          Przemysłowe urządzenia oraz wyposażenie pralni wodnych
        </SectionTitle.Title>
        <SectionTitle.SubTitle page={PAGES.PRODUCTS}>
          To achieve maximum throughput, you need maximum performance. Our full
          line of heavy-duty industrial washing machines, tumble dryers, light
          commercial laundry equipment, finishing ironers and other specialized
          equipment offers design, construction and innovation like nothing else
          on the market. With ultimate durability, cutting-edge technology and
          unmatched efficiency, UniMac® delivers the absolute lowest cost of
          ownership in the commercial laundry industry.
        </SectionTitle.SubTitle>
      </SectionTitle>
      <Content page={PAGES.PRODUCTS}>
        <Content.Main page={PAGES.PRODUCTS}>
          <ProductCardContainer list={lines} />
        </Content.Main>
      </Content>
    </React.Fragment>
  );
};

export default ProductsPage;
