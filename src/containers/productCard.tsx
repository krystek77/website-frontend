import React from 'react';
import { Paragraph, ProductCard } from '../components';

type Line = {
  id: string;
  line: string;
  kind: string;
  description: string;
  category: string;
  line_image: {
    id: string;
    alternativeText: string;
    url: string;
    formats: { thumbnail: { url: string }; small: { url: string } };
  };
  line_attr: { id: string; name: string; value: string }[];
};

export const ProductCardContainer: React.FC<{
  list: Line[];
  filteredCategory: string;
}> = ({ list, filteredCategory }) => {
  return list && list.length > 0 ? (
    <React.Fragment>
      {list.map((item: any) => {
        return (
          <ProductCard
            key={item.id}
            filtered={filteredCategory === item.category}
            category={filteredCategory}
          >
            <ProductCard.Label id={item.line.replace(' ', '')}>
              {item.line}
            </ProductCard.Label>
            <ProductCard.Link
              to={''}
              title={item.line}
              aria-label={item.line}
              aria-labelledby={item.line.replace(' ', '')}
            >
              <ProductCard.Title>{item.line}</ProductCard.Title>
              <ProductCard.Frame
                src={item.line_image && item.line_image.formats.small.url}
                alt={item.line_image && item.line_image.alternativeText}
              >
                {/** overlay */}
                <ProductCard.Overlay>
                  <ProductCard.OverlayTitle>
                    {item.kind}
                  </ProductCard.OverlayTitle>
                  <Paragraph light>{item.description}</Paragraph>
                </ProductCard.Overlay>
              </ProductCard.Frame>
              <ProductCard.Label
                id={`${item.line}_btn`.replace(' ', '')}
              >{`${item.line}_btn`}</ProductCard.Label>
              <ProductCard.Button
                type='button'
                title='Zobacz więcej'
                aria-label={`${item.line}_btn`}
                aria-labelledby={`${item.line}_btn`.replace(' ', '')}
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
    </React.Fragment>
  ) : null;
};
export default ProductCardContainer;
