import React from 'react';
import { Container, Inner, Name, Value, Link } from './styles/productLegend';

interface IProductLegend {
  Name: React.FC;
  Value: React.FC;
  Link: React.FC<{
    to: string;
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
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
ProductLegend.Link = function ProductLegendLink({
  children,
  to,
  ...restProps
}) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

export default ProductLegend;
