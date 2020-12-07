import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p<{ light?: boolean }>`
  font-size: 1.6rem;
  font-weight: 300;
  white-space: normal;
  line-height: 1.3;
  max-width: 600px;
  /* margin: 0 auto; */
  ${({ theme, light }) => `
    margin-bottom:${theme.margin * 3.2}rem;
    color:${theme.colors.dark};
    ${light && `color:${theme.colors.medium};`}
  `}
`;
export const Paragraph: React.FC<{ light?: boolean }> = ({
  children,
  ...restProps
}) => {
  return <StyledParagraph {...restProps}>{children}</StyledParagraph>;
};

export default Paragraph;
