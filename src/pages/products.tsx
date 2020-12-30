import React from 'react';
import { Content, SectionTitle, FilterCard } from '../components';
import { HeroContainer, ProductCardContainer } from '../containers';
import { PAGES } from '../constants';

type Category = {
  name: string;
  id: string;
  lines: any[];
};
export const ProductsPage = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [choosenCategory, setChoosenCategory] = React.useState(() => {
    const category = localStorage.getItem('choosenCategory');
    return category ? category : 'Pralnicowirówki';
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/categories');
      const data = await response.json();
      setCategories(data);
      console.log('Categories', data);
    };
    fetchData();
    return () => {};
  }, []);

  const lines =
    categories &&
    categories
      .map((item) => {
        const category = item.name;
        return item.lines.reduce((acc, element) => {
          const copyElement = { ...element };
          copyElement.category = category;
          return acc.concat(copyElement);
        }, []);
      })
      .reduce((acc, element) => {
        return acc.concat(element);
      }, [])
      .filter((item: any) => {
        if (choosenCategory === '') return item;
        return item.category === choosenCategory;
      });
  console.log('Lines', lines);
  console.log('choosenCategory', choosenCategory);

  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Products',
          subtitle: 'Products subtitle',
          image: { url: '' },
        }}
      />
      {/** page title */}
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
      {/** page title */}
      <Content page={PAGES.PRODUCTS}>
        {/** filter cards */}
        {categories && categories.length > 0 && (
          <FilterCard>
            <FilterCard.Legend>Odkryj swoje urządzenie</FilterCard.Legend>
            <FilterCard.GroupInput>
              <FilterCard.Clear
                type='button'
                onClick={() => {
                  setChoosenCategory('');
                  localStorage.setItem('choosenCategory', '');
                }}
                active={choosenCategory === ''}
              />
            </FilterCard.GroupInput>
            {categories.map((category) => {
              return (
                <FilterCard.GroupInput key={category.id}>
                  <FilterCard.RadioInput
                    type='radio'
                    id={category.name}
                    name={category.name}
                    value={category.name}
                    checked={choosenCategory === category.name}
                    onChange={(e) => {
                      setChoosenCategory(e.currentTarget.value);
                      localStorage.setItem(
                        'choosenCategory',
                        e.currentTarget.value
                      );
                    }}
                  />
                  <FilterCard.LabelInput
                    htmlFor={category.name}
                    active={choosenCategory === category.name}
                  >
                    {category.name}
                  </FilterCard.LabelInput>
                </FilterCard.GroupInput>
              );
            })}
          </FilterCard>
        )}
        {/** filter cards */}
        {lines.length > 0 ? (
          <Content.Main page={PAGES.PRODUCTS}>
            <ProductCardContainer
              list={lines}
              filteredCategory={choosenCategory}
            />
          </Content.Main>
        ) : null}
      </Content>
    </React.Fragment>
  );
};

export default ProductsPage;
