import React from 'react';
import { Container, Inner } from './styles/content';

export const Content: React.FC<{ page?: string }> = ({
  children,
  page,
  ...restProps
}) => {
  return (
    <Container page={page} {...restProps}>
      <Inner page={page} {...restProps}>
        {children}
      </Inner>
    </Container>
  );
};
export default Content;
