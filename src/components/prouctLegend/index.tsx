import React from 'react';
import { Container, Inner, Name, Value } from './styles/productLegend';

interface IProductLegend {
  Name: React.FC;
  Value: React.FC;
}

export const ProductLegend: React.FC & IProductLegend = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};

ProductLegend.Name = function ProductLegendName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
ProductLegend.Value = function ProductLegendValue({ children, ...restProps }) {
  return <Value {...restProps}>{children}</Value>;
};

export default ProductLegend;
